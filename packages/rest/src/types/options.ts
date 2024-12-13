/**
 * Options to be passed when creating the REST client instance.
 */
export interface RESTOptions {
  /**
   * The base API url.
   */
  baseURL: string;

  /**
   * The authorization prefix to use for requests.
   */
  authPrefix: string;
}
