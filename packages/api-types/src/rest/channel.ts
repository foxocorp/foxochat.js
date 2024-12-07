import type { APIChannel, APIMember, APIOk, ChannelType } from "../payloads";

/**
 * The result of POST /channels/.
 */
export type RESTPostAPIChannelResult = APIChannel;

/**
 * The body of POST /channels/.
 */
export interface RESTPostAPIChannelBody {
  /**
   * The name of the channel.
   */
  name: string;

  /**
   * The type of the channel.
   */
  type: ChannelType;
}

/**
 * The result of GET /channels/{id}.
 */
export type RESTGetAPIChannelResult = APIChannel;

/**
 * The result of GET /channels/{id}/members.
 */
export type RESTGetAPIChannelMembersResult = APIMember[];

/**
 * The result of GET /channels/{id}/members/{memberId}.
 */
export type RESTGetAPIChannelMemberResult = APIMember;

/**
 * The result of PUT /channels/{id}/members/@me.
 */
export type RESTPutAPIChannelJoinResult = APIMember;

/**
 * The result of DELETE /channels/{id}/members/@me.
 */
export type RESTDeleteAPIChannelLeaveResult = APIOk;

/**
 * The result of PATCH /channels/{id}.
 */
export type RESTPatchAPIChannelResult = APIChannel;

/**
 * The body of PATCH /channels/{id}.
 */
export interface RESTPatchAPIChannelBody {
  /**
   * The name of the channel.
   */
  name?: string;
}

/**
 * The result of DELETE /channels/{id}.
 */
export type RESTDeleteAPIChannelResult = APIOk;
