import {
  APIRoutes,
  type MemberKey,
  type RESTDeleteAPIChannelLeaveResult,
  type RESTDeleteAPIChannelResult,
  type RESTGetAPIChannelMembersResult,
  type RESTGetAPIChannelResult,
  type RESTPatchAPIChannelBody,
  type RESTPatchAPIChannelResult,
  type RESTPostAPIChannelBody,
  type RESTPostAPIChannelResult,
  type RESTPutAPIChannelJoinResult,
  type Snowflake,
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
  public async join(channelId: Snowflake) {
    return await this.rest.put<never, RESTPutAPIChannelJoinResult>(
      APIRoutes.member(channelId, "@me"),
    );
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channelId: Snowflake) {
    return await this.rest.delete<never, RESTDeleteAPIChannelLeaveResult>(
      APIRoutes.member(channelId, "@me"),
    );
  }

  /**
   * Creates a new channel.
   */
  public async create(channelId: Snowflake, body: RESTPostAPIChannelBody) {
    return await this.rest.post<
      RESTPostAPIChannelBody,
      RESTPostAPIChannelResult
    >(APIRoutes.channel(channelId), { body });
  }

  /**
   * Fetches a channel.
   */
  public async get(channelId: Snowflake) {
    return await this.rest.get<RESTGetAPIChannelResult>(
      APIRoutes.channel(channelId),
    );
  }

  /**
   * Deletes the channel.
   */
  public async delete(channelId: Snowflake) {
    return await this.rest.delete<never, RESTDeleteAPIChannelResult>(
      APIRoutes.channel(channelId),
    );
  }

  /**
   * Edits the channel.
   */
  public async edit(channelId: Snowflake, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<
      RESTPatchAPIChannelBody,
      RESTPatchAPIChannelResult
    >(APIRoutes.channel(channelId), { body });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channelId: Snowflake, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.member(channelId, memberKey),
    );
  }

  /**
   * Lists members in the channel.
   */
  public async members(channelId: Snowflake) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.members(channelId),
    );
  }
}
