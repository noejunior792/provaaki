import { auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { Test } from "@/lib/models/test";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const test = await Test.findById(params.id)
      .populate("author", "name image")
      .populate("institution", "name")
      .populate("course", "name")
      .populate("discipline", "name");

    if (!test) {
      return NextResponse.json(
        { error: "Test not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(test);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch test" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const test = await Test.findById(params.id);
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

    const data = await req.json();
    const updatedTest = await Test.findByIdAndUpdate(
      params.id,
      { $set: data },
      { new: true }
    );

    return NextResponse.json(updatedTest);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update test" },
      { status: 500 }
    );
  }
}