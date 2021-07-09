export const natsWrapper = {
  client: {
    publish: jest
      .fn() // jest creates a fake func call with mock implementation
      .mockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
      ),
  },
};
