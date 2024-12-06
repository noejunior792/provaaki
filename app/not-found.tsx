"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-left justify-left p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left"
      >
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          There are no tests here, you can return to the right route
        </p>
        <Button asChild>
          <Link href="/" className="flex items-left gap-2">
            <Home className="h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}