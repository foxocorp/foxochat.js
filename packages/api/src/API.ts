import REST from '@foxogram/rest'
import AuthAPI from './AuthAPI'
import ChannelAPI from './ChannelAPI'
import CommonAPI from './CommonAPI'
import MessageAPI from './MessageAPI'
import UserAPI from './UserAPI'
import type { APIConstructorOptions, APIOptions } from '@/types'
import { APIDefaultOptions } from '@/constants'

/**
 * The main hub for interacting with the Foxogram API.
 */
export default class API {
  /**
   * Configuration options for this instance.
   */
  public readonly options: APIOptions

  /**
   * The REST client for the Foxogram API.
   */
  public readonly rest: REST

  /**
   * A wrapper for the Foxogram authentication API.
   */
  public readonly auth: AuthAPI

  /**
   * A wrapper for the Foxogram channel API.
   */
  public readonly channel: ChannelAPI

  /**
   * A wrapper for the Foxogram common API.
   */
  public readonly common: CommonAPI

  /**
   * A wrapper for the Foxogram message API.
   */
  public readonly message: MessageAPI

  /**
   * A wrapper for the Foxogram user API.
   */
  public readonly user: UserAPI

  public constructor(options?: APIConstructorOptions) {
    this.options = { ...APIDefaultOptions, ...options } as APIOptions

    this.rest = new REST(this.options.rest)

    this.auth = new AuthAPI(this.rest)
    this.channel = new ChannelAPI(this.rest)
    this.common = new CommonAPI(this.rest)
    this.message = new MessageAPI(this.rest)
    this.user = new UserAPI(this.rest)
  }
}
