import { getRecommended } from "@/db/models/Catalog";

import { NextRequest, NextResponse } from "next/server";

type UserResponse<Type> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: Type;
};

// GET /api/users
export const GET = async (request: NextRequest) => {
  const catalog = await getRecommended();
  return NextResponse.json(
    { statusCode: 200, message: "Succeed GET /api/catalog", data: catalog },
    { status: 200 }
  );
};
