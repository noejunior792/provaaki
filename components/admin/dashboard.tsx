"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 400, tests: 240 },
  { name: "Feb", users: 300, tests: 139 },
  { name: "Mar", users: 200, tests: 980 },
  { name: "Apr", users: 278, tests: 390 },
  { name: "May", users: 189, tests: 480 },
];

export function AdminDashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">{t('admin.stats.totalUsers')}</h3>
          <p className="text-3xl font-bold">1,234</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">{t('admin.stats.totalTests')}</h3>
          <p className="text-3xl font-bold">5,678</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">{t('admin.stats.activeUsers')}</h3>
          <p className="text-3xl font-bold">789</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">{t('admin.charts.growth')}</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                name={t('admin.charts.users')}
              />
              <Line
                type="monotone"
                dataKey="tests"
                stroke="#82ca9d"
                name={t('admin.charts.tests')}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}