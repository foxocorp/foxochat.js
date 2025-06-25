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
  CHANNEL_CREATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_CREATE']): void {
    throw new Error('Unimplemented')
  },
  CHANNEL_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_DELETE']): void {
    throw new Error('Unimplemented')
  },
  CHANNEL_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CHANNEL_UPDATE']): void {
    throw new Error('Unimplemented')
  },
  CONTACT_ADD(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CONTACT_ADD']): void {
    throw new Error('Unimplemented')
  },
  CONTACT_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['CONTACT_DELETE']): void {
    throw new Error('Unimplemented')
  },
  MEMBER_ADD(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_ADD']): void {
    throw new Error('Unimplemented')
  },
  MEMBER_REMOVE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_REMOVE']): void {
    throw new Error('Unimplemented')
  },
  MEMBER_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MEMBER_UPDATE']): void {
    throw new Error('Unimplemented')
  },
  MESSAGE_CREATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_CREATE']): void {
    throw new Error('Unimplemented')
  },
  MESSAGE_DELETE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_DELETE']): void {
    throw new Error('Unimplemented')
  },
  MESSAGE_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['MESSAGE_UPDATE']): void {
    throw new Error('Unimplemented')
  },
  TYPING_START(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['TYPING_START']): void {
    throw new Error('Unimplemented')
  },
  USER_STATUS_UPDATE(_client: Client, _data: GatewayClientboundDispatchPayloadsMap['USER_STATUS_UPDATE']): void {
    throw new Error('Unimplemented')
  },
  USER_UPDATE(client: Client, data: GatewayClientboundDispatchPayloadsMap['USER_UPDATE']): void {
    client.users.add(data.id, data)
  },
}
