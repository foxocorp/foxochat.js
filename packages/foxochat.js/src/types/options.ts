import type { ConstructorOptions as APIConstructorOptions } from '@foxochat/api'
import type { ConstructorOptions as GatewayConstructorOptions } from '@foxochat/gateway'

export interface Options {
  api: APIConstructorOptions
  gateway: GatewayConstructorOptions
  mediaBaseUrl: string
}

export type ConstructorOptions = Partial<Options>
