import type { APIUser } from "../../v1";

// https://docs.foxogram.su/get-user-by-id
export type RESTGetAPIUserResult = APIUser;

// https://docs.foxogram.su/get-yourself-user
export type RESTGetAPIUserYourselfResult = APIUser;

// https://docs.foxogram.su/edit-yourself-user
export type RESTPatchAPIUserYourselfResult = APIUser;

export interface RESTPatchAPIUserYourselfBody {
  avatar?: string;
  displayName?: string;
  email?: string;
  password?: string;
  username?: string;
}
