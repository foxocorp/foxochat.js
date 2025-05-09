import type { GatewayOptions } from "#/types";
import { RouteBases } from "@foxogram/api-types";

export const DefaultGatewayOptions = {
  url: RouteBases.gateway,
  websocket: (...args) => new WebSocket(...args),
  reconnect: true,
  reconnectTimeout: 500,
} as const satisfies GatewayOptions;
