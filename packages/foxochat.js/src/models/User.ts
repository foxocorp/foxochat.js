import type { APIUser, UserFlags, UserStatus, UserType } from '@foxochat/api-types'
import type Client from '@/Client'
import Base from '@/models/Base'
import Attachment from '@/models/Attachment'

/**
 * API User model.
 */
export default class User extends Base<APIUser> {
  /**
   * The channels of the user.
   */
  public channels!: number[]

  /**
   * The contacts of the user.
   */
  public contacts!: number[]

  /**
   * The avatar of the user.
   */
  public avatar!: Attachment | null

  /**
   * The display name of the user.
   */
  public displayName!: string

  /**
   * The username of the user.
   */
  public username!: string

  /**
   * The email of the user.
   */
  public email!: string | null

  /**
   * The status of the user.
   */
  public status!: UserStatus

  /**
   * The timestamp when the user's status was last updated.
   */
  public statusUpdatedAt!: Date

  /**
   * The flags of the user.
   */
  public flags!: UserFlags

  /**
   * The type of the user.
   */
  public type!: UserType

  /**
   * The time when user created at.
   */
  public createdAt!: Date

  public constructor(client: Client, data: APIUser) {
    super(client, data.id, data)

    this._patch(data)
  }

  public override _patch(data: Partial<APIUser>): void {
    if ('channels' in data) this.channels = data.channels
    if ('contacts' in data) this.contacts = data.contacts
    if ('avatar' in data) this.avatar = data.avatar ? new Attachment(this.client, data.avatar) : null
    if ('display_name' in data) this.displayName = data.display_name
    if ('username' in data) this.username = data.username
    if ('email' in data) this.email = data.email
    if ('status' in data) this.status = data.status
    if ('status_updated_at' in data) this.statusUpdatedAt = new Date(data.status_updated_at)
    if ('flags' in data) this.flags = data.flags
    if ('type' in data) this.type = data.type
    if ('created_at' in data) this.createdAt = new Date(data.created_at)
  }

  public override toJson(): APIUser {
    return {
      id: this.id,
      channels: this.channels,
      contacts: this.contacts,
      avatar: this.avatar?.toJson() ?? null,
      display_name: this.displayName,
      username: this.username,
      email: this.email,
      status: this.status,
      status_updated_at: this.statusUpdatedAt.getTime(),
      flags: this.flags,
      type: this.type,
      created_at: this.createdAt.getTime(),
    }
  }
}
