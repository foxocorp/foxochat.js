import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchContactDeletePayload, GatewayDispatchEvents } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class ContactDeleteAction extends BaseAction<GatewayDispatchEvents.ContactDelete> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ContactDelete)
  }

  public override handle(data: GatewayDispatchContactDeletePayload): void {
    this.client.emit(ClientEvents.ContactDelete, this.client.users._add(data.id, data))
  }
}
