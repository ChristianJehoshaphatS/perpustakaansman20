import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type BookModel = {
  _id: ObjectId;
  catalog_id: number;
  title: string;
  author: string;
  city: string;
  publisher: string;
  year: number;
  fisik: string;
  no_panggil: string;
  eksemplar: number;
  image: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "Catalog";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

// Find Users with Search, Filter, and Pagination
export const getCatalog = async (
  pageNumber: number,
  title?: unknown,
  author?: unknown,
  year?: number,
  publisher?: unknown,
  pageSize: number = 20
) => {
  console.log(
    "masuk",
    title,
    "title",
    author,
    "author",
    year,
    "year",
    publisher,
    "publisher",
    pageNumber,
    "pagenum",
    pageSize,
    "pagesize"
  );
  const db = await getDB();

  // Constructing the query object based on user input
  let query = {} as any;
  if (title) query.title = { $regex: title, $options: "i" }; // Similar title with wildcard on both ends
  if (author) query.author = { $regex: author, $options: "i" }; // Similar author with wildcard on both ends
  if (publisher) query.publisher = { $regex: publisher, $options: "i" }; // Similar publisher with wildcard on both ends
  if (year) query.year = year;
  //   console.log(query);

  // Count total documents matching the query for pagination
  const totalDocs = await db.collection(COLLECTION_USER).countDocuments(query);

  // Perform pagination
  const totalPages = Math.ceil(totalDocs / pageSize);
  const skip = pageNumber > 1 ? (pageNumber - 1) * pageSize : 0;

  // Fetch documents based on query and pagination
  const documents = await db
    .collection(COLLECTION_USER)
    .find(query)
    .skip(skip)
    .limit(pageSize)
    .toArray();

  //   console.log(documents);

  return {
    totalPages: totalPages,
    currentPage: pageNumber,
    pageSize: pageSize,
    totalDocuments: totalDocs,
    data: documents,
  };
};

// export const getUsers = async () => {
//   const db = await getDB();
//   const users = (await db
//     .collection(COLLECTION_USER)
//     .find()
//     .toArray()) as UserModel[];
//   return users;
// };

export const getDetail = async (catalog_id: string) => {
  const db = await getDB();
  const singleBook = await db
    .collection(COLLECTION_USER)
    .findOne({ catalog_id: +catalog_id });
  console.log(singleBook);

  return singleBook;
};
