import type { GatewayDispatchEvents, GatewayOpcodes } from "../types";

/**
 * Gateway message.
 */
export interface GatewayMessage {
  op: GatewayOpcodes;
  d?: unknown;
  s?: number;
  t?: string;
}

/**
 * Gateway dispatch message.
 */
export interface GatewayDispatchMessage<E extends GatewayDispatchEvents = GatewayDispatchEvents, D = unknown>
  extends GatewayMessage {
  op: GatewayOpcodes.Dispatch;
  t: E;
  d: D;
}

/**
 * Simple gateway message.
 */
export interface GatewaySimpleMessage<O extends GatewayOpcodes, D = null> extends Omit<GatewayMessage, "t" | "s"> {
  op: O;
  d: D;
}
