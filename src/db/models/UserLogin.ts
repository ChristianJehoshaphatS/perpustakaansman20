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

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//Login Model Id
export const getUserById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ _id: objectId }, { projection: { password: 0 } })) as UserModel;

  return user;
};

//Login Model Email //!
export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;
  console.log(user);

  return user;
};

//Find User
export const getFilteredUser = async (filterQuery = {}) => {
  const db = await getDb();

  const user = await db.collection(COLLECTION_USER).findOne(filterQuery);

  return user;
};