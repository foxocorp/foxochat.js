import API from '@foxogram/api'
import Gateway from '@foxogram/gateway'
import EventEmitter from 'eventemitter3'
import type { ClientConstructorOptions, ClientOptions } from './types'
import { ClientDefaultOptions } from '#/constants'

/**
 * The main hub for interacting with the Foxogram.
 */
export default class Client extends EventEmitter {
  /**
   * Configuration options for this instance.
   */
  public readonly options: ClientOptions

  public readonly api: API
  public readonly gateway: Gateway

  public constructor(options?: ClientConstructorOptions) {
    super()

    this.options = { ...ClientDefaultOptions, ...options } as ClientOptions

    this.api = new API(this.options.api)
    this.gateway = new Gateway(this.options.gateway)
  }

  public async login(token: string): Promise<void> {
    this.gateway.token = this.api.rest.token = token

    try {
      await this.gateway.connect()
    } catch (error) {
      await this.destroy()

      throw error
    }
  }

  public async destroy(): Promise<void> {
    await this.gateway.destroy()
  }
}
