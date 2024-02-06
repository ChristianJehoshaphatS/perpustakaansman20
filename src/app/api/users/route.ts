import { getUsers } from "@/db/models/UserFindAll";
import { createUser } from "@/db/models/UserRegister";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type UserResponse<Type> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: Type;
};

const userInputRegister = z.object({
  name: z.string(), //.optional()
  username: z.string(), //.min()
  email: z.string().email(),
  password: z.string(), //.min(5)
});

// GET /api/users
export const GET = async () => {
  const users = await getUsers();
  return NextResponse.json(
    { statusCode: 200, message: "Succeed GET /api/users", data: users },
    { status: 200 }
  );
};

// POST /api/users
export const POST = async (request: Request) => {
  try {
    
    const data = await request.formData();
    const insertData = {
        name: data.get("name"),
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password")
    }
    // console.log(insertData);
    
    const parsedData = userInputRegister.safeParse(insertData);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    console.log(parsedData);
    
    const newUser = await createUser(parsedData.data);
    return NextResponse.json<UserResponse<unknown>>(
      {
        statusCode: 201,
        message: "Succeed POST /api/users",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    // console.log(error);
    
    if (error instanceof z.ZodError) {
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;
      return NextResponse.json<UserResponse<never>>(
        { statusCode: 400, error: `${errorPath} - ${errorMessage}` },
        { status: 400 }
      );
    }
    return NextResponse.json<UserResponse<never>>(
      { statusCode: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};