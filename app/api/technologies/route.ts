import { NextResponse } from "next/server";
import {
  Prisma,
  PrismaClient,
  Projects,
  ProjectTypes,
  Technology,
} from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request: Request) {
  try {
    const body: Prisma.TechnologyCreateInput = await request.json();
    if (!body.name || !body.imageUrl) {
      return NextResponse.json(
        { error: "Technology name and image is required" },
        { status: 400 }
      );
    }
    const newTechnology: Technology = await prisma.technology.create({
      data: body,
    });
    return NextResponse.json(newTechnology, { status: 201 });
  } catch (error) {
    console.error("Error creating technology:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the technology." },
      { status: 500 }
    );
  }
}
