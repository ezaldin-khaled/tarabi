import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useScrollToSection } from '../hooks/useScrollToSection'

export default function Footer() {
  const { t } = useLanguage()
  const scrollTo = useScrollToSection()

  return (
    <footer className="footer-bar mt-auto text-on-primary">
      <div className="footer-bar__pattern" aria-hidden />
      <div className="page-shell py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <img src={t.brand.logo} alt={t.brand.name} className="logo-img brightness-0 invert" />
            <p className="text-sm text-white/75 leading-relaxed max-w-xs">{t.brand.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-white/90">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {t.footer.serviceLinks.map((link) => (
                <li key={link}>
                  <button type="button" onClick={() => scrollTo('services')} className="hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-white/90">{t.footer.companyTitle}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button type="button" onClick={() => scrollTo('why-us')} className="hover:text-white transition-colors">
                  {t.footer.companyLinks.whyUs}
                </button>
              </li>
              <li>
                <Link to="/coverage" className="hover:text-white transition-colors">
                  {t.footer.companyLinks.coverage}
                </Link>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
                  {t.footer.companyLinks.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-white/90">{t.footer.contactTitle}</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {t.contactSection.location}
              <br />
              {t.contactSection.email}
            </p>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn btn-secondary mt-4 btn-sm !bg-white/10 !border-white/25 !text-white hover:!bg-white/20"
            >
              {t.footer.contactUs}
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/55">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
