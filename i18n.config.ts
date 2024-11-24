import type { InitOptions } from 'i18next';

export const defaultNS = 'common';
export const fallbackLng = 'en';

export const i18nConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  ns: ['common'],
  supportedLngs: ['en', 'pt'],
  interpolation: {
    escapeValue: false,
  },
};