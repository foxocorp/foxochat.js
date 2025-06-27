import {
  APIRoutes,
  type RESTDeleteAPIMessageResult,
  type RESTGetAPIMessageListQuery,
  type RESTGetAPIMessageListResult,
  type RESTGetAPIMessageResult,
  type RESTPatchAPIMessageBody,
  type RESTPatchAPIMessageResult,
  type RESTPostAPIMessageBody,
  type RESTPostAPIMessageResult,
  type RESTPutAPIMessageAttachmentsBody,
  type RESTPutAPIMessageAttachmentsResult,
} from '@foxochat/api-types'
import type REST from '@foxochat/rest'
import { buildURLSearchParams } from '@foxochat/rest'

/**
 * A wrapper for the FoxoChat message API.
 */
export default class MessageAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the messages in a channel.
   */
  public async list(channelId: number, query: RESTGetAPIMessageListQuery = {}) {
    const params = buildURLSearchParams<RESTGetAPIMessageListQuery>(query)

    return await this.rest.get<RESTGetAPIMessageListResult>(APIRoutes.messages(channelId), { params })
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channelId: number, body: RESTPostAPIMessageBody) {
    return await this.rest.post<RESTPostAPIMessageResult>(APIRoutes.messages(channelId), {
      body,
    })
  }

  /**
   * Fetches a message.
   */
  public async get(channelId: number, messageId: number) {
    return await this.rest.get<RESTGetAPIMessageResult>(APIRoutes.message(channelId, messageId))
  }

  /**
   * Edits a message.
   */
  public async edit(channelId: number, messageId: number, body: RESTPatchAPIMessageBody) {
    return await this.rest.patch<RESTPatchAPIMessageResult>(APIRoutes.message(channelId, messageId), { body })
  }

  /**
   * Deletes a message.
   */
  public async delete(channelId: number, messageId: number) {
    return await this.rest.delete<RESTDeleteAPIMessageResult>(APIRoutes.message(channelId, messageId))
  }

  /**
   * Creates a message attachments.
   */
  public async createAttachments(channelId: number, body: RESTPutAPIMessageAttachmentsBody) {
    return await this.rest.put<RESTPutAPIMessageAttachmentsResult>(APIRoutes.messageAttachments(channelId), { body })
  }
}
