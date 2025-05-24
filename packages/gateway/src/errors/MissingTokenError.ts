export class MissingTokenError extends Error {
  public constructor() {
    super('Missing authorization token')
  }
}
