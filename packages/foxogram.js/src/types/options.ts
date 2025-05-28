import type { APIConstructorOptions } from '@foxogram/api'
import type { GatewayConstructorOptions } from '@foxogram/gateway'

export interface ClientOptions {
  api: APIConstructorOptions
  gateway: GatewayConstructorOptions
}

export type ClientConstructorOptions = Partial<ClientOptions>
