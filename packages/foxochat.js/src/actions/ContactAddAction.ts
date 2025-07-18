import BaseAction from '@/actions/BaseAction'
import { type GatewayDispatchContactAddPayload, GatewayDispatchEvents } from '@foxochatjs/gateway-types'
import type Client from '@/Client'
import { ClientEvents } from '@/types'

export default class ContactAddAction extends BaseAction<GatewayDispatchEvents.ContactAdd> {
  public constructor(client: Client) {
    super(client, GatewayDispatchEvents.ContactAdd)
  }

  public override handle(data: GatewayDispatchContactAddPayload): void {
    this.client.emit(ClientEvents.ContactAdd, this.client.users._add(data.id, data))
  }
}
