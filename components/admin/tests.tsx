"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { Search, Eye, Trash2 } from "lucide-react";

const tests = [
  {
    id: 1,
    title: "Calculus Final Exam",
    subject: "Mathematics",
    author: "Prof. Smith",
    status: "Published",
    date: "2024-03-15",
  },
  // Add more mock data as needed
];

export function AdminTests() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Input
            placeholder={t('admin.tests.search')}
            className="w-[300px]"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            {t('admin.tests.searchButton')}
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('admin.tests.columns.title')}</TableHead>
            <TableHead>{t('admin.tests.columns.subject')}</TableHead>
            <TableHead>{t('admin.tests.columns.author')}</TableHead>
            <TableHead>{t('admin.tests.columns.status')}</TableHead>
            <TableHead>{t('admin.tests.columns.date')}</TableHead>
            <TableHead>{t('admin.tests.columns.actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.id}>
              <TableCell>{test.title}</TableCell>
              <TableCell>{test.subject}</TableCell>
              <TableCell>{test.author}</TableCell>
              <TableCell>{test.status}</TableCell>
              <TableCell>{test.date}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}