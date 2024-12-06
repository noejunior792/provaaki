"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6">
            Learn Together,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Grow Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of students and educators sharing knowledge through
            practice tests and exam solutions.
          </p>
          <div className="flex justify-left gap-4">
            <Button asChild size="lg">
              <Link href="/register">Começe agora</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div className="p-6 rounded-lg bg-card">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-muted-foreground">
              Join thousands of students helping each other succeed
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
            <p className="text-muted-foreground">
              Access a vast library of practice materials
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Expert Solutions</h3>
            <p className="text-muted-foreground">
              Learn from detailed explanations and solutions
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}