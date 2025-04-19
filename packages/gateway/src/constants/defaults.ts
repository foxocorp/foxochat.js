import type { GatewayOptions } from "../types";
import { RouteBases } from "@foxogram/api-types";

export const DefaultGatewayOptions = {
  baseURL: RouteBases.gateway,
  reconnect: true,
  reconnectTimeout: 500,
} as const satisfies GatewayOptions;
