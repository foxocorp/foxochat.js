import {
  APIRoutes,
  type MemberKey,
  type RESTDeleteAPIChannelLeaveResult,
  type RESTDeleteAPIChannelResult,
  type RESTGetAPIChannelMemberResult,
  type RESTGetAPIChannelMembersResult,
  type RESTGetAPIChannelResult,
  type RESTPatchAPIChannelBody,
  type RESTPatchAPIChannelResult,
  type RESTPostAPIChannelBody,
  type RESTPostAPIChannelResult,
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
    return await this.rest.put<never, RESTPutAPIChannelJoinResult>(
      APIRoutes.member(channelId, UserMe),
    );
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channelId: number) {
    return await this.rest.delete<never, RESTDeleteAPIChannelLeaveResult>(
      APIRoutes.member(channelId, UserMe),
    );
  }

  /**
   * Creates a new channel.
   */
  public async create(body: RESTPostAPIChannelBody) {
    return await this.rest.post<
      RESTPostAPIChannelBody,
      RESTPostAPIChannelResult
    >(APIRoutes.channels(), { body });
  }

  /**
   * Fetches a channel.
   */
  public async get(channelId: number) {
    return await this.rest.get<RESTGetAPIChannelResult>(
      APIRoutes.channel(channelId),
    );
  }

  /**
   * Deletes the channel.
   */
  public async delete(channelId: number) {
    return await this.rest.delete<never, RESTDeleteAPIChannelResult>(
      APIRoutes.channel(channelId),
    );
  }

  /**
   * Edits the channel.
   */
  public async edit(channelId: number, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<
      RESTPatchAPIChannelBody,
      RESTPatchAPIChannelResult
    >(APIRoutes.channel(channelId), { body });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channelId: number, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMemberResult>(
      APIRoutes.member(channelId, memberKey),
    );
  }

  /**
   * Lists members in the channel.
   */
  public async members(channelId: number) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.members(channelId),
    );
  }
}
