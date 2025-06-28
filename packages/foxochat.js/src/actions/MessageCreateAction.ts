import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'
import type { APIMessage } from '@foxochat/api-types'

export default class MessageCreateAction extends BaseAction<GatewayDispatchEvents.MessageCreate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.MessageCreate)
  }

  public override handle(data: APIMessage): void {
    this.client.emit(
      ClientEvents.MessageCreate,
      this.client.channels._add(data.channel!.id, data.channel!).messages._add(data.id, data),
    )
  }
}
