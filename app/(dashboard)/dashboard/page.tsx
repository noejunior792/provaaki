"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle } from "lucide-react";
import { CreateTestDialog } from "@/components/create-test-dialog";
import { TestCard } from "@/components/test-card";
import { SearchBar } from "@/components/search-bar";
import { useSession } from "next-auth/react";

export type Test = {
  id: string;
  title: string;
  institution?: string | null;
  course?: string | null;
  imageUrl?: string | null;
  authorName?: string | null;
  authorImage?: string | null;
  createdAt: string;
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [isCreateTestOpen, setIsCreateTestOpen] = useState(false);
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTests = useCallback(async () => {
    if (status === "loading") return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/tests/recent", {
        cache: "force-cache",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setTests(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching tests.");
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    fetchTests();
  }, [fetchTests]);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <SearchBar />
      </div>

      <Card className="p-4 mb-6">
        <div className="flex flex-col items-left gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <Button
            className="w-full max-w-md justify-left text-muted-foreground font-normal hover:text-foreground"
            variant="outline"
            onClick={() => setIsCreateTestOpen(true)}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Compartilhar uma prova...
          </Button>
        </div>
      </Card>

      {loading && (
        <div className="text-left">
          <p>Carregando provas...</p>
        </div>
      )}
      {error && (
        <div className="text-left">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {tests.map((test) => (
            <TestCard
              key={test.id}
              title={test.title}
              institution={test.institution || "Instituição Desconhecida"}
              course={test.course || "Curso Desconhecido"}
              imageUrl={test.imageUrl || "/placeholder.png"}
              authorName={test.authorName || "Autor Desconhecido"}
              authorImage={test.authorImage || "/placeholder-avatar.png"}
              createdAt={test.createdAt}
            />
          ))}
        </div>
      )}

      <CreateTestDialog
        open={isCreateTestOpen}
        onOpenChange={setIsCreateTestOpen}
      />
    </div>
  );
}
