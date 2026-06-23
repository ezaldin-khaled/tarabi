import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'
import { useScrollToSection } from '../hooks/useScrollToSection'

const sectionIds = ['hero', 'services', 'coverage', 'why-us', 'contact'] as const

export default function Header() {
  const { t } = useLanguage()
  const scrollTo = useScrollToSection()
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionLinks = [
    { id: sectionIds[0], label: t.nav.home },
    { id: sectionIds[1], label: t.nav.services },
    { id: sectionIds[2], label: t.nav.coverage },
    { id: sectionIds[3], label: t.nav.whyUs },
    { id: sectionIds[4], label: t.nav.contact },
  ]

  const handleNav = (id: string) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <header className="header-bar sticky top-0 z-50">
      <div className="page-shell flex justify-between items-center h-[4.5rem] md:h-20 gap-3">
        <button type="button" onClick={() => handleNav('hero')} className="flex items-center gap-3 shrink-0 group">
          <img src={t.brand.logo} alt={t.brand.name} className="logo-img transition-transform group-hover:scale-105" />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {sectionLinks.map(({ id, label }) => (
            <button key={id} type="button" onClick={() => handleNav(id)} className="btn btn-ghost">
              {label}
            </button>
          ))}
          <NavLink
            to="/coverage"
            className={({ isActive }) =>
              `nav-pill ${isActive ? 'nav-pill--active' : ''}`
            }
          >
            {t.nav.coverageNetwork}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button type="button" onClick={() => handleNav('contact')} className="btn btn-ghost btn-sm">
            {t.nav.trackShipment}
          </button>
          <button type="button" onClick={() => handleNav('contact')} className="btn btn-primary btn-sm">
            {t.nav.getQuote}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="btn btn-ghost p-2 min-h-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={t.nav.menu}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border/60 bg-surface/95 backdrop-blur-xl page-shell pb-4 pt-0">
          <nav className="flex flex-col gap-1 pt-3">
            {sectionLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNav(id)}
                className="text-start px-4 py-3 rounded-xl text-ink hover:bg-surface-muted transition-colors"
              >
                {label}
              </button>
            ))}
            <Link
              to="/coverage"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-accent font-semibold hover:bg-accent-soft"
            >
              {t.nav.coverageNetwork}
            </Link>
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
              <button type="button" onClick={() => handleNav('contact')} className="btn btn-secondary w-full">
                {t.nav.trackShipment}
              </button>
              <button type="button" onClick={() => handleNav('contact')} className="btn btn-primary w-full">
                {t.nav.getQuote}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
