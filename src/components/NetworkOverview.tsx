import Icon from './Icon'
import StatusBadge from './ui/StatusBadge'
import { useLanguage } from '../i18n/LanguageContext'
import type { RegionId } from '../i18n/translations'

type NetworkOverviewProps = {
  selectedRegionId?: RegionId
}

export default function NetworkOverview({ selectedRegionId }: NetworkOverviewProps) {
  const { t, arrowIcon } = useLanguage()
  const n = t.networkOverview
  const landCountries = t.services.find((s) => s.id === 'land')?.countries ?? []

  return (
    <div className="network-overview card overflow-hidden">
      <div className="network-overview__header">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-sm font-bold text-ink">{n.title}</h2>
          <StatusBadge variant="success">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {n.live}
          </StatusBadge>
        </div>
        <p className="text-xs text-ink-subtle mt-1">{n.subtitle}</p>
      </div>

      <div className="network-overview__body">
        <div className="network-overview__grid-bg" aria-hidden />

        <div className="relative z-10 space-y-6 md:space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {n.kpis.map(({ label, value, icon }) => (
              <div key={label} className="overview-kpi">
                <div className="overview-kpi__icon">
                  <Icon name={icon} className="text-primary text-xl" />
                </div>
                <div>
                  <p className="overview-kpi__value">{value}</p>
                  <p className="overview-kpi__label">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-bold text-ink-muted mb-3">{n.regionsTitle}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.regions.map((region) => (
                <div
                  key={region.id}
                  className={`overview-region ${selectedRegionId === region.id ? 'ring-2 ring-accent ring-offset-2' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-semibold text-ink text-sm">{region.name}</p>
                      <p className="text-xs text-ink-subtle mt-0.5">
                        {region.routes} · {region.status}
                      </p>
                    </div>
                    <StatusBadge variant="info">{region.status}</StatusBadge>
                  </div>
                  <div className="progress-track h-1.5">
                    <div className="progress-fill" style={{ width: `${Math.min(region.routes * 2, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-ink-muted mb-3">{n.corridorsTitle}</p>
            <div className="space-y-2">
              {n.corridors.map((corridor) => (
                <div key={corridor.id} className="overview-corridor">
                  <div className="overview-corridor__route">
                    <span className="overview-corridor__id">{corridor.id}</span>
                    <span className="text-sm text-ink">{corridor.from}</span>
                    <Icon name={arrowIcon} className="text-ink-subtle text-base shrink-0" />
                    <span className="text-sm text-ink">{corridor.to}</span>
                  </div>
                  <div className="overview-corridor__meta">
                    <div className="w-24 md:w-32 progress-track h-1.5">
                      <div className="progress-fill h-full" style={{ width: `${corridor.load}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-ink-muted tabular-nums">{corridor.load}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-ink-muted mb-3">{n.countriesTitle}</p>
            <div className="flex flex-wrap gap-2">
              {landCountries.map((country) => (
                <span key={country} className="country-chip">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
