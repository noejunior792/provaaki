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
import { Search, Edit, Trash2 } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    status: "Active",
  },
  // Add more mock data as needed
];

export function AdminUsers() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Input
            placeholder={t('admin.users.search')}
            className="w-[300px]"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            {t('admin.users.searchButton')}
          </Button>
        </div>
        <Button variant="default">
          {t('admin.users.addNew')}
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('admin.users.columns.name')}</TableHead>
            <TableHead>{t('admin.users.columns.email')}</TableHead>
            <TableHead>{t('admin.users.columns.role')}</TableHead>
            <TableHead>{t('admin.users.columns.status')}</TableHead>
            <TableHead>{t('admin.users.columns.actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
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