"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { AdminUsers } from "@/components/admin/users";
import { AdminTests } from "@/components/admin/tests";
import { AdminDashboard } from "@/components/admin/dashboard";

export default function AdminPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">{t('admin.title')}</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full">
          <TabsTrigger value="dashboard">{t('admin.tabs.dashboard')}</TabsTrigger>
          <TabsTrigger value="users">{t('admin.tabs.users')}</TabsTrigger>
          <TabsTrigger value="tests">{t('admin.tabs.tests')}</TabsTrigger>
        </TabsList>

        <Card className="mt-6">
          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>
          <TabsContent value="users">
            <AdminUsers />
          </TabsContent>
          <TabsContent value="tests">
            <AdminTests />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}