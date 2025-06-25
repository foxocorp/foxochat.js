import API from '@foxochat/api'
import Gateway, { GatewayEvents } from '@foxochat/gateway'
import EventEmitter from 'eventemitter3'
import { ClientEvents, type ClientEventsMap, type ConstructorOptions, type Options } from './types'
import { DefaultOptions } from '@/constants'
import { UserManager } from '@/managers'
import { DispatchHandlers } from '@/DispatchHandlers'
import type { GatewayClientboundDispatchPayloadsMap, GatewayDispatchMessage } from '@foxochat/gateway-types'

/**
 * The main hub for interacting with the FoxoChat.
 */
export default class Client extends EventEmitter<ClientEventsMap> {
  /**
   * Configuration options for this instance.
   */
  public readonly options: Options

  /**
   * API client.
   */
  public readonly api: API

  /**
   * Gateway client.
   */
  public readonly gateway: Gateway

  /**
   * The user manager of this client.
   */
  public readonly users: UserManager = new UserManager(this)

  public constructor(options?: ConstructorOptions) {
    super()

    this.options = { ...DefaultOptions, ...options } as Options

    this.api = new API(this.options.api)
    this.gateway = new Gateway(this.options.gateway)

    this.attachEvents()
  }

  /**
   * Logs the client in, establishing a WebSocket connection.
   */
  public async login(token: string): Promise<void> {
    this.gateway.token = this.api.rest.token = token

    try {
      await this.gateway.connect()
    } catch (error) {
      await this.destroy()

      throw error
    }
  }

  /**
   * Logs out and destroys the client.
   */
  public async destroy(): Promise<void> {
    await this.gateway.destroy()
  }

  /**
   * Handles incoming dispatch events from the gateway.
   */
  private handleDispatch<K extends keyof GatewayClientboundDispatchPayloadsMap>(
    event: GatewayDispatchMessage<K, GatewayClientboundDispatchPayloadsMap[K]>,
  ): void {
    DispatchHandlers[event.t](this, event.d)
  }

  /**
   * Subscribes to gateway events and sets up internal listeners.
   */
  private attachEvents(): void {
    this.gateway.on(GatewayEvents.Debug, (message) => this.emit(ClientEvents.Debug, `[WS] ${message}`))
    this.gateway.on(GatewayEvents.Dispatch, this.handleDispatch.bind(this))
  }
}
