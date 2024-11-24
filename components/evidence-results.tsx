"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Evidence {
  id: string;
  title: string;
  source: string;
  date: string;
  type: string;
  thumbnail: string;
}

const mockEvidence: Evidence[] = [
  {
    id: "1",
    title: "Calculus Final Exam 2023",
    source: "MIT University",
    date: "2023-12-15",
    type: "Exam",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400",
  },
  {
    id: "2",
    title: "Physics Midterm Test",
    source: "Stanford University",
    date: "2024-01-20",
    type: "Test",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=400",
  },
];

export function EvidenceResults() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="grid gap-4">
        {mockEvidence.map((evidence, index) => (
          <motion.div
            key={evidence.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-4">
              <div className="flex gap-4">
                <img
                  src={evidence.thumbnail}
                  alt={evidence.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-2">{evidence.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {evidence.source}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {evidence.date}
                      </p>
                      <Badge variant="secondary">{evidence.type}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}