import type { GatewayDispatchEvents, GatewayOpcodes } from "../types";

export interface GatewayMessage {
  op: GatewayOpcodes;
  d?: unknown;
  s?: number;
  t?: string;
}

export interface GatewayDispatchMessage<
  E extends GatewayDispatchEvents,
  D = unknown,
> extends GatewayMessage {
  op: GatewayOpcodes.Dispatch;
  t: E;
  d: D;
}

export interface GatewaySimpleMessage<O extends GatewayOpcodes, D = null>
  extends Omit<GatewayMessage, "t" | "s"> {
  op: O;
  d: D;
  t: null;
  s: null;
}
