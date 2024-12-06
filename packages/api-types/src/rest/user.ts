import type { APIOk, APIUser } from "../payloads";

// https://docs.foxogram.su/get-user-by-id
export type RESTGetAPIUserResult = APIUser;

// https://docs.foxogram.su/edit-yourself-user
export type RESTPatchAPIUserYourselfResult = APIUser;

export interface RESTPatchAPIUserYourselfBody {
  avatar?: string;
  displayName?: string;
  email?: string;
  password?: string;
  username?: string;
}

// https://docs.foxogram.su/delete
export type RESTDeleteAPIUserResult = APIOk;

export interface RESTDeleteAPIUserBody {
  password: string;
}

// https://docs.foxogram.su/confirm-delete
export type RESTPostAPIUserDeleteConfirmResult = APIOk;
