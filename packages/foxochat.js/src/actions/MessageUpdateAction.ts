import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchMessageUpdatePayload, GatewayDispatchEvents } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class MessageUpdateAction extends BaseAction<GatewayDispatchEvents.MessageUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.MessageUpdate)
  }

  public override handle(data: GatewayDispatchMessageUpdatePayload): void {
    const channel = this.client.channels._add(data.channel!.id, data.channel!)

    const newMessage = channel.messages.cache.get(data.id) ?? channel.messages._add(data.id, data)
    const oldMessage = newMessage._update(data)

    this.client.emit(ClientEvents.MessageUpdate, oldMessage, newMessage)
  }
}
