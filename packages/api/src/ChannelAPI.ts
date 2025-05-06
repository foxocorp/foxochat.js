import {
  APIRoutes,
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
} from "@foxogram/api-types";
import type { REST } from "@foxogram/rest";

/**
 * A wrapper for the Foxogram channel API.
 */
export class ChannelAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Joins the current user to the channel.
   */
  public async join(channelId: number) {
    return await this.rest.put<RESTPutAPIChannelJoinResult>(APIRoutes.channelMember(channelId, UserMe));
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channelId: number) {
    return await this.rest.delete<RESTDeleteAPIChannelLeaveResult>(APIRoutes.channelMember(channelId, UserMe));
  }

  /**
   * Creates a new channel.
   */
  public async create(body: RESTPostAPIChannelBody) {
    return await this.rest.post<RESTPostAPIChannelResult>(APIRoutes.channels(), { body });
  }

  /**
   * Fetches a channel.
   */
  public async get(channelKey: PublicChannelKey) {
    return await this.rest.get<RESTGetAPIChannelResult>(APIRoutes.channel(channelKey));
  }

  /**
   * Deletes the channel.
   */
  public async delete(channelId: number) {
    return await this.rest.delete<RESTDeleteAPIChannelResult>(APIRoutes.channel(channelId));
  }

  /**
   * Edits the channel.
   */
  public async edit(channelId: number, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<RESTPatchAPIChannelResult>(APIRoutes.channel(channelId), {
      body,
    });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channelId: number, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMemberResult>(APIRoutes.channelMember(channelId, memberKey));
  }

  /**
   * Lists members in the channel.
   */
  public async members(channelId: number) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(APIRoutes.channelMembers(channelId));
  }

  /**
   * Uploads the channel icon.
   */
  public async uploadIcon(channelId: number, body: RESTPutAPIChannelIconBody) {
    return await this.rest.put<RESTPutAPIChannelIconResult>(APIRoutes.channelIcon(channelId), { body });
  }
}
