import type { RequestMethod } from "../constants";

export type RouteLike = `/${string}`;

export interface RequestOptions<B = any> {
  body?: B;
  headers?: Record<string, string>;
}

export interface InternalRequestOptions<B = any> extends RequestOptions<B> {
  route: RouteLike;
  method: RequestMethod;
}
