'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import en from '@/locales/en'
import hi from '@/locales/hi'
import gu from '@/locales/gu'

export type Language = 'en' | 'hi' | 'gu'

const dictionaries: Record<Language, any> = { en, hi, gu }

export const SUPPORTED_LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'gu', label: 'ગુ' },
]

const STORAGE_KEY = 'mirar_lang'

function resolve(dict: any, key: string): unknown {
  return key.split('.').reduce((acc: any, part) => (acc && typeof acc === 'object' ? acc[part] : undefined), dict)
}

type TranslateFn = (key: string, vars?: Record<string, string | number>) => string
type TranslateListFn = (key: string) => any[]

interface I18nContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslateFn
  tList: TranslateListFn
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && dictionaries[stored]) setLanguageState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  const t: TranslateFn = (key, vars) => {
    const raw = resolve(dictionaries[language], key) ?? resolve(dictionaries.en, key) ?? key
    let text = typeof raw === 'string' ? raw : key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(new RegExp(`{{${k}}}`, 'g'), String(v))
      }
    }
    return text
  }

  const tList: TranslateListFn = (key) => {
    const raw = resolve(dictionaries[language], key) ?? resolve(dictionaries.en, key)
    return Array.isArray(raw) ? raw : []
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, tList }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider')
  return ctx
}
