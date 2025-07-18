import BaseAction from '@/actions/BaseAction'
import { GatewayDispatchEvents, type GatewayDispatchUserStatusUpdatePayload } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class UserStatusUpdateAction extends BaseAction<GatewayDispatchEvents.UserStatusUpdate> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.UserStatusUpdate)
  }

  public override handle(data: GatewayDispatchUserStatusUpdatePayload): void {
    const newUser = this.client.users.cache.get(data.user_id)

    if (newUser) {
      const oldUser = newUser._update({ status: data.status })

      this.client.emit(ClientEvents.UserUpdate, oldUser, newUser)
    }
  }
}
