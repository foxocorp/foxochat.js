import type { GatewayOptions } from "@foxogram/gateway";
import type { RESTOptions } from "@foxogram/rest";

export interface ClientOptions {
  rest?: Partial<RESTOptions>;
  gateway?: Partial<GatewayOptions>;
}
