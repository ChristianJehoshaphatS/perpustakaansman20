import { getNewsEvents } from "@/db/models/News";

import { NextRequest, NextResponse } from "next/server";

type UserResponse<Type> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: Type;
};

// GET /api/users
export const GET = async (request: NextRequest) => {
  const newsEvents = await getNewsEvents();
  // console.log("masuk", newsEvents);
  return NextResponse.json(
    {
      statusCode: 200,
      message: "Succeed GET /api/newsEvents",
      data: newsEvents,
    },
    { status: 200 }
  );
};
