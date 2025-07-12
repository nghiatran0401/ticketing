// Abstract classes
// - Cannot be instantiated
// - Used to setup requirements for subclasses
// - Create a class when translated to JS, which mean we can use it in 'instanceof' checks
// -> that's why I use this method instead of defining an interface check

export abstract class CustomError extends Error {
  abstract statusCode: number; // the key 'abstract' means a subclass must implement the statusCode

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype); // only because of extending a built in class
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
