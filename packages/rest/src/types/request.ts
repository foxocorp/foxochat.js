import type { RequestMethod } from "../constants";

export type RouteLike = `/${string}`;

export interface RequestOptions<B = unknown> {
  body?: B;
  headers?: Record<string, string>;
  useAuth?: boolean;
  authPrefix?: string;
}

export interface InternalRequestOptions<B = unknown> extends RequestOptions<B> {
  route: RouteLike;
  method: RequestMethod;
}
