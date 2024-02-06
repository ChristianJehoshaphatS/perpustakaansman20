import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "@/utils/bcryptjs";
// import { addProfile } from "./profiles";

export type UserModel = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  role?: string;
};
export type UserModelCreateInput = Omit<UserModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "User";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

// Register User
export const createUser = async (user: UserModelCreateInput) => {
    
  const newUser: UserModelCreateInput = {
    ...user,
    role: "user",
    password: hashPassword(user.password),
  };
  const db = await getDB();
  const result = await db.collection(COLLECTION_USER).insertOne(newUser);
//   const inputAddprofile = {
//     email: user.email,
//     fullName: user.name,
//     address: "",
//     phone: "",
//     // activities: string[];
//     favorites: [""],
//     interests: "",
//     // reminder: string;
//     userId: result.insertedId,
//   };

//   await addProfile(inputAddprofile);

  return result;
};