import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import Icon from '../components/Icon'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import SectionHeader from '../components/ui/SectionHeader'
import StatusBadge from '../components/ui/StatusBadge'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useLanguage } from '../i18n/LanguageContext'
import type { ServiceId } from '../i18n/translations'

export default function HomePage() {
  const { t, arrowIcon } = useLanguage()
  const [activeService, setActiveService] = useState<ServiceId | ''>(t.services[0].id)

  const heroReveal = useSectionReveal<HTMLElement>()
  const servicesReveal = useSectionReveal<HTMLElement>()
  const coverageReveal = useSectionReveal<HTMLElement>()
  const whyReveal = useSectionReveal<HTMLElement>()
  const contactReveal = useSectionReveal<HTMLElement>()

  const selectedService = t.services.find((s) => s.id === activeService) ?? t.services[0]
  const c = t.contactSection
  const serviceImageLabel = activeService ? selectedService.title : t.services[0].title

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="page-shell">
      <section
        id="hero"
        ref={heroReveal.ref}
        className={`${heroReveal.className} section-padding pt-10 md:pt-16 section-block`}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <StatusBadge variant="info">
              <Icon name="location_on" className="text-base" />
              {t.hero.badge}
            </StatusBadge>
            <h1 className="heading-display">
              <span className="text-gradient">{t.hero.title}</span>
            </h1>
            <p className="text-muted text-body-lg leading-relaxed">{t.hero.description}</p>
            <p className="text-ink-subtle text-sm leading-relaxed">{t.hero.subdescription}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-lg"
              >
                {t.nav.getQuote}
                <Icon name={arrowIcon} className="text-lg" />
              </button>
              <Link to="/coverage" className="btn btn-secondary btn-lg">
                {t.nav.coverageNetwork}
              </Link>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-banner hero-banner--photo p-8 md:p-10 min-h-[300px] md:min-h-[400px] flex flex-col justify-between order-1 lg:order-2"
            style={{ backgroundImage: `url(${images.heroBanner})` }}
          >
            <div className="hero-banner__glow" aria-hidden />
            <div className="hero-banner__glow hero-banner__glow--2" aria-hidden />
            <div className="relative z-10 flex justify-center">
              <div className="hero-logo-ring">
                <img src={t.brand.logo} alt={t.brand.name} className="logo-img--lg drop-shadow-lg" />
              </div>
            </div>
            <div className="relative z-10 text-center text-white space-y-2">
              <p className="font-serif text-2xl md:text-3xl tracking-wide">TARABIH</p>
              <p className="text-sm text-white/70 tracking-[0.25em] uppercase">Transport</p>
              <p className="text-base md:text-lg text-white/85 pt-4 leading-relaxed max-w-md mx-auto">{t.brand.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        ref={servicesReveal.ref}
        className={`${servicesReveal.className} section-padding section-block section-block--alt`}
      >
        <SectionHeader
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          description={t.servicesSection.description}
        />

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 flex flex-col gap-2">
            {t.services.map((service) => {
              const isActive = activeService === service.id

              return (
                <div key={service.id} className="service-tab-group">
                  <button
                    type="button"
                    onClick={() => setActiveService(isActive ? '' : service.id)}
                    className={`service-tab w-full ${isActive ? 'service-tab--active' : ''}`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="service-tab__icon">
                          <Icon name={service.icon} />
                        </span>
                        <span className="font-semibold text-sm">{service.title}</span>
                      </div>
                      <Icon
                        name={isActive ? 'expand_less' : 'expand_more'}
                        className={`text-xl shrink-0 transition-transform duration-200 ${isActive ? 'text-white/90' : 'text-ink-subtle'}`}
                      />
                    </div>
                  </button>

                  <div className={`service-tab-panel ${isActive ? 'service-tab-panel--open' : ''}`}>
                    <div className="service-tab-panel__inner">
                      <div className="service-tab-card">
                        <p className="text-sm text-muted leading-relaxed">{service.summary}</p>
                        <ul className="service-tab-card__list">
                          {service.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        {service.countries && service.countries.length > 0 && (
                          <div className="service-tab-card__countries">
                            <p className="text-xs font-semibold text-ink mb-2">{t.servicesSection.countriesLabel}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {service.countries.map((country) => (
                                <span key={country} className="service-tab-card__tag">
                                  {country}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lg:col-span-7 min-h-full">
            <ImagePlaceholder
              key={activeService}
              label={serviceImageLabel}
              aspectRatio="hero"
              icon={selectedService.icon}
              src={images.services}
              className="h-full min-h-[320px] lg:min-h-[400px]"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {t.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__icon">
                <Icon name={service.icon} />
              </div>
              <h4 className="font-semibold text-ink mb-2">{service.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{service.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="coverage"
        ref={coverageReveal.ref}
        className={`${coverageReveal.className} section-padding section-block`}
      >
        <SectionHeader
          eyebrow={t.coverageSection.eyebrow}
          title={t.coverageSection.title}
          description={t.coverageSection.description}
          action={
            <Link to="/coverage" className="link-subtle shrink-0">
              {t.coverageSection.viewDetails}
              <Icon name={arrowIcon} />
            </Link>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.regions.map((region) => (
            <div key={region.id} className="region-card">
              <div className="region-card__icon">
                <Icon name="route" className="text-accent text-2xl" />
              </div>
              <h4 className="font-semibold text-ink mb-1">{region.name}</h4>
              <p className="text-2xl font-serif text-primary my-2">{region.routes}</p>
              <p className="text-xs text-ink-subtle mb-3">{t.coverageSection.routesLabel}</p>
              <StatusBadge variant="info">{region.status}</StatusBadge>
            </div>
          ))}
        </div>
      </section>

      <section
        id="why-us"
        ref={whyReveal.ref}
        className={`${whyReveal.className} section-padding section-block section-block--alt`}
      >
        <SectionHeader
          eyebrow={t.whySection.eyebrow}
          title={t.whySection.title}
          description={t.whySection.description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.whyUs.map((item) => (
            <div key={item.title} className="why-card">
              <div className="why-card__icon">
                <Icon name={item.icon} className="text-primary text-2xl" />
              </div>
              <h4 className="font-bold text-ink mb-2">{item.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        ref={contactReveal.ref}
        className={`${contactReveal.className} section-padding section-block`}
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />
            <ul className="space-y-4">
              {[
                { icon: 'location_on', label: c.locationLabel, value: c.location },
                { icon: 'mail', label: c.emailLabel, value: c.email },
                { icon: 'call', label: c.phoneLabel, value: c.phone },
              ].map(({ icon, label, value }) => (
                <li key={label} className="contact-info">
                  <div className="contact-info__icon">
                    <Icon name={icon} className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="text-sm text-muted" dir={label === c.emailLabel ? 'ltr' : undefined}>
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleContactSubmit} className="lg:col-span-7 form-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">{c.nameLabel}</label>
                <input className="input-field" placeholder={c.namePlaceholder} type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">{c.emailLabel}</label>
                <input className="input-field" placeholder={c.emailPlaceholder} type="email" dir="ltr" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">{c.serviceLabel}</label>
              <select className="input-field">
                {c.serviceOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">{c.messageLabel}</label>
              <textarea className="input-field resize-none" rows={4} placeholder={c.messagePlaceholder} />
            </div>
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              {c.submit}
            </button>
          </form>
        </div>
      </section>

      <section className="py-10 mb-6">
        <div className="tagline-banner" style={{ backgroundImage: `url(${images.patternStrip})` }}>
          <div className="tagline-banner__glow tagline-banner__glow--start" aria-hidden />
          <div className="tagline-banner__glow tagline-banner__glow--end" aria-hidden />
          <div className="tagline-banner__panel">
            <div className="tagline-banner__brand">
              <div className="tagline-banner__logo-wrap">
                <img src={t.brand.logo} alt="" className="tagline-banner__logo" aria-hidden />
              </div>
              <div className="tagline-banner__brand-text">
                <p className="tagline-banner__brand-name">TARABIH</p>
                <p className="tagline-banner__brand-sub">Transport</p>
              </div>
            </div>
            <span className="tagline-banner__divider" aria-hidden />
            <p className="tagline-banner__quote">{t.brand.tagline}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
