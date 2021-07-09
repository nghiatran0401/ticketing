import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import { MongoMemoryServer } from 'mongodb-memory-server'; // a copy of MongoDB running on memory for db testing easily & simultanously

// test/setup.ts is only available in the test env

// Add a property to global var
declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
    }
  }
}

let mongo: any;

// Hook funcs run beforeAll / beforeEach / afterAll of other tests
beforeAll(async () => {
  process.env.JWT_KEY = 'togetpassthetest';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // Get MongoMemoryServer start up & get Mongoose connect to it
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
});

beforeEach(async () => {
  // Connect to the db, delete & reset all the data
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  // Stop MongoDb server & disconnect
  await mongo.stop();
  await mongoose.connection.close();
});

// Global signin func for testing in current-user
global.signin = async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const cookie = response.get('Set-Cookie');
  return cookie;
};
