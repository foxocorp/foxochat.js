import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents, type GatewayDispatchTypingStartPayload } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'
import { Typing } from '@/models'

export default class TypingStartAction extends BaseAction<GatewayDispatchEvents.TypingStart> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.TypingStart)
  }

  public override handle(data: GatewayDispatchTypingStartPayload<true>): void {
    const channel = this.client.channels.cache.get(data.channel_id)
    const user = this.client.users.cache.get(data.user_id)

    if (channel && user) this.client.emit(ClientEvents.TypingStart, new Typing(this.client, channel, user, data))
  }
}
