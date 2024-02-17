import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type UserModel = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  role?: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "User";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

// Find All User
export const getUsers = async () => {
  const db = await getDB();
  const users = (await db
    .collection(COLLECTION_USER)
    .find()
    .project({ password: 0 })
    .toArray()) as UserModel[];
  return users;
};
