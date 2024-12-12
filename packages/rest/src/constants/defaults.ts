import { RouteBases } from "@foxogram/api-types";
import type { RESTOptions } from "../types";

export const DefaultRESTOptions = {
  apiBaseURL: RouteBases.api,
} as const satisfies RESTOptions;
