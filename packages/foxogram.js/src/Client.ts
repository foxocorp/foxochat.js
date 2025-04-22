import type { ClientOptions } from "./types";
import { EventEmitter } from "eventemitter3";
import { REST } from "@foxogram/rest";
import { Gateway } from "@foxogram/gateway";
import { API } from "@foxogram/api";

/**
 * The main hub for interacting with the Foxogram API.
 */
export class Client extends EventEmitter {
  public readonly api: API;
  public readonly rest: REST;
  public readonly gateway: Gateway;

  public constructor(options?: ClientOptions) {
    super();

    this.rest = new REST(options?.rest);
    this.gateway = new Gateway(options?.gateway);

    this.api = new API(this.rest);
  }

  public async login(token: string): Promise<void> {
    this.rest.setToken(token);
  }

  public async connect(token: string): Promise<void> {
    this.gateway.setToken(token);

    await this.gateway.connect();
  }

  public async start(token: string): Promise<void> {
    await this.login(token);
    await this.connect(token);
  }
}
