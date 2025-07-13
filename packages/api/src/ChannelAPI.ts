import {
  APIRoutes,
  type Id,
  type MemberKey,
  type PublicChannelKey,
  type RESTDeleteAPIChannelLeaveResult,
  type RESTDeleteAPIChannelResult,
  type RESTGetAPIChannelMemberResult,
  type RESTGetAPIChannelMembersResult,
  type RESTGetAPIChannelResult,
  type RESTPatchAPIChannelBody,
  type RESTPatchAPIChannelResult,
  type RESTPostAPIChannelBody,
  type RESTPostAPIChannelResult,
  type RESTPutAPIChannelIconBody,
  type RESTPutAPIChannelIconResult,
  type RESTPutAPIChannelJoinResult,
  UserMe,
} from '@foxochat/api-types'
import type REST from '@foxochat/rest'

/**
 * A wrapper for the FoxoChat channel API.
 */
export default class ChannelAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Joins the current user to the channel.
   */
  public async join(channelId: Id) {
    return await this.rest.put<RESTPutAPIChannelJoinResult>(APIRoutes.channelMember(channelId, UserMe))
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channelId: Id) {
    return await this.rest.delete<RESTDeleteAPIChannelLeaveResult>(APIRoutes.channelMember(channelId, UserMe))
  }

  /**
   * Creates a new channel.
   */
  public async create(body: RESTPostAPIChannelBody) {
    return await this.rest.post<RESTPostAPIChannelResult>(APIRoutes.channels(), { body })
  }

  /**
   * Fetches a channel.
   */
  public async get(channelKey: PublicChannelKey) {
    return await this.rest.get<RESTGetAPIChannelResult>(APIRoutes.channel(channelKey))
  }

  /**
   * Deletes the channel.
   */
  public async delete(channelId: Id) {
    return await this.rest.delete<RESTDeleteAPIChannelResult>(APIRoutes.channel(channelId))
  }

  /**
   * Edits the channel.
   */
  public async edit(channelId: Id, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<RESTPatchAPIChannelResult>(APIRoutes.channel(channelId), {
      body,
    })
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channelId: Id, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMemberResult>(APIRoutes.channelMember(channelId, memberKey))
  }

  /**
   * Lists members in the channel.
   */
  public async members(channelId: Id) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(APIRoutes.channelMembers(channelId))
  }

  /**
   * Uploads the channel icon.
   */
  public async uploadIcon(channelId: Id, body: RESTPutAPIChannelIconBody) {
    return await this.rest.put<RESTPutAPIChannelIconResult>(APIRoutes.channelIcon(channelId), { body })
  }
}
