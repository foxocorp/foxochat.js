import type {
  GatewayClientboundMessage,
  GatewayHeartbeatMessage,
  GatewayIdentifyMessage,
  GatewayServerboundMessage,
} from '@foxochat/gateway-types'
import { GatewayCloseCodes, GatewayOpcodes } from '@foxochat/gateway-types'
import EventEmitter from 'eventemitter3'
import type { GatewayDestroyOptions, GatewayEventsMap, HeartbeatStats, Options } from '@/types'
import { DefaultOptions, GatewayEvents } from '@/constants'
import { MissingTokenError, NotConnectedError } from '@/errors'

/**
 * The Gateway API client for foxochat.js
 */
export default class Gateway extends EventEmitter<GatewayEventsMap> {
  /**
   * The gateway options.
   */
  public readonly options: Options
  /**
   * The authentication token.
   */
  public accessor token: string | null = null
  /**
   * The active WebSocket connection.
   */
  private connection: WebSocket | null = null
  /**
   * The interval ID for heartbeats.
   */
  private heartbeatInterval: number | null = null
  /**
   * The timestamp of the last heartbeat sent.
   */
  private lastHeartbeatAt = -1
  /**
   * The heartbeat latency stats.
   */
  private heartbeatStats: HeartbeatStats | null = null
  /**
   * Whether a socket error has occurred.
   */
  private socketErrorOccurred = false

  /**
   * Creates a new Gateway instance.
   */
  public constructor(options: Partial<Options> = {}) {
    super()

    this.options = { ...DefaultOptions, ...options } as Options
  }

  /**
   * The current gateway latency, or null if unknown.
   */
  public get latency(): number | null {
    return this.heartbeatStats ? this.heartbeatStats.ackAt - this.heartbeatStats.heartbeatAt : null
  }

  /**
   * Connects to the gateway.
   */
  public async connect(): Promise<void> {
    this.debug([`Connecting to ${this.options.url}`])

    this.connection = this.options.websocket(this.options.url)
    this.connection.onmessage = (event: MessageEvent<string>) => void this.onMessage(event.data)
    this.connection.onclose = (event: CloseEvent) => void this.onClose(event.code)
    this.connection.onerror = (event) => this.onError(event)
    this.connection.onopen = () => void this.onOpen()
  }

  /**
   * Destroys the gateway connection.
   */
  public async destroy(options: GatewayDestroyOptions = {}): Promise<void> {
    options.code ??= GatewayCloseCodes.HeartbeatTimeout

    this.debug(['Destroying gateway connection', `Code: ${options.code}`, `Reconnect: ${!!options.reconnect}`])

    this.socketErrorOccurred = false
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
    }

    if (this.connection) {
      const connection = this.connection

      connection.onmessage = null
      connection.onclose = null

      if (connection.readyState == WebSocket.OPEN) {
        const closePromise = new Promise<void>((resolve) => {
          connection.onclose = () => resolve()
        })

        connection.close(options.code)
        await closePromise

        this.emit(GatewayEvents.Closed, options.code)
      }
    }

    if (this.options.reconnect && options.reconnect) {
      await new Promise((resolve) => setTimeout(resolve, this.options.reconnectTimeout))
      await this.connect()
    }
  }

  /**
   * Sends a message to the gateway.
   */
  public async send<T extends GatewayServerboundMessage>(message: T): Promise<void> {
    if (!this.connection) throw new NotConnectedError()

    const data = JSON.stringify(message)

    return this.connection.send(data)
  }

  /**
   * Handles an incoming message from the gateway.
   */
  private async onMessage(data: string): Promise<void> {
    const message: GatewayClientboundMessage = JSON.parse(data)
    const { op } = message

    switch (op) {
      case GatewayOpcodes.Hello: {
        this.emit(GatewayEvents.Hello, message)

        const payload = message.d

        this.debug([`Starting to send heartbeats every ${payload.heartbeat_interval}ms`])

        this.heartbeatInterval = setInterval(() => void this.heartbeat(), payload.heartbeat_interval)
        break
      }

      case GatewayOpcodes.Dispatch: {
        this.emit(GatewayEvents.Dispatch, message)
        break
      }

      case GatewayOpcodes.HeartbeatAck: {
        const ackAt = Date.now()
        this.emit(
          GatewayEvents.HeartbeatComplete,
          message,
          (this.heartbeatStats = { ackAt, heartbeatAt: this.lastHeartbeatAt }),
        )
        break
      }

      default:
        this.debug(['Received unknown opcode', `Code: ${op}`])
    }
  }

  /**
   * Handles the open event for the gateway connection.
   */
  private async onOpen(): Promise<void> {
    await this.identify()
  }

  /**
   * Handles WebSocket error events.
   */
  private onError(event: Event) {
    this.emit(GatewayEvents.SocketError, event)
    this.socketErrorOccurred = true
  }

  /**
   * Handles the gateway close event.
   */
  private async onClose(code: number): Promise<void> {
    this.emit(GatewayEvents.Closed, code)

    switch (code as GatewayCloseCodes) {
      case GatewayCloseCodes.HeartbeatTimeout:
        this.debug(['The gateway server did not receive a timely heartbeat response'])
        return this.destroy({ code, reconnect: true })
      case GatewayCloseCodes.Unauthorized:
        this.debug(['Unauthorized operation before identify'])
        return this.destroy({ code, reconnect: false })
      default:
        this.debug(['The gateway connection closed with unexpected code'])
        return this.destroy({ code, reconnect: this.socketErrorOccurred })
    }
  }

  /**
   * Sends a heartbeat to the gateway.
   */
  private async heartbeat(): Promise<void> {
    await this.send<GatewayHeartbeatMessage>({
      d: null,
      op: GatewayOpcodes.Heartbeat,
    })

    this.lastHeartbeatAt = Date.now()
  }

  /**
   * Sends the identify payload to authenticate the session.
   */
  private async identify(): Promise<void> {
    if (!this.token) throw new MissingTokenError()

    const message: GatewayIdentifyMessage = {
      d: {
        token: this.token,
      },
      op: GatewayOpcodes.Identify,
    }

    await this.send(message)
  }

  /**
   * Emits debug messages.
   */
  private debug(messages: string[]) {
    this.emit(GatewayEvents.Debug, messages.join('\n\t'))
  }
}
