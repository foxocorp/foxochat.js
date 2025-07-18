import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchChannelCreatePayload, GatewayDispatchEvents } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class ChannelCreateAction extends BaseAction<GatewayDispatchEvents.ChannelCreate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ChannelCreate)
  }

  public override handle(data: GatewayDispatchChannelCreatePayload): void {
    this.client.emit(ClientEvents.ChannelCreate, this.client.channels._add(data.id, data))
  }
}
