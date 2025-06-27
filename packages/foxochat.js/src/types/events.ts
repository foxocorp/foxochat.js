import { Message, User } from '@/models'

export enum ClientEvents {
  Debug = 'debug',
  UserUpdate = 'userUpdate',
  MessageCreate = 'messageCreate',
}

export interface ClientEventsMap {
  [ClientEvents.Debug]: [message: string]
  [ClientEvents.UserUpdate]: [oldUser: User, newUser: User]
  [ClientEvents.MessageCreate]: [message: Message]
}
