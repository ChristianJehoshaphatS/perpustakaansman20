import { getCatalog } from "@/db/models/Catalog";

import { NextRequest, NextResponse } from "next/server";

type UserResponse<Type> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: Type;
};

// GET /api/users
export const GET = async (request: NextRequest) => {
  const catalog = await getCatalog(1, "", "", undefined, "", 20);
  return NextResponse.json(
    { statusCode: 200, message: "Succeed GET /api/catalog", data: catalog },
    { status: 200 }
  );
};

// POST /api/users
export const POST = async (request: NextRequest) => {
  const data = await request.formData();
  console.log(data);

  const query = {
    title: data.get("title") as string,
    author: data.get("author") as string,
    year: data.get("year") as string,
    publisher: data.get("publisher") as string,
    pageNumber: data.get("pageNumber") as string,
    pageSize: data.get("pageSize") as string,
  };
  console.log(query, "<<<<<<<<");

  const users = await getCatalog(
    +query.pageNumber,
    query.title,
    query.author,
    +query.year,
    query.publisher,
    +query.pageSize
  );
  return NextResponse.json(
    { statusCode: 200, message: "Succeed GET /api/catalog", data: users },
    { status: 200 }
  );
};
