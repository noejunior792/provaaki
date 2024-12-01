import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const institution = await prisma.institution.create({
    data: {
      name: 'Example University',
      country: 'Angola',
      state: 'Luanda',
      city: 'Luanda',
    },
  });

  // Create courses
  const course = await prisma.course.create({
    data: {
      name: 'Computer Science',
      institutionId: institution.id,
    },
  });

  // Create disciplines
  const discipline = await prisma.discipline.create({
    data: {
      name: 'Introduction to Programming',
      courseId: course.id,
    },
  });

  // Create users
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      emailVerified: new Date(),
      image: 'https://example.com/avatar.png',
    },
  });

  // Create tests
  const test = await prisma.test.create({
    data: {
      authorId: user.id,
      institutionId: institution.id,
      courseId: course.id,
      disciplineId: discipline.id,
      class: 'CS101',
      periodType: 'SEMESTER',
      periodNumber: 'First',
      year: 2024,
      imageUrl: 'https://example.com/test-image.png',
    },
  });

  // Create comments
  await prisma.comment.create({
    data: {
      content: 'Great test!',
      authorId: user.id,
      testId: test.id,
    },
  });

  // Create likes
  await prisma.like.create({
    data: {
      authorId: user.id,
      testId: test.id,
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
