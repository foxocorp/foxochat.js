import type { GatewayOptions } from "../types";
import { RouteBases } from "@foxogram/api-types";

export const DefaultGatewayOptions = {
  baseURL: RouteBases.gateway,
} as const satisfies GatewayOptions;
