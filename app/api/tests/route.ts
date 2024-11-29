import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
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
      } = req.body;

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
        return res.status(400).json({ error: 'Missing required fields' });
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

      return res.status(201).json(newTest);
    } catch (error) {
      console.error('Error creating test:', error);
      return res.status(500).json({ error: 'An error occurred while creating the test' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
