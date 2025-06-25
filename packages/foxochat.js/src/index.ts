export { default as Client, default } from './Client'
export * from './DispatchHandlers'

export * from './constants'
export * from './managers'
export * from './models'
export * from './types'

export * from '@foxochat/api-types'
export * from '@foxochat/gateway-types'

export { API, type ConstructorOptions as APIConstructorOptions, type Options as APIOptions } from '@foxochat/api'

export {
  REST,
  APIError as RESTAPIError,
  AuthEnforcedError as RESTAuthEnforcedError,
  HTTPError as RESTHTTPError,
  type ConstructorOptions as RESTConstructorOptions,
  type Options as RESTOptions,
  type RouteLike,
  type RequestOptions,
} from '@foxochat/rest'

export {
  Gateway,
  GatewayEvents,
  NotConnectedError as GatewayNotConnectedError,
  MissingTokenError as GatewayMissingTokenError,
  type ConstructorOptions as GatewayConstructorOptions,
  type Options as GatewayOptions,
  type GatewayDestroyOptions,
  type GatewayEventsMap,
} from '@foxochat/gateway'
