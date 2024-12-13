import {
  APIRoutes,
  type RESTDeleteAPIMessageResult,
  type RESTGetAPIMessageListResult,
  type RESTGetAPIMessageResult,
  type RESTPatchAPIMessageBody,
  type RESTPatchAPIMessageResult,
  type RESTPostAPIMessageBody,
  type Snowflake,
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
  public async list(channelId: Snowflake) {
    return await this.rest.get<RESTGetAPIMessageListResult>(
      APIRoutes.messages(channelId),
    );
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channelId: Snowflake, body: RESTPostAPIMessageBody) {
    return await this.rest.post<
      RESTPostAPIMessageBody,
      RESTGetAPIMessageListResult
    >(APIRoutes.messages(channelId), { body });
  }

  /**
   * Fetches a message.
   */
  public async get(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.get<RESTGetAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }

  /**
   * Edits a message.
   */
  public async edit(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.patch<
      RESTPatchAPIMessageBody,
      RESTPatchAPIMessageResult
    >(APIRoutes.message(channelId, messageId));
  }

  /**
   * Deletes a message.
   */
  public async delete(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.delete<never, RESTDeleteAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }
}
