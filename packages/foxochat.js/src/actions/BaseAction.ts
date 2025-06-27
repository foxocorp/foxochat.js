import type Client from '@/Client'
import type { GatewayClientboundDispatchPayloadsMap, GatewayDispatchEvents } from '@foxochat/gateway-types'

export default abstract class BaseAction<P extends GatewayDispatchEvents = GatewayDispatchEvents> {
  protected constructor(
    protected readonly client: Client,
    public readonly event: P,
  ) {}

  public abstract handle(data: GatewayClientboundDispatchPayloadsMap[P]): void
}
