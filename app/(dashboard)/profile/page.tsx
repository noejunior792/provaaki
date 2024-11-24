"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  MapPin,
  Link as LinkIcon,
  Mail,
  Trash2,
  Heart,
  BookOpen,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CreateTestDialog } from "@/components/create-test-dialog";
import { TestCard } from "@/components/test-card";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreateTestOpen, setIsCreateTestOpen] = useState(false);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    // Implement account deletion logic here
    setIsDeleting(false);
  };

  return (
    <div className="container py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-32 w-32">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{session?.user?.name}</h1>
              <p className="text-muted-foreground mb-4">{session?.user?.email}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  Location
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  Joined {new Date().toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  {session?.user?.email}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button onClick={() => setIsCreateTestOpen(true)}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Create Test
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove all your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteAccount}
                        disabled={isDeleting}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isDeleting ? "Deleting..." : "Delete Account"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Profile Content */}
      <Tabs defaultValue="published">
        <TabsList className="w-full">
          <TabsTrigger value="published" className="flex-1">
            Published Tests
          </TabsTrigger>
          <TabsTrigger value="liked" className="flex-1">
            Liked Tests
          </TabsTrigger>
        </TabsList>

        <TabsContent value="published">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Published Test */}
            <TestCard
              title="Calculus Final"
              institution="MIT"
              course="Mathematics"
              imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
              authorName={session?.user?.name || ""}
              authorImage={session?.user?.image || ""}
              createdAt={new Date().toISOString()}
            />
          </div>
        </TabsContent>

        <TabsContent value="liked">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Liked Test */}
            <TestCard
              title="Physics Midterm"
              institution="Stanford"
              course="Physics"
              imageUrl="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa"
              authorName="Jane Smith"
              authorImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              createdAt={new Date().toISOString()}
            />
          </div>
        </TabsContent>
      </Tabs>

      <CreateTestDialog
        open={isCreateTestOpen}
        onOpenChange={setIsCreateTestOpen}
      />
    </div>
  );
}