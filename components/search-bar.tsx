"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export function SearchBar() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log({ searchQuery, institution });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="flex gap-4 p-4 bg-card rounded-lg shadow-sm">
        <Input
          type="text"
          placeholder={t('search.placeholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Select value={institution} onValueChange={setInstitution}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder={t('search.institution')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="university1">University 1</SelectItem>
            <SelectItem value="university2">University 2</SelectItem>
            <SelectItem value="university3">University 3</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          {t('search.button')}
        </Button>
      </div>
    </form>
  );
}