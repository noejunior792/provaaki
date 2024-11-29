import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Definindo a função GET para buscar os testes
export async function GET(req: NextRequest) {
  try {
    // Buscando os 10 testes mais recentes, ordenados pela data de criação
    const tests = await prisma.test.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    console.log("Fetched tests:", tests);

    if (!tests || tests.length === 0) {
      return NextResponse.json({ error: "No tests found" }, { status: 404 });
    }

    return NextResponse.json(tests, { status: 200 });
  } catch (error) {
    console.error("Error fetching tests:", error);
    return NextResponse.json({ error: "Failed to fetch tests" }, { status: 500 });
  }
}

// Definindo a função OPTIONS para definir os métodos permitidos na rota
export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200, headers: { Allow: "GET" } });
}
