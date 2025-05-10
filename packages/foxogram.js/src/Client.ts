import API from "@foxogram/api";
import Gateway from "@foxogram/gateway";
import REST from "@foxogram/rest";
import EventEmitter from "eventemitter3";
import type { ClientOptions } from "./types";

/**
 * The main hub for interacting with the Foxogram.
 */
export default class Client extends EventEmitter {
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
    this.gateway.token = this.rest.token = token;

    try {
      await this.gateway.connect();
    } catch (error) {
      await this.destroy();

      throw error;
    }
  }

  public async destroy(): Promise<void> {
    await this.gateway.destroy();
  }
}
