import type { GatewayOptions } from "#/types";
import { RouteBases } from "@foxogram/api-types";

export const DefaultGatewayOptions = {
  reconnect: true,
  reconnectTimeout: 500,
  url: RouteBases.gateway,
} as const satisfies GatewayOptions;
