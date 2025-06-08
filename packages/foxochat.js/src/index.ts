export { default as Client, default } from './Client'

export * from './types'
export * from './constants'

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
  NotConnectedError as GatewayNotConnectedError,
  MissingTokenError as GatewayMissingTokenError,
  type ConstructorOptions as GatewayConstructorOptions,
  type Options as GatewayOptions,
  type GatewayDestroyOptions,
  type GatewayEventsMap,
} from '@foxochat/gateway'
