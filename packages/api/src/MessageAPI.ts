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
} from "@foxogram/api-types";
import {
  buildURLSearchParams,
  RequestBodyType,
  type REST,
} from "@foxogram/rest";

/**
 * A wrapper for the Foxogram message API.
 */
export class MessageAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the messages in a channel.
   */
  public async list(channelId: number, query: RESTGetAPIMessageListQuery = {}) {
    const params = buildURLSearchParams<RESTGetAPIMessageListQuery>(query);

    return await this.rest.get<RESTGetAPIMessageListResult>(
      APIRoutes.messages(channelId),
      { params },
    );
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channelId: number, body: RESTPostAPIMessageBody) {
    const form = new FormData();

    if (body.content) form.append("content", body.content);
    body.attachments?.forEach((attachment) =>
      form.append("attachments", attachment),
    );

    return await this.rest.post<FormData, RESTPostAPIMessageResult>(
      APIRoutes.messages(channelId),
      {
        body: form,
        bodyType: RequestBodyType.init,
      },
    );
  }

  /**
   * Fetches a message.
   */
  public async get(channelId: number, messageId: number) {
    return await this.rest.get<RESTGetAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }

  /**
   * Edits a message.
   */
  public async edit(
    channelId: number,
    messageId: number,
    body: RESTPatchAPIMessageBody,
  ) {
    const form = new FormData();

    if (body.content) form.append("content", body.content);
    body.attachments?.forEach((attachment) =>
      form.append("attachments", attachment),
    );

    return await this.rest.patch<FormData, RESTPatchAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
      {
        body: form,
        bodyType: RequestBodyType.init,
      },
    );
  }

  /**
   * Deletes a message.
   */
  public async delete(channelId: number, messageId: number) {
    return await this.rest.delete<never, RESTDeleteAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }
}
