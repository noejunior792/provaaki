import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const tests = await prisma.test.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    console.log("Fetched tests:", tests);

    if (!Array.isArray(tests) || tests.length === 0) {
      return NextResponse.json(
        { error: "No tests found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tests, { status: 200 });
  } catch {
    console.log("Error fetching tests:");
    return NextResponse.json(
      { error: "Failed to fetch tests" },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json(
    {},
    { status: 200, headers: { Allow: "GET, OPTIONS" } }
  );
}
