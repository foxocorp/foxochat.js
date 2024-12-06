import type { APIMFAKey, APIOk, APIUser } from "../payloads";

// GET /users/{userKey}
export type RESTGetAPIUserResult = APIUser;

export type RESTPatchAPIUserResult = APIUser;

// PATCH /users/@me
export interface RESTPatchAPIUserBody {
  avatar?: string;
  displayName?: string;
  email?: string;
  password?: string;
  username?: string;
}

// DELETE /users/@me
export type RESTDeleteAPIUserResult = APIOk;

export interface RESTDeleteAPIUserBody {
  password: string;
}

// POST /users/@me/delete/confirm
export type RESTPostAPIUserDeleteConfirmResult = APIOk;

// POST /users/@me/mfa
export type RESTPostAPIUserSetupMFAResult = APIMFAKey

// DELETE /users/@me/mfa
export type RESTDeleteAPIUserDeleteMFAResult = APIOk

// POST /users/@me/mfa/setup/validate
export type RESTPostAPIUserValidateMFAResult = APIOk
