import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type DriveFileModel = {
  _id: ObjectId;
  url: string;
  title: string;
  type: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "Karya";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

export const getKaryaGuru = async () => {
  const db = await getDB();

  const documents = await db
    .collection(COLLECTION_USER)
    .find({ type: "guru" })

    .toArray();

  //   console.log(documents);

  return documents;
};

export const getKaryaSiswa = async () => {
  const db = await getDB();

  const documents = await db
    .collection(COLLECTION_USER)
    .find({ type: "siswa" })

    .toArray();

  //   console.log(documents);

  return documents;
};
