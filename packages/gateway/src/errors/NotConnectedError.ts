export class NotConnectedError extends Error {
  public constructor() {
    super("Not connected to Gateway");
  }
}
