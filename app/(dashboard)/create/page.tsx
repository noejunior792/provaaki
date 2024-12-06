"use client"

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
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    institutionId: "",
    courseId: "",
    disciplineId: "",
    periodType: "SEMESTER",
    periodNumber: 1,
    year: new Date().getFullYear(),
  });
  const [isLoading, setIsLoading] = useState(false); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      files: selectedFiles,
    };

    try {
      setIsLoading(true); 
      console.log("Enviando dados:", payload); 
      const response = await fetch("/api/tests", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create test");
      }

      console.log("Teste criado com sucesso");
      alert("Test created successfully!");
    } catch (error) {
      console.error("Erro ao criar o teste:", error);
      alert("An error occurred while creating the test.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-5xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Test</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coluna da Esquerda */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter test title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("subject", value)}
                >
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
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Coluna da Direita */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Upload Test Images</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center h-[300px] flex flex-col items-center justify-center">
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
              </div>

              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <Label>Selected Files</Label>
                  <div className="bg-muted p-4 rounded-lg">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="text-sm">
                        {file.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={handleSubmit} className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Publish Test
                </>
              )}
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
