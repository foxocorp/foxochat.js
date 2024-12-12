import type { RequestMethod } from "../constants";

export type RouteLike = `/${string}`;

export interface RequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
}

export interface InternalRequestOptions extends RequestOptions {
  route: RouteLike;
  method: RequestMethod;
}
