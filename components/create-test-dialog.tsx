"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImagePlus, Upload } from "lucide-react";

interface CreateTestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateTestDialog({ open, onOpenChange }: CreateTestDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    institution: "",
    course: "",
    discipline: "",
    class: "",
    periodType: "SEMESTER",
    periodNumber: 1,
    year: new Date().getFullYear(),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData,
      file: selectedFile,
    };

    console.log("Form submission data:", payload);

    try {

      const response = await fetch("http://localhost:3000/api/tests", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create test");
      }

      alert("Test created successfully!");
    } catch (error) {
      console.error("Error creating test:", error);
      alert("An error occurred while creating the test.");
    } finally {
      setIsLoading(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Test</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Select
              onValueChange={(value) => handleSelectChange("institution", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select institution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">MIT</SelectItem>
                <SelectItem value="2">Stanford</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select
              onValueChange={(value) => handleSelectChange("course", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Computer Science</SelectItem>
                <SelectItem value="2">Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="discipline">Discipline</Label>
            <Select
              onValueChange={(value) => handleSelectChange("discipline", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select discipline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Calculus</SelectItem>
                <SelectItem value="2">Linear Algebra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="class">Class</Label>
            <Input
              id="class"
              placeholder="e.g., A, B, C"
              value={formData.class}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="periodType">Period Type</Label>
              <Select
                onValueChange={(value) => handleSelectChange("periodType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SEMESTER">Semester</SelectItem>
                  <SelectItem value="YEAR">Year</SelectItem>
                  <SelectItem value="QUARTER">Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="periodNumber">Period Number</Label>
              <Input
                id="periodNumber"
                type="number"
                min="1"
                value={formData.periodNumber}
                onChange={handleInputChange}
                placeholder="e.g., 1, 2, 3"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={formData.year}
              onChange={handleInputChange}
              placeholder={new Date().getFullYear().toString()}
            />
          </div>

          <div className="space-y-2">
            <Label>Test Image</Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <Label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-sm font-medium">
                  {selectedFile ? selectedFile.name : "Drop your image here or click to upload"}
                </span>
              </Label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || !selectedFile}>
              {isLoading ? (
                "Creating..."
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Create Test
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
