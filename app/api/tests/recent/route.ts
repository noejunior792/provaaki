import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tests = await prisma.test.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    console.log("Fetched tests:", tests);

    if (!tests) {
      return res.status(404).json({ error: "No tests found" });
    }

    res.status(200).json(tests);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Failed to fetch tests" });
  }
}

export function OPTIONS(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Allow", ["GET"]);
  res.status(200).end();
}
