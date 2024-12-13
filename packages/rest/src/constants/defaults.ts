import type { RESTOptions } from "../types";
import { RouteBases } from "@foxogram/api-types";

export const DefaultRESTOptions = {
  authPrefix: "Bearer",
  baseURL: RouteBases.api,
} as const satisfies RESTOptions;
