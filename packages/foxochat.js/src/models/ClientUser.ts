import User from '@/models/User'
import type { APIUser } from '@foxochat/api-types'
import type Client from '@/Client'

/**
 * API client User model.
 */
export default class ClientUser extends User {
  public constructor(client: Client, data: APIUser) {
    super(client, data)

    this._patch(data)
  }

  /**
   * The channel ids of the user.
   */
  public channelIds!: number[]

  /**
   * The contact ids of the user.
   */
  public contactIds!: number[]

  /**
   * The email of the user.
   */
  public email!: string

  public override _patch(data: Partial<APIUser>) {
    super._patch(data)

    if ('channels' in data) this.channelIds = data.channels
    if ('contacts' in data) this.contactIds = data.contacts
    if ('email' in data) this.email = data.email!
  }

  public override toJson(): APIUser {
    return { ...super.toJson(), channels: this.channelIds, contacts: this.channelIds, email: this.email }
  }
}
