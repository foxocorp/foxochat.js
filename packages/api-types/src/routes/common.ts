/**
 * The route bases.
 */
export interface RouteUrls {
  /**
   * The API base URL.
   */
  api: string

  /**
   * The media storage base URL.
   */
  media: string

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
    media: 'https://media.foxochat.app',
    gateway: 'wss://api-dev.foxochat.app',
  },
  production: {
    api: 'https://api.foxochat.app',
    media: 'https://media.foxochat.app',
    gateway: 'wss://api.foxochat.app',
  },
} as const satisfies Record<RouteEnvironment, RouteUrls>
