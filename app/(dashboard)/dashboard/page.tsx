"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  createdAt: string ;
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const [isCreateTestOpen, setIsCreateTestOpen] = useState(false);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    async function fetchTests() {
      const response = await fetch("/api/tests/recent");
      const data = await response.json();
      setTests(data);
    }

    fetchTests();
  }, []);

  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8">
        <SearchBar />
      </div>

      <Card className="p-4 mb-6">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <Button
            className="flex-1 justify-start text-muted-foreground font-normal hover:text-foreground"
            variant="outline"
            onClick={() => setIsCreateTestOpen(true)}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Share a test...
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            title={test.title}
            institution={test.institution || "Unknown Institution"}
            course={test.course || "Unknown Course"}
            imageUrl={test.imageUrl || "/placeholder.png"}
            authorName={test.authorName || "Unknown Author"}
            authorImage={test.authorImage || "/placeholder-avatar.png"}
            createdAt={test.createdAt}
          />
        ))}
      </div>

      <CreateTestDialog
        open={isCreateTestOpen}
        onOpenChange={setIsCreateTestOpen}
      />
    </div>
  );
}