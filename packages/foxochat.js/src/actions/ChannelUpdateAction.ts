import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchChannelUpdatePayload, GatewayDispatchEvents } from '@foxochat/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class ChannelUpdateAction extends BaseAction<GatewayDispatchEvents.ChannelUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ChannelUpdate)
  }

  public override handle(data: GatewayDispatchChannelUpdatePayload): void {
    const newChannel = this.client.channels.cache.get(data.id) ?? this.client.channels._add(data.id, data)
    const oldChannel = newChannel._update(data)

    this.client.emit(ClientEvents.ChannelUpdate, oldChannel, newChannel)
  }
}
