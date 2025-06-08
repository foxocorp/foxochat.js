import API from '@foxochat/api'
import Gateway from '@foxochat/gateway'
import EventEmitter from 'eventemitter3'
import type { ConstructorOptions, Options } from './types'
import { DefaultOptions } from '@/constants'

/**
 * The main hub for interacting with the FoxoChat.
 */
export default class Client extends EventEmitter {
  /**
   * Configuration options for this instance.
   */
  public readonly options: Options

  /**
   * FoxoChat API client.
   */
  public readonly api: API

  /**
   * FoxoChat Gateway client.
   */
  public readonly gateway: Gateway

  public constructor(options?: ConstructorOptions) {
    super()

    this.options = { ...DefaultOptions, ...options } as Options

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
