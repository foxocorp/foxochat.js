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
  public async join(channelName: string) {
    return await this.rest.put<never, RESTPutAPIChannelJoinResult>(
      APIRoutes.member(channelName, UserMe),
    );
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(channelName: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelLeaveResult>(
      APIRoutes.member(channelName, UserMe),
    );
  }

  /**
   * Creates a new channel.
   */
  public async create(channelName: string, body: RESTPostAPIChannelBody) {
    return await this.rest.post<
      RESTPostAPIChannelBody,
      RESTPostAPIChannelResult
    >(APIRoutes.channel(channelName), { body });
  }

  /**
   * Fetches a channel.
   */
  public async get(channelName: string) {
    return await this.rest.get<RESTGetAPIChannelResult>(
      APIRoutes.channel(channelName),
    );
  }

  /**
   * Deletes the channel.
   */
  public async delete(channelName: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelResult>(
      APIRoutes.channel(channelName),
    );
  }

  /**
   * Edits the channel.
   */
  public async edit(channelName: string, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<
      RESTPatchAPIChannelBody,
      RESTPatchAPIChannelResult
    >(APIRoutes.channel(channelName), { body });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(channelName: string, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.member(channelName, memberKey),
    );
  }

  /**
   * Lists members in the channel.
   */
  public async members(channelName: string) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.members(channelName),
    );
  }
}
