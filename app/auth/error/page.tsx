"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, LogIn } from "lucide-react";
import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
        <p className="text-xl text-muted-foreground mb-8">
          There was a problem with your authentication. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Try Again
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}