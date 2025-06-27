export default class AuthEnforcedError extends Error {
  public constructor(
    public method: string,
    public route: string,
  ) {
    super()
  }
}
