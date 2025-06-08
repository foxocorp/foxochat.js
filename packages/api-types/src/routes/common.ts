/**
 * The route bases.
 */
export interface RouteUrls {
  /**
   * The API base URL.
   */
  api: string

  /**
   * The CDN base URL.
   */
  cdn: string

  /**
   * The gateway base URL.
   */
  gateway: string
}

/**
 * The route environment.
 */
export type RouteEnvironment = 'development' | 'production'

/**
 * The route bases for each environment.
 */
export const RouteUrlsMap = {
  development: {
    api: 'https://api-dev.foxochat.app',
    cdn: 'https://cdn.foxochat.app',
    gateway: 'wss://api-dev.foxochat.app',
  },
  production: {
    api: 'https://api.foxochat.app',
    cdn: 'https://cdn.foxochat.app',
    gateway: 'wss://api.foxochat.app',
  },
} as const satisfies Record<RouteEnvironment, RouteUrls>
