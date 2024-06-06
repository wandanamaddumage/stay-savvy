import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST() {
  let name = "Wandana MM";
  let email = "hi@gmail.com";
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json(newUser);
}
