import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents, type GatewayDispatchMessageDeletePayload } from '@foxochat/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class MessageDeleteAction extends BaseAction<GatewayDispatchEvents.MessageDelete> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.MessageDelete)
  }

  public override handle(data: GatewayDispatchMessageDeletePayload): void {
    for (const channel of this.client.channels.cache.values()) {
      const message = channel.messages.cache.get(data.id)

      if (message) {
        channel.messages._remove(message.id)

        this.client.emit(ClientEvents.MessageDelete, message)

        return
      }
    }
  }
}
