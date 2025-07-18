import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents, type GatewayDispatchUserUpdatePayload } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class UserUpdateAction extends BaseAction<GatewayDispatchEvents.UserUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.UserUpdate)
  }

  public override handle(data: GatewayDispatchUserUpdatePayload): void {
    const newUser = this.client.users.cache.get(data.id) ?? this.client.users._add(data.id, data)
    const oldUser = newUser._update(data)

    this.client.emit(ClientEvents.UserUpdate, oldUser, newUser)
  }
}
