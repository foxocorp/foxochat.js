import BaseManager from '@/managers/BaseManager'
import type Client from '@/Client'
import { BaseAction, MessageCreateAction, UserUpdateAction } from '@/actions'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'

export default class ActionManager extends BaseManager {
  public readonly items = new Map<GatewayDispatchEvents, BaseAction>()

  public constructor(client: Client) {
    super(client)

    this.registerActions(new UserUpdateAction(client), new MessageCreateAction(client))
  }

  private registerActions(...actions: BaseAction[]) {
    for (const action of actions) {
      this.items.set(action.event, action)
    }
  }
}
