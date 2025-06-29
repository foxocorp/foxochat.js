import type { Channel, Member, Message, Typing, User } from '@/models'

export enum ClientEvents {
  Debug = 'debug',
  ChannelCreate = 'channelCreate',
  ChannelDelete = 'channelDelete',
  ChannelUpdate = 'channelUpdate',
  ContactAdd = 'contactAdd',
  ContactDelete = 'contactDelete',
  MemberAdd = 'memberAdd',
  MemberRemove = 'memberRemove',
  MessageCreate = 'messageCreate',
  MessageDelete = 'messageDelete',
  MessageUpdate = 'messageUpdate',
  TypingStart = 'typingStart',
  UserUpdate = 'userUpdate',
}

export interface ClientEventsMap {
  [ClientEvents.Debug]: [message: string]
  [ClientEvents.ChannelCreate]: [channel: Channel]
  [ClientEvents.ChannelDelete]: [channel: Channel]
  [ClientEvents.ChannelUpdate]: [oldChannel: Channel, newChannel: Channel]
  [ClientEvents.ContactAdd]: [user: User]
  [ClientEvents.ContactDelete]: [user: User]
  [ClientEvents.MemberAdd]: [member: Member]
  [ClientEvents.MemberRemove]: [member: Member]
  [ClientEvents.MessageCreate]: [message: Message]
  [ClientEvents.MessageDelete]: [channel: Message]
  [ClientEvents.MessageUpdate]: [oldMessage: Message, newMessage: Message]
  [ClientEvents.TypingStart]: [typing: Typing]
  [ClientEvents.UserUpdate]: [oldUser: User, newUser: User]
}
