import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  const options: { value: Locale; label: string }[] = [
    { value: 'ar', label: t.lang.ar },
    { value: 'en', label: t.lang.en },
  ]

  return (
    <div
      className={`lang-switcher ${className}`}
      role="group"
      aria-label={t.lang.label}
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className={`lang-switcher__btn ${locale === value ? 'lang-switcher__btn--active' : ''}`}
          aria-pressed={locale === value}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
