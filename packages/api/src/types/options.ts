import type { ConstructorOptions as RESTConstructorOptions } from '@foxochat/rest'
import type { MarkOptional } from 'ts-essentials'

/**
 * Options to be passed when creating the API client instance.
 */
export interface Options {
  rest: RESTConstructorOptions
}

export type ConstructorOptions = MarkOptional<Options, 'rest'>
