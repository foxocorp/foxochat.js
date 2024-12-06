import type { APIChannel, APIMember, APIOk, ChannelType } from "../payloads";

// https://docs.foxogram.su/create-channel
export type RESTPostAPIChannelResult = APIChannel;

export interface RESTPostAPIChannelBody {
  name: string;
  type: ChannelType;
}

// https://docs.foxogram.su/get-channel-by-id
export type RESTGetAPIChannelResult = APIChannel;

// https://docs.foxogram.su/get-channel-memebers
export type RESTGetAPIChannelMembersResult = APIMember[];

// https://docs.foxogram.su/get-member-by-id
export type RESTGetAPIChannelMemberResult = APIMember;

// https://docs.foxogram.su/join-channel
export type RESTPutAPIChannelJoinResult = APIMember;

// https://docs.foxogram.su/leave-channel
export type RESTDeleteAPIChannelLeaveResult = APIOk;

// https://docs.foxogram.su/edit-channel
export type RESTPatchAPIChannelResult = APIChannel;

export interface RESTPatchAPIChannelBody {
  name?: string;
}

// https://docs.foxogram.su/delete-channel
export type RESTDeleteAPIChannelResult = APIOk;
