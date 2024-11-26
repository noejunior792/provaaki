"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState, useCallback } from "react";
import { TestViewer } from "./test-viewer";

interface TestCardProps {
  title: string;
  institution: string;
  course: string;
  imageUrl: string;
  authorName: string;
  authorImage: string;
  createdAt: string;
}

export function TestCard({
  title,
  institution,
  course,
  imageUrl,
  authorName,
  authorImage,
  createdAt,
}: TestCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [imageUrl, title]);

  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <div
            className="relative cursor-pointer aspect-video"
            onClick={() => setIsViewerOpen(true)}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
              <Eye className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar>
                <AvatarImage src={authorImage} alt={authorName} />
                <AvatarFallback>{authorName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{authorName}</p>
                <p className="text-sm text-muted-foreground">{formattedDate}</p>
              </div>
            </div>

            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {institution} · {course}
            </p>

            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <TestViewer
        imageUrl={imageUrl}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
}