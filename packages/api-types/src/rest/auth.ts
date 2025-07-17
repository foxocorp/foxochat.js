import type { APIOk, APIToken } from '@/payloads'

/**
 * The result of POST /auth/register.
 */
export type RESTPostAPIAuthRegisterResult = APIToken

/**
 * The body of POST /auth/register.
 */
export interface RESTPostAPIAuthRegisterBody {
  /**
   * The user's username.
   */
  username: string

  /**
   * The user's email.
   */
  email: string

  /**
   * The user's password.
   */
  password: string
}

/**
 * The result of POST /auth/login.
 */
export type RESTPostAPIAuthLoginResult = APIToken

/**
 * The body of POST /auth/login.
 */
export interface RESTPostAPIAuthLoginBody {
  /**
   * The user's identity.
   */
  identity: string

  /**
   * The user's password.
   */
  password: string
}

/**
 * The result of POST /auth/email/verify.
 */
export type RESTPostAPIAuthVerifyEmailResult = APIOk

/**
 * The body of POST /auth/email/verify.
 */
export interface RESTPostAPIAuthVerifyEmailBody {
  /**
   * The email verification code.
   */
  otp: string
}

/**
 * The result of POST /auth/email/resend.
 */
export type RESTPostAPIAuthResendEmailResult = APIOk

/**
 * The result of POST /auth/reset-password.
 */
export type RESTPostAPIAuthResetPasswordResult = APIOk

/**
 * The body of POST /auth/reset-password.
 */
export interface RESTPostAPIAuthResetPasswordBody {
  /**
   * The user's email.
   */
  email: string
}

/**
 * The result of POST /auth/reset-password.
 */
export type RESTPostAPIAuthResetPasswordConfirmResult = APIOk

/**
 * The body of POST /auth/reset-password.
 */
export interface RESTPostAPIAuthResetPasswordConfirmBody {
  /**
   * The user's email.
   */
  email: string

  /**
   * The password reset confirmation code.
   */
  code: string

  /**
   * The new user's password.
   */
  new_password: string
}