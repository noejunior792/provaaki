"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export function Hero() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.description'),
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: t('features.practice.title'),
      description: t('features.practice.description'),
      color: 'text-purple-600'
    },
    {
      icon: GraduationCap,
      title: t('features.solutions.title'),
      description: t('features.solutions.description'),
      color: 'text-green-600'
    }
  ];

  const renderFeature = useCallback(({ icon: Icon, title, description, color }) => (
    <div className="p-6 rounded-lg bg-card" key={title}>
      <Icon className={`w-12 h-12 mx-auto mb-4 ${color}`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  ), []);

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/register">{t('hero.getStarted')}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">{t('hero.learnMore')}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {features.map(renderFeature)}
        </motion.div>
      </div>
    </div>
  );
}