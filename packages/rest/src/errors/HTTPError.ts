/**
 * Represents a HTTP error.
 */
export default class HTTPError extends Error {
  public constructor(
    public status: number,
    public method: string,
    public route: string,
  ) {
    super()
  }
}
