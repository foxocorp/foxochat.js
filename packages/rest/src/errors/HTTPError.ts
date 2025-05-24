/**
 * Represents a HTTP error.
 */
export class HTTPError extends Error {
  public constructor(
    public status: number,
    public method: string,
    public route: string,
  ) {
    super()
  }
}
