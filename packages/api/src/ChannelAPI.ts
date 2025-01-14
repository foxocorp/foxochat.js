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
  public async join(name: string) {
    return await this.rest.put<never, RESTPutAPIChannelJoinResult>(
      APIRoutes.member(name, UserMe),
    );
  }

  /**
   * Leaves the current user to the channel.
   */
  public async leave(name: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelLeaveResult>(
      APIRoutes.member(name, UserMe),
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
  public async get(name: string) {
    return await this.rest.get<RESTGetAPIChannelResult>(
      APIRoutes.channel(name),
    );
  }

  /**
   * Deletes the channel.
   */
  public async delete(name: string) {
    return await this.rest.delete<never, RESTDeleteAPIChannelResult>(
      APIRoutes.channel(name),
    );
  }

  /**
   * Edits the channel.
   */
  public async edit(name: string, body: RESTPatchAPIChannelBody) {
    return await this.rest.patch<
      RESTPatchAPIChannelBody,
      RESTPatchAPIChannelResult
    >(APIRoutes.channel(name), { body });
  }

  /**
   * Gets a member from the channel.
   */
  public async member(name: string, memberKey: MemberKey) {
    return await this.rest.get<RESTGetAPIChannelMemberResult>(
      APIRoutes.member(name, memberKey),
    );
  }

  /**
   * Lists members in the channel.
   */
  public async members(name: string) {
    return await this.rest.get<RESTGetAPIChannelMembersResult>(
      APIRoutes.members(name),
    );
  }
}
