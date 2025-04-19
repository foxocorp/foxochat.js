import type { ClientOptions } from "./types";
import { EventEmitter } from "eventemitter3";
import { REST } from "@foxogram/rest";
import { Gateway } from "@foxogram/gateway";

/**
 * The main hub for interacting with the Foxogram API.
 */
export class Client extends EventEmitter {
  public readonly rest: REST;
  public readonly gateway: Gateway;

  public constructor(options?: ClientOptions) {
    super();

    this.rest = new REST(options?.rest);
    this.gateway = new Gateway(options?.gateway);
  }

  public async login(token: string): Promise<void> {
    this.rest.setToken(token);
    this.gateway.setToken(token);
  }

  public async connect(): Promise<void> {
    await this.gateway.connect();
  }

  public async start(token: string): Promise<void> {
    await this.login(token);
    await this.connect();
  }
}
