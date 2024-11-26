"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle } from "lucide-react";
import { CreateTestDialog } from "@/components/create-test-dialog";
import { TestCard } from "@/components/test-card";
import { SearchBar } from "@/components/search-bar";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [isCreateTestOpen, setIsCreateTestOpen] = useState(false);

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
        <TestCard
          title="Calculus Final"
          institution="MIT"
          course="Mathematics"
          imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
          authorName="Jane Smith"
          authorImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          createdAt={new Date().toISOString()}
        />
        <TestCard
          title="Physics Midterm"
          institution="Stanford"
          course="Physics"
          imageUrl="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa"
          authorName="John Doe"
          authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          createdAt={new Date().toISOString()}
        />
      </div>

      <CreateTestDialog 
        open={isCreateTestOpen} 
        onOpenChange={setIsCreateTestOpen}
      />
    </div>
  );
}