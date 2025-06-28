import { Channel, Message, User } from '@/models'

export enum ClientEvents {
  Debug = 'debug',
  UserUpdate = 'userUpdate',
  MessageCreate = 'messageCreate',
  ChannelCreate = 'channelCreate',
  ChannelDelete = 'channelDelete',
}

export interface ClientEventsMap {
  [ClientEvents.Debug]: [message: string]
  [ClientEvents.UserUpdate]: [oldUser: User, newUser: User]
  [ClientEvents.ChannelCreate]: [channel: Channel]
  [ClientEvents.ChannelDelete]: [channel: Channel]
  [ClientEvents.MessageCreate]: [message: Message]
}
