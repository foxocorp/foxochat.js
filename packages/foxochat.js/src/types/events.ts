export enum ClientEvents {
  Debug = 'debug',
}

export interface ClientEventsMap {
  [ClientEvents.Debug]: [message: string]
}
