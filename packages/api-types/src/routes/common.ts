/**
 * The route bases.
 */
export interface RouteUrls {
  /**
   * The API base URL.
   */
  api: string

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
    api: 'https://api.dev.foxogram.su',
    gateway: 'wss://api.dev.foxogram.su',
  },
  production: {
    api: 'https://api.foxogram.su',
    gateway: 'wss://api.foxogram.su',
  },
} as const satisfies Record<RouteEnvironment, RouteUrls>
