import REST from '@foxochatjs/rest'
import AuthAPI from '@/AuthAPI'
import ChannelAPI from '@/ChannelAPI'
import CommonAPI from '@/CommonAPI'
import MessageAPI from '@/MessageAPI'
import UserAPI from '@/UserAPI'
import type { ConstructorOptions, Options } from '@/types'
import { DefaultOptions } from '@/constants'

/**
 * The main hub for interacting with the FoxoChat API.
 */
export default class API {
  /**
   * Configuration options for this instance.
   */
  public readonly options: Options

  /**
   * The REST client for the FoxoChat API.
   */
  public readonly rest: REST

  /**
   * A wrapper for the FoxoChat authentication API.
   */
  public readonly auth: AuthAPI

  /**
   * A wrapper for the FoxoChat channel API.
   */
  public readonly channel: ChannelAPI

  /**
   * A wrapper for the FoxoChat common API.
   */
  public readonly common: CommonAPI

  /**
   * A wrapper for the FoxoChat message API.
   */
  public readonly message: MessageAPI

  /**
   * A wrapper for the FoxoChat user API.
   */
  public readonly user: UserAPI

  public constructor(options?: ConstructorOptions) {
    this.options = { ...DefaultOptions, ...options } as Options

    this.rest = new REST(this.options.rest)

    this.auth = new AuthAPI(this.rest)
    this.channel = new ChannelAPI(this.rest)
    this.common = new CommonAPI(this.rest)
    this.message = new MessageAPI(this.rest)
    this.user = new UserAPI(this.rest)
  }
}
