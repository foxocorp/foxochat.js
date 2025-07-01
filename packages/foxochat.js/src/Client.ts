import API from '@foxochat/api'
import Gateway, { GatewayEvents } from '@foxochat/gateway'
import EventEmitter from 'eventemitter3'
import { DefaultOptions } from '@/constants'
import { ActionManager, ChannelManager, UserManager } from '@/managers'
import { ClientEvents, ClientEventsMap, ConstructorOptions, Options } from '@/types'
import type { ClientUser } from '@/models'
import { UserMe } from '@foxochat/api-types'

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
   * User that the client is logged in as.
   */
  public user: ClientUser | null = null

  /**
   * The action manager of this client.
   */
  private readonly actions = new ActionManager(this)

  /**
   * The channel manager of this client.
   */
  public readonly channels = new ChannelManager(this)

  /**
   * The user manager of this client.
   */
  public readonly users = new UserManager(this)

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
      await this.users.fetch(UserMe)
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
   * Subscribes to gateway events and sets up internal listeners.
   */
  private attachEvents(): void {
    this.gateway.on(GatewayEvents.Debug, (message) => this.emit(ClientEvents.Debug, `[WS] ${message}`))
    this.gateway.on(GatewayEvents.Dispatch, (dispatchEvent) =>
      this.actions.items.get(dispatchEvent.t)?.handle(dispatchEvent.d),
    )
  }
}
