import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'
import type { APIChannel } from '@foxochat/api-types'

export default class ChannelUpdateAction extends BaseAction<GatewayDispatchEvents.ChannelUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ChannelUpdate)
  }

  public override handle(data: APIChannel): void {
    this.client.emit(ClientEvents.ChannelCreate, this.client.channels._add(data.id, data))
  }
}
