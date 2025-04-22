import type { RESTOptions } from "../types";
import { RouteBases } from "@foxogram/api-types";

/**
 * Default options of REST client.
 */
export const DefaultRESTOptions = {
  authPrefix: "Bearer ",
  baseURL: RouteBases.api,
  enforceAuth: false,
  request: fetch,
} as const satisfies RESTOptions;
