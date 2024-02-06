import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const secret = process.env.JWT_SECRET || "secret";

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};
export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};

export const verifyTokenJose = async <Type>(token: string) => {
  const secretJose = new TextEncoder().encode(secret);
  const payloadJose = await jose.jwtVerify<Type>(token, secretJose);
  return payloadJose.payload;
};