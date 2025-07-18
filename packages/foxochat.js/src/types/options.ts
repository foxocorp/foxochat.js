import type { ConstructorOptions as APIConstructorOptions } from '@foxochatjs/api'
import type { ConstructorOptions as GatewayConstructorOptions } from '@foxochatjs/gateway'

export interface Options {
  api: APIConstructorOptions
  gateway: GatewayConstructorOptions
  mediaBaseUrl: string
}

export type ConstructorOptions = Partial<Options>

export interface FetchOptions {
  force?: boolean
}
