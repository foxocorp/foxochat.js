import type { APIOk, APIToken } from "../payloads";

// https://docs.foxogram.su/sign-up
export type RESTPostAPIAuthSignUpResult = APIToken;

export interface RESTPostAPIAuthSignUpBody {
  username: string;
  email: string;
  password: string;
}

// https://docs.foxogram.su/login
export type RESTPostAPIAuthLoginResult = APIToken;

export interface RESTPostAPIAuthLoginBody {
  email: string;
  password: string;
}

// https://docs.foxogram.su/verify-email
export type RESTPostAPIAuthVerifyEmailResult = APIOk;

// https://docs.foxogram.su/resend-email
export type RESTPostAPIAuthResendEmailResult = APIOk;
