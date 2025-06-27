import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'
import type { APIMessage } from '@foxochat/api-types'

export default class MessageCreateAction extends BaseAction<GatewayDispatchEvents.MessageCreate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.MessageCreate)
  }

  public override handle(message: APIMessage): void {
    const channel = this.client.channels.add(message.channel!.id, message.channel!)
    this.client.emit(ClientEvents.MessageCreate, channel.messages.add(message.id, message))
  }
}
