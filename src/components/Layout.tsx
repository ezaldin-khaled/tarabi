import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useLanguage } from '../i18n/LanguageContext'

export default function Layout() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    document.title = pathname === '/coverage' ? t.meta.coverageTitle : t.meta.homeTitle
    window.scrollTo(0, 0)
  }, [pathname, t])

  return (
    <div className="app-canvas min-h-screen flex flex-col text-ink">
      <div className="mesh-orb mesh-orb--1" aria-hidden />
      <div className="mesh-orb mesh-orb--2" aria-hidden />
      <div className="mesh-orb mesh-orb--3" aria-hidden />
      <Header />
      <div className="flex-1 relative z-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
