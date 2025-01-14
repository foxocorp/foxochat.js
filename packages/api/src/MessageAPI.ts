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
import type { REST } from "@foxogram/rest";

/**
 * A wrapper for the Foxogram message API.
 */
export class MessageAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the messages in a channel.
   */
  public async list(
    channel_name: string,
    query: RESTGetAPIMessageListQuery = {},
  ) {
    return await this.rest.get<
      RESTGetAPIMessageListResult,
      RESTGetAPIMessageListQuery
    >(APIRoutes.messages(channel_name), {
      query,
    });
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channel_name: string, body: RESTPostAPIMessageBody) {
    return await this.rest.post<
      RESTPostAPIMessageBody,
      RESTPostAPIMessageResult
    >(APIRoutes.messages(channel_name), { body });
  }

  /**
   * Fetches a message.
   */
  public async get(channel_name: string, id: number) {
    return await this.rest.get<RESTGetAPIMessageResult>(
      APIRoutes.message(channel_name, id),
    );
  }

  /**
   * Edits a message.
   */
  public async edit(
    channel_name: string,
    id: number,
    body: RESTPatchAPIMessageBody,
  ) {
    return await this.rest.patch<
      RESTPatchAPIMessageBody,
      RESTPatchAPIMessageResult
    >(APIRoutes.message(channel_name, id), { body });
  }

  /**
   * Deletes a message.
   */
  public async delete(channel_name: string, id: number) {
    return await this.rest.delete<never, RESTDeleteAPIMessageResult>(
      APIRoutes.message(channel_name, id),
    );
  }
}
