import type { APIChannel, APIMember, APIOk, ChannelType } from "../payloads";

// POST /channels/
export type RESTPostAPIChannelResult = APIChannel;

export interface RESTPostAPIChannelBody {
  name: string;
  type: ChannelType;
}

// GET /channels/{id}
export type RESTGetAPIChannelResult = APIChannel;

// GET /channels/{id}/members
export type RESTGetAPIChannelMembersResult = APIMember[];

// GET /channels/{id}/members/{memberId}
export type RESTGetAPIChannelMemberResult = APIMember;

// PUT /channels/{id}/members/@me
export type RESTPutAPIChannelJoinResult = APIMember;

// DELETE /channels/{id}/members/@me
export type RESTDeleteAPIChannelLeaveResult = APIOk;

// PATCH /channels/{id}
export type RESTPatchAPIChannelResult = APIChannel;

export interface RESTPatchAPIChannelBody {
  name?: string;
}

// DELETE /channels/{id}
export type RESTDeleteAPIChannelResult = APIOk;
