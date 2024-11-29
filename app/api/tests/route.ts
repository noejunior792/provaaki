import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json(); 

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: 'Payload is empty' }, { status: 400 });
    }

    const {
      title,
      description,
      subject,
      authorId,
      institutionId,
      courseId,
      disciplineId,
      class: testClass,
      periodType,
      periodNumber,
      year,
      imageUrls,
    } = body;

    if (
      !title ||
      !authorId ||
      !institutionId ||
      !courseId ||
      !disciplineId ||
      !testClass ||
      !periodType ||
      !periodNumber ||
      !year
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }


    const newTest = await prisma.test.create({
      data: {
        authorId,
        institutionId,
        courseId,
        disciplineId,
        class: testClass,
        periodType,
        periodNumber,
        year,
        imageUrl: imageUrls,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newTest, { status: 201 });
  } catch (error) {
    console.error('Error creating test:', error);
    return NextResponse.json({ error: 'An error occurred while creating the test' }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const tests = await prisma.test.findMany();
    return NextResponse.json(tests);
  } catch (error) {
    console.error('Error fetching tests:', error);
    return NextResponse.json({ error: 'An error occurred while fetching tests' }, { status: 500 });
  }
}
