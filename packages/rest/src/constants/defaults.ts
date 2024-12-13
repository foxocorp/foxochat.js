import { RouteBases } from "@foxogram/api-types";
import type { RESTOptions } from "../types";

export const DefaultRESTOptions = {
  baseURL: RouteBases.api,
  authPrefix: "Bearer",
} as const satisfies RESTOptions;
