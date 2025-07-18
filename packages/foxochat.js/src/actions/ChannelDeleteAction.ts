import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchChannelDeletePayload, GatewayDispatchEvents } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class ChannelDeleteAction extends BaseAction<GatewayDispatchEvents.ChannelDelete> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ChannelDelete)
  }

  public override handle(data: GatewayDispatchChannelDeletePayload): void {
    const channel = this.client.channels.cache.get(data.id)

    if (channel) {
      this.client.channels._remove(data.id)

      this.client.emit(ClientEvents.ChannelDelete, channel)
    }
  }
}
