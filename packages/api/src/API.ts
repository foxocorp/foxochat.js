import { AuthAPI } from "./AuthAPI";
import { ChannelAPI } from "./ChannelAPI";
import { MessageAPI } from "./MessageAPI";
import { REST } from "@foxogram/rest";
import { UserAPI } from "./UserAPI";

/**
 * The main hub for interacting with the Foxogram API.
 */
export class API {
  /**
   * A wrapper for the Foxogram authentication API.
   */
  public readonly auth: AuthAPI;

  /**
   * A wrapper for the Foxogram channel API.
   */
  public readonly channel: ChannelAPI;

  /**
   * A wrapper for the Foxogram message API.
   */
  public readonly message: MessageAPI;

  /**
   * A wrapper for the Foxogram user API.
   */
  public readonly user: UserAPI;

  public constructor(
    /**
     * The REST client for the Foxogram API.
     */
    public readonly rest: REST,
  ) {
    this.auth = new AuthAPI(rest);
    this.channel = new ChannelAPI(rest);
    this.message = new MessageAPI(rest);
    this.user = new UserAPI(rest);
  }
}
