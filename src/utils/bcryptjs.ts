import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export const hashPassword = (password: string) => {
  let salt = genSaltSync(10);
  let hashedPassword = hashSync(password, salt);
  return hashedPassword;
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return compareSync(password, hashedPassword);
};