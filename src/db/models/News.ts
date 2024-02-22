import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type NewsModel = {
  _id: ObjectId;
  thumbnailUrl: string;
  pdfUrl: string;
  title: string;
  news_id: number;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "News";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

export const getNewsEvents = async () => {
  const db = await getDB();

  const documents = await db
    .collection(COLLECTION_USER)
    .find()

    .toArray();

  // console.log(documents);

  return documents;
};
