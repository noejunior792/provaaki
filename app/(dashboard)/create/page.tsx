"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImagePlus, Upload } from "lucide-react";

export default function CreateTestPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Test</h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter test title" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide a description of the test"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Upload Test Images</Label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                />
                <Label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <ImagePlus className="h-12 w-12 text-muted-foreground mb-4" />
                  <span className="text-sm font-medium mb-1">
                    Drop your images here or click to upload
                  </span>
                  <span className="text-xs text-muted-foreground">
                    (Supports: JPG, PNG, PDF)
                  </span>
                </Label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Selected files:</p>
                  <ul className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <ImagePlus className="h-4 w-4" />
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Button className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Publish Test
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}