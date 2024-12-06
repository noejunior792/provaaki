"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
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

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `${title.replace(/\s+/g, "_")}.jpg`; // Nome do arquivo formatado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden shadow-md">
        <div
          className="relative cursor-pointer aspect-video"
          onClick={() => setIsViewerOpen(true)}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-left justify-left">
            <Eye className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-left gap-3 mb-3">
            <Avatar>
              <AvatarImage src={authorImage} />
              <AvatarFallback>
                {authorName ? authorName.charAt(0).toUpperCase() : "?"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{authorName || "Unknown Author"}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {institution} · {course}
          </p>

          <div className="flex flex-wrap gap-2">
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


      {isViewerOpen && (
        <TestViewer
          imageUrl={imageUrl}
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
}
