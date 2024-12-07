import type { APIOk, APIToken } from "../payloads";

/**
 * The result of POST /auth/register.
 */
export type RESTPostAPIAuthRegisterResult = APIToken;

/**
 * The body of POST /auth/register.
 */
export interface RESTPostAPIAuthRegisterBody {
  /**
   * The user's username.
   */
  username: string;

  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's password.
   */
  password: string;
}

/**
 * The result of POST /auth/login.
 */
export type RESTPostAPIAuthLoginResult = APIToken;

/**
 * The body of POST /auth/login.
 */
export interface RESTPostAPIAuthLoginBody {
  /**
   * The user's email.
   */
  email: string;

  /**
   * The user's password.
   */
  password: string;
}

/**
 * The result of POST /auth/email/verify/{code}.
 */
export type RESTPostAPIAuthVerifyEmailResult = APIOk;

/**
 * The result of POST /auth/email/resend.
 */
export type RESTPostAPIAuthResendEmailResult = APIOk;
