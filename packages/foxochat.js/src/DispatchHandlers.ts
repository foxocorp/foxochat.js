import { GatewayClientboundDispatchPayloadsMap } from '@foxochat/gateway-types'
import Client from '@/Client'

/**
 * A map of gateway dispatch event handlers.
 */
export const DispatchHandlers: {
  [K in keyof GatewayClientboundDispatchPayloadsMap]: (
    client: Client,
    data: GatewayClientboundDispatchPayloadsMap[K],
  ) => void
} = {
  CHANNEL_CREATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_CREATE']): void {},
  CHANNEL_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_DELETE']): void {},
  CHANNEL_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_UPDATE']): void {},
  CONTACT_ADD(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CONTACT_ADD']): void {},
  CONTACT_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CONTACT_DELETE']): void {},
  MEMBER_ADD(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_ADD']): void {},
  MEMBER_REMOVE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_REMOVE']): void {},
  MEMBER_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_UPDATE']): void {},
  MESSAGE_CREATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_CREATE']): void {},
  MESSAGE_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_DELETE']): void {},
  MESSAGE_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_UPDATE']): void {},
  TYPING_START(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['TYPING_START']): void {},
  USER_STATUS_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['USER_STATUS_UPDATE']): void {},
  USER_UPDATE(client: Client, data: GatewayClientboundDispatchPayloadsMap['USER_UPDATE']): void {
    client.users.add(data.id, data)
  },
}
