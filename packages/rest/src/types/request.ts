import type { RequestMethod } from "../constants";

/**
 * Represents an API route.
 */
export type RouteLike = `/${string}`;

/**
 * Represents the data that will be sent to the endpoint.
 */
export interface RequestOptions<B = unknown, Q = unknown> {
  /**
   * The body to send in this request.
   */
  body?: B;

  /**
   * The URL query parameters to be sent with the request
   */
  query?: Q;

  /**
   * Additional headers to add to this request.
   */
  headers?: Record<string, string>;

  /**
   * If this request needs the Authorization header
   */
  useAuth?: boolean;

  /**
   * The authorization prefix to use for this request.
   */
  authPrefix?: string;
}

/**
 * Represents the data that will be sent to the endpoint.
 */
export interface InternalRequestOptions<B = unknown> extends RequestOptions<B> {
  /**
   * Route to request.
   */
  route: RouteLike;

  /**
   * HTTP method to use.
   */
  method: RequestMethod;
}
