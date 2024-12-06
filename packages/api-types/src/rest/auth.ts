import type { APIOk, APIToken } from "../payloads";

// POST /auth/register
export type RESTPostAPIAuthRegisterResult = APIToken;

export interface RESTPostAPIAuthRegisterBody {
  username: string;
  email: string;
  password: string;
}

// POST /auth/login
export type RESTPostAPIAuthLoginResult = APIToken;

export interface RESTPostAPIAuthLoginBody {
  email: string;
  password: string;
}

// POST /auth/email/verify/{code}
export type RESTPostAPIAuthVerifyEmailResult = APIOk;

// POST /auth/email/resend
export type RESTPostAPIAuthResendEmailResult = APIOk;
