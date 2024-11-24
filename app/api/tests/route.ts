import { auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { Test } from "@/lib/models/test";

export async function GET() {
  try {
    const tests = await Test.find()
      .populate("author", "name image")
      .populate("institution", "name")
      .populate("course", "name")
      .populate("discipline", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json(tests);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tests" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const data = await req.json();
    const test = await Test.create({
      ...data,
      author: session.user.id,
    });

    return NextResponse.json(test, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create test" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const testId = searchParams.get("id");

    const test = await Test.findById(testId);
    if (!test) {
      return NextResponse.json(
        { error: "Test not found" },
        { status: 404 }
      );
    }

    // Check if the user is the author of the test
    if (test.author.toString() !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await test.deleteOne();
    return NextResponse.json({ message: "Test deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete test" },
      { status: 500 }
    );
  }
}