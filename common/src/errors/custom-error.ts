export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // TS check: Only because we are extending a built in class
    // https://stackoverflow.com/questions/41102060/typescript-extending-error-class/41102306#41102306
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
