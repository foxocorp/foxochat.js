import type { APIUser, UserFlags, UserStatus, UserType } from '@foxochatjs/api-types'
import type Client from '@/Client'
import Data from '@/models/Data'
import Avatar from '@/models/Avatar'

/**
 * API User model.
 */
export default class User extends Data<APIUser> {
  /**
   * The avatar of the user.
   */
  public avatar!: Avatar | null

  /**
   * The banner of the user.
   */
  public banner!: Avatar | null

  /**
   * The display name of the user.
   */
  public displayName!: string

  /**
   * The username of the user.
   */
  public username!: string

  /**
   * The bio of the user.
   */
  public bio!: string

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

  /**
   * Fetch this user.
   */
  public async fetch(force: boolean = true): Promise<User> {
    return await this.client.users.fetch({ key: this.id, force })
  }

  public override _patch(data: Partial<APIUser>): void {
    if ('avatar' in data) this.avatar = data.avatar ? new Avatar(this.client, data.avatar) : null
    if ('banner' in data) this.banner = data.banner ? new Avatar(this.client, data.banner) : null
    if ('display_name' in data) this.displayName = data.display_name!
    if ('username' in data) this.username = data.username!
    if ('bio' in data) this.bio = data.bio!
    if ('status' in data) this.status = data.status!
    if ('status_updated_at' in data) this.statusUpdatedAt = new Date(data.status_updated_at!)
    if ('flags' in data) this.flags = data.flags!
    if ('type' in data) this.type = data.type!
    if ('created_at' in data) this.createdAt = new Date(data.created_at!)
  }

  public override toJson(): APIUser {
    return {
      id: this.id,
      avatar: this.avatar?.toJson() ?? null,
      banner: this.avatar?.toJson() ?? null,
      bio: this.bio,
      display_name: this.displayName,
      username: this.username,
      status: this.status,
      status_updated_at: this.statusUpdatedAt.getTime(),
      flags: this.flags,
      type: this.type,
      created_at: this.createdAt.getTime(),
      channels: [],
      contacts: [],
      email: undefined,
    }
  }
}
