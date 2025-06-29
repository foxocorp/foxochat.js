import BaseManager from '@/managers/BaseManager'
import type Client from '@/Client'
import {
  BaseAction,
  ChannelCreateAction,
  ChannelDeleteAction,
  ChannelUpdateAction,
  ContactAddAction,
  ContactDeleteAction,
  MemberAddAction,
  MemberRemoveAction,
  MessageCreateAction,
  MessageDeleteAction,
  MessageUpdateAction,
  UserStatusUpdateAction,
  UserUpdateAction,
} from '@/actions'
import { GatewayDispatchEvents } from '@foxochat/gateway-types'

export default class ActionManager extends BaseManager {
  public readonly items = new Map<GatewayDispatchEvents, BaseAction>()

  public constructor(client: Client) {
    super(client)

    this.registerActions(
      new ChannelCreateAction(client),
      new ChannelDeleteAction(client),
      new ChannelUpdateAction(client),
      new ContactAddAction(client),
      new ContactDeleteAction(client),
      new MemberAddAction(client),
      new MemberRemoveAction(client),
      new MessageCreateAction(client),
      new MessageDeleteAction(client),
      new MessageUpdateAction(client),
      new UserStatusUpdateAction(client),
      new UserUpdateAction(client),
    )
  }

  private registerActions(...actions: BaseAction[]) {
    for (const action of actions) {
      this.items.set(action.event, action)
    }
  }
}
