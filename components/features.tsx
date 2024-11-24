"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Brain } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Test Library",
    description: "Access thousands of practice tests across various subjects and difficulty levels.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Join study groups and discuss solutions with peers worldwide.",
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed performance analytics.",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI-powered recommendations for personalized study paths.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose ExamHub?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and features that make our platform the perfect choice for your academic success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}