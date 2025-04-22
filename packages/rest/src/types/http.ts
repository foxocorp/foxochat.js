import type { RequestBodyType, RequestMethod } from "../constants";
import type { URLSearchParams } from "whatwg-url";

/**
 * Represents an API route.
 */
export type RouteLike = `/${string}`;

/**
 * Represents the data that will be sent to the endpoint.
 */
export interface RequestOptions<B extends BodyInit> {
  /**
   * The body to send in this request.
   */
  body?: B;

  /**
   * The URL query parameters to be sent with the request
   */
  params?: URLSearchParams;

  /**
   * Additional headers to add to this request.
   */
  headers?: Record<string, string>;

  /**
   * If this request needs the Authorization header.
   */
  useAuth?: boolean;

  /**
   * If this request requires the Authorization token.
   */
  enforceAuth?: boolean;

  /**
   * The authorization prefix to use for this request.
   */
  authPrefix?: string;

  /**
   * Type of passed body.
   */
  bodyType?: RequestBodyType;
}

/**
 * Represents the data that will be sent to the endpoint.
 */
export interface InternalRequestOptions<B extends BodyInit>
  extends RequestOptions<B> {
  /**
   * Route to request.
   */
  route: RouteLike;

  /**
   * HTTP method to use.
   */
  method: RequestMethod;
}

/**
 * Internal HTTP-client response like structure.
 */
export interface ResponseLike
  extends Pick<
    Response,
    | "arrayBuffer"
    | "bodyUsed"
    | "headers"
    | "json"
    | "ok"
    | "status"
    | "statusText"
    | "text"
  > {
  body: ReadableStream<Uint8Array> | null;
}

/**
 * Possible request headers.
 */
export interface RequestHeaders {
  Authorization?: string;
}
