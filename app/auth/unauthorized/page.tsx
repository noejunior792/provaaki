"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Please log in to access this page
        </p>
        <Button asChild>
          <Link href="/login" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Log In
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}