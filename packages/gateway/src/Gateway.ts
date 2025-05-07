import "websocket-polyfill";

import type {
  GatewayClientboundMessage,
  GatewayHeartbeatMessage,
  GatewayIdentifyMessage,
  GatewayServerboundMessage,
} from "@foxogram/gateway-types";
import { GatewayCloseCodes, GatewayOpcodes } from "@foxogram/gateway-types";
import EventEmitter from "eventemitter3";
import { DefaultGatewayOptions, GatewayEvents } from "./constants";
import { MissingTokenError, NotConnectedError } from "./errors";
import type { GatewayDestroyOptions, GatewayEventsMap, GatewayOptions } from "./types";

export default class Gateway extends EventEmitter<GatewayEventsMap> {
  private token: string | null = null;
  private options: GatewayOptions;
  private connection: WebSocket | null = null;
  private heartbeatInterval: number | null = null;
  private lastHeartbeatAt = -1;
  private socketErrorOccurred = false;

  public constructor(options: Partial<GatewayOptions> = {}) {
    super();

    this.options = { ...DefaultGatewayOptions, ...options } as GatewayOptions;
  }

  public setToken(token: string | null): string | null {
    return (this.token = token);
  }

  public async connect(): Promise<void> {
    this.debug([`Connecting to ${this.options.url}`]);

    const connection = new WebSocket(this.options.url);

    connection.onmessage = (event: MessageEvent<string>) => {
      void this.onMessage(event.data);
    };

    connection.onclose = (event: CloseEvent) => {
      void this.onClose(event.code);
    };

    connection.onerror = (event) => {
      this.onError((event as ErrorEvent).error);
    };

    connection.onopen = () => {
      void this.onOpen();
    };

    this.connection = connection;
  }

  public async destroy(options: GatewayDestroyOptions = {}): Promise<void> {
    options.code ??= GatewayCloseCodes.HeartbeatTimeout;

    this.debug(["Destroying gateway connection", `Code: ${options.code}`, `Reconnect: ${!!options.reconnect}`]);

    this.socketErrorOccurred = false;
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }

    if (this.connection) {
      const connection = this.connection;

      connection.onmessage = null;
      connection.onclose = null;

      if (connection.readyState == WebSocket.OPEN) {
        const closePromise = new Promise<void>((resolve) => {
          connection.onclose = () => resolve();
        });

        connection.close(options.code);
        await closePromise;

        this.emit(GatewayEvents.Closed, options.code);
      }
    }

    if (this.options.reconnect && options.reconnect) {
      await new Promise((resolve) => setTimeout(resolve, this.options.reconnectTimeout));
      await this.connect();
    }
  }

  private async onMessage(data: string): Promise<void> {
    const message: GatewayClientboundMessage = JSON.parse(data);

    const { op } = message;

    switch (op) {
      case GatewayOpcodes.Hello: {
        this.emit(GatewayEvents.Hello);

        const payload = message.d;

        this.debug([`Starting to send heartbeats every ${payload.heartbeat_interval}ms`]);

        this.heartbeatInterval = setInterval(() => void this.heartbeat(), payload.heartbeat_interval);

        break;
      }

      case GatewayOpcodes.Dispatch: {
        this.emit(GatewayEvents.Dispatch, message);

        break;
      }

      case GatewayOpcodes.HeartbeatAck: {
        const ackAt = Date.now();

        this.emit(GatewayEvents.HeartbeatComplete, {
          ackAt,
          heartbeatAt: this.lastHeartbeatAt,
          latency: ackAt - this.lastHeartbeatAt,
        });

        break;
      }

      default:
        this.debug(["Recieved unknown opcode", `Code: ${op}`]);
    }
  }

  private async onOpen(): Promise<void> {
    await this.identify();
  }

  private onError(error: Error) {
    this.emit(GatewayEvents.SocketError, error);
    this.socketErrorOccurred = true;
  }

  private async onClose(code: number): Promise<void> {
    this.emit(GatewayEvents.Closed, code);

    switch (code as GatewayCloseCodes) {
      case GatewayCloseCodes.HeartbeatTimeout:
        this.debug(["The gateway server did not receive a timely heartbeat response"]);
        return this.destroy({ code, reconnect: true });
      case GatewayCloseCodes.Unauthorized:
        this.debug(["Unauthorized operation before identify"]);
        return this.destroy({ code, reconnect: false });
      default:
        this.debug(["The gateway connection closed with unexpected code"]);
        return this.destroy({ code, reconnect: this.socketErrorOccurred });
    }
  }

  public async send<T extends GatewayServerboundMessage>(message: T): Promise<void> {
    if (!this.connection) {
      throw new NotConnectedError();
    }

    const data = JSON.stringify(message);

    return this.connection.send(data);
  }

  private async heartbeat(): Promise<void> {
    await this.send<GatewayHeartbeatMessage>({
      d: null,
      op: GatewayOpcodes.Heartbeat,
    });

    this.lastHeartbeatAt = Date.now();
  }

  private async identify(): Promise<void> {
    if (!this.token) {
      throw new MissingTokenError();
    }

    const message: GatewayIdentifyMessage = {
      d: {
        token: this.token,
      },
      op: GatewayOpcodes.Identify,
    };

    await this.send(message);
  }

  private debug(messages: string[]) {
    this.emit(GatewayEvents.Debug, messages.join("\n\t"));
  }
}
