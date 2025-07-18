import {
  APIRoutes,
  type Id,
  type RESTDeleteAPIMessageResult,
  type RESTGetAPIMessageListQuery,
  type RESTGetAPIMessageListResult,
  type RESTGetAPIMessageQuery,
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
  public async list(channelId: Id, query: RESTGetAPIMessageListQuery = {}) {
    const params = buildURLSearchParams(query)

    return await this.rest.get<RESTGetAPIMessageListResult>(APIRoutes.messages(channelId), { params })
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channelId: Id, body: RESTPostAPIMessageBody) {
    return await this.rest.post<RESTPostAPIMessageResult>(APIRoutes.messages(channelId), {
      body,
    })
  }

  /**
   * Fetches a message.
   */
  public async get(channelId: Id, messageId: Id, query: RESTGetAPIMessageQuery = {}) {
    const params = buildURLSearchParams(query)

    return await this.rest.get<RESTGetAPIMessageResult>(APIRoutes.message(channelId, messageId), { params })
  }

  /**
   * Edits a message.
   */
  public async edit(channelId: Id, messageId: Id, body: RESTPatchAPIMessageBody) {
    return await this.rest.patch<RESTPatchAPIMessageResult>(APIRoutes.message(channelId, messageId), { body })
  }

  /**
   * Deletes a message.
   */
  public async delete(channelId: Id, messageId: Id) {
    return await this.rest.delete<RESTDeleteAPIMessageResult>(APIRoutes.message(channelId, messageId))
  }

  /**
   * Creates a message attachments.
   */
  public async createAttachments(channelId: Id, body: RESTPutAPIMessageAttachmentsBody) {
    return await this.rest.put<RESTPutAPIMessageAttachmentsResult>(APIRoutes.messageAttachments(channelId), { body })
  }
}
