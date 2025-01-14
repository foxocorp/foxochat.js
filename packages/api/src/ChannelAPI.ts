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
  public async join(channel_name: string) {
    return await this.rest.put<never, RESTPutAPIChannelJoinResult>(
      APIRoutes.member(channel_name, UserMe),
    );
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channel_name: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelLeaveResult>(
      APIRoutes.member(channel_name, UserMe),
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
  public async get(channel_name: string) {
    return await this.rest.get<RESTGetAPIChannelResult>(
      APIRoutes.channel(channel_name),
    );
  }

  /**
   * Deletes the channel.
   */
  public async delete(channel_name: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelResult>(
      APIRoutes.channel(channel_name),
    );
  }

  /**
   * Edits the channel.
   */
  public async edit(channel_name: string, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<
      RESTPatchAPIChannelBody,
      RESTPatchAPIChannelResult
    >(APIRoutes.channel(channel_name), { body });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channel_name: string, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMemberResult>(
      APIRoutes.member(channel_name, memberKey),
    );
  }

  /**
   * Lists members in the channel.
   */
  public async members(channel_name: string) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.members(channel_name),
    );
  }
}
