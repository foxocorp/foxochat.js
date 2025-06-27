import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'
import type Client from '@/Client'
import type { APIUser } from '@foxochat/api-types'
import { ClientEvents } from '@/types'

export default class UserUpdateAction extends BaseAction<GatewayDispatchEvents.UserUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.UserUpdate)
  }

  public override handle(user: APIUser): void {
    const newUser = this.client.users.cache.get(user.id) ?? this.client.users.add(user.id, user)
    const oldUser = newUser._update(user)

    this.client.emit(ClientEvents.UserUpdate, oldUser, newUser)
  }
}
