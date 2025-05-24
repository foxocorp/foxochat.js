import type { APIChannel, APIMember, APIOk, ChannelType } from '#/payloads'
import type { RESTAPIAttachmentUploadRequest, RESTAPIAttachmentUploadResponse } from './attachment'

/**
 * The result of POST /channels/.
 */
export type RESTPostAPIChannelResult = APIChannel

/**
 * The body of POST /channels/.
 */
export interface RESTPostAPIChannelBody {
  /**
   * The display name of the channel.
   */
  display_name: string

  /**
   * The name of the channel.
   */
  name: string

  /**
   * The type of the channel.
   */
  type: ChannelType
}

/**
 * The result of GET /channels/{name}.
 */
export type RESTGetAPIChannelResult = APIChannel

/**
 * The result of GET /channels/{name}/members.
 */
export type RESTGetAPIChannelMembersResult = APIMember[]

/**
 * The result of GET /channels/{name}/members/{memberId}.
 */
export type RESTGetAPIChannelMemberResult = APIMember

/**
 * The result of PUT /channels/{name}/members/@me.
 */
export type RESTPutAPIChannelJoinResult = APIMember

/**
 * The result of DELETE /channels/{name}/members/@me.
 */
export type RESTDeleteAPIChannelLeaveResult = APIOk

/**
 * The result of PATCH /channels/{name}.
 */
export type RESTPatchAPIChannelResult = APIChannel

/**
 * The body of PATCH /channels/{name}.
 */
export interface RESTPatchAPIChannelBody {
  /**
   * The name of the channel.
   */
  name?: string
}

/**
 * The result of DELETE /channels/{name}.
 */
export type RESTDeleteAPIChannelResult = APIOk

/**
 * The body of PUT /channels/{id}/icon.
 */
export type RESTPutAPIChannelIconBody = RESTAPIAttachmentUploadRequest

/**
 * The result of PUT /channels/{id}/icon.
 */
export type RESTPutAPIChannelIconResult = RESTAPIAttachmentUploadResponse
