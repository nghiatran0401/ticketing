import express from 'express';
import 'express-async-errors'; // handle async await funcs automatically
import { json } from 'body-parser';
import cookieSession from 'cookie-session'; // supports the cookie encryption
import { errorHandler, NotFoundError } from '@keitickets/common';

import { currentUserRouter } from './routes/current-user';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';

const app = express();
app.set('trust proxy', true); // trust the traffics which are proxied thru ingress-nginx
app.use(json());
app.use(
  cookieSession({
    signed: false, // disable encryption on cookie for easy-to-understand cross-languages purposes
    secure: process.env.NODE_ENV !== 'test', // make sure it is https when not in test env
  })
);

// ROUTES ENDPOINTS
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

// Handle routes' errors
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
