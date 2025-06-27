import type { User } from '@/models'

export enum ClientEvents {
  Debug = 'debug',
  UserUpdate = 'userUpdate',
}

export interface ClientEventsMap {
  [ClientEvents.Debug]: [message: string]
  [ClientEvents.UserUpdate]: [user: User]
}
