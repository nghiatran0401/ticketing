// Mimic the singleton of Mongoose
import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  // "_": means for private property (cannot be changed)
  // "?": because we have not initialzed the constructor method yet
  // (want to do it in index & new ticket creating / updating routes)
  private _client?: Stan;

  // Getter method: define the client property on the instance
  get client() {
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting');
    }

    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on('connect', () => {
        resolve();
      });
      this.client.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
