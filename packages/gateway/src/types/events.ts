import type { GatewayDispatchMessage } from "@foxogram/gateway-types";
import type { GatewayEvents } from "#/constants";

export interface HeartbeatStats {
  ackAt: number;
  heartbeatAt: number;
  latency: number;
}

export interface GatewayEventsMap {
  [GatewayEvents.Closed]: [code: number];
  [GatewayEvents.Hello]: [];
  [GatewayEvents.Dispatch]: [message: GatewayDispatchMessage];
  [GatewayEvents.HeartbeatComplete]: [stats: HeartbeatStats];
  [GatewayEvents.Debug]: [message: string];
  [GatewayEvents.SocketError]: [error: Error];
}
