import type { ConstructorOptions as APIConstructorOptions } from '@foxogram/api'
import type { ConstructorOptions as GatewayConstructorOptions } from '@foxogram/gateway'

export interface Options {
  api: APIConstructorOptions
  gateway: GatewayConstructorOptions
}

export type ConstructorOptions = Partial<Options>
