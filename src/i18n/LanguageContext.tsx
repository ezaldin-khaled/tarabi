import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Locale, type Translation } from './translations'

const STORAGE_KEY = 'tarabih-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
  isRtl: boolean
  dir: 'rtl' | 'ltr'
  arrowIcon: 'arrow_forward' | 'arrow_back'
  backIcon: 'arrow_forward' | 'arrow_back'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ar'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ar' || stored === 'en') return stored
  return 'ar'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const isRtl = locale === 'ar'
  const dir = isRtl ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      isRtl,
      dir,
      arrowIcon: isRtl ? 'arrow_back' : 'arrow_forward',
      backIcon: isRtl ? 'arrow_forward' : 'arrow_back',
    }),
    [locale, setLocale, isRtl, dir],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
