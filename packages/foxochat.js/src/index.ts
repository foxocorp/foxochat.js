export { default as Client, default } from './Client'

export * from './constants'
export * from './managers'
export * from './models'
export * from './types'

export * from '@foxochatjs/api-types'
export * from '@foxochatjs/gateway-types'

export {
  API,
  type ConstructorOptions as APIConstructorOptions,
  type Options as APIOptions,
} from '@foxochatjs/api'

export {
  REST,
  APIError as RESTAPIError,
  AuthEnforcedError as RESTAuthEnforcedError,
  HTTPError as RESTHTTPError,
  type ConstructorOptions as RESTConstructorOptions,
  type Options as RESTOptions,
  type RouteLike,
  type RequestOptions,
} from '@foxochatjs/rest'

export {
  Gateway,
  GatewayEvents,
  NotConnectedError as GatewayNotConnectedError,
  MissingTokenError as GatewayMissingTokenError,
  type ConstructorOptions as GatewayConstructorOptions,
  type Options as GatewayOptions,
  type GatewayDestroyOptions,
  type GatewayEventsMap,
} from '@foxochatjs/gateway'
