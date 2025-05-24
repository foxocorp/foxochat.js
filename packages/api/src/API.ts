import type REST from '@foxogram/rest'
import AuthAPI from './AuthAPI'
import ChannelAPI from './ChannelAPI'
import CommonAPI from './CommonAPI'
import MessageAPI from './MessageAPI'
import UserAPI from './UserAPI'

/**
 * The main hub for interacting with the Foxogram API.
 */
export default class API {
  /**
   * A wrapper for the Foxogram authentication API.
   */
  public readonly auth = new AuthAPI(this.rest)

  /**
   * A wrapper for the Foxogram channel API.
   */
  public readonly channel = new ChannelAPI(this.rest)

  /**
   * A wrapper for the Foxogram common API.
   */
  public readonly common = new CommonAPI(this.rest)

  /**
   * A wrapper for the Foxogram message API.
   */
  public readonly message = new MessageAPI(this.rest)

  /**
   * A wrapper for the Foxogram user API.
   */
  public readonly user = new UserAPI(this.rest)

  public constructor(
    /**
     * The REST client for the Foxogram API.
     */
    public readonly rest: REST,
  ) {}
}
