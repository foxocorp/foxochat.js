import { EventEmitter } from "eventemitter3";

/**
 * The main hub for interacting with the Foxogram API.
 */
export class Client extends EventEmitter {
  constructor() {
    super();
  }
}
