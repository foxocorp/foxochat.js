import type { ClientOptions } from "./types";
import { EventEmitter } from "eventemitter3";
import { REST } from "@foxogram/rest";

/**
 * The main hub for interacting with the Foxogram API.
 */
export class Client extends EventEmitter {
  public rest: REST;

  public constructor(options?: ClientOptions) {
    super();

    this.rest = new REST(options?.rest);
  }
}
