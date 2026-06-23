import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import NetworkOverview from '../components/NetworkOverview'
import SectionHeader from '../components/ui/SectionHeader'
import StatusBadge from '../components/ui/StatusBadge'
import { useLanguage } from '../i18n/LanguageContext'
import type { RegionId } from '../i18n/translations'

export default function CoveragePage() {
  const { t, backIcon } = useLanguage()
  const p = t.coveragePage
  const [selectedRegion, setSelectedRegion] = useState<RegionId>(t.regions[0].id)

  return (
    <div className="page-shell py-10 md:py-14">
      <div className="mb-10">
        <Link to="/" className="link-subtle mb-6 inline-flex">
          <Icon name={backIcon} className="text-base" />
          {p.backHome}
        </Link>
        <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
      </div>

      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <NetworkOverview selectedRegionId={selectedRegion} />
        </div>

        <div className="lg:col-span-4 card flex flex-col overflow-hidden lg:min-h-[32rem]">
          <div className="p-5 border-b border-border">
            <h2 className="text-sm font-bold text-ink mb-1">{p.regionsTitle}</h2>
            <p className="text-xs text-ink-subtle mb-3">{p.regionsHint}</p>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {t.regions.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegion(region.id)}
                className={`w-full text-start p-5 border-b border-border transition-colors hover:bg-surface-muted ${
                  selectedRegion === region.id ? 'bg-accent-soft' : ''
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="font-semibold text-ink text-sm">{region.name}</span>
                  <StatusBadge variant="info">{region.status}</StatusBadge>
                </div>
                <p className="text-xs text-muted">
                  {region.routes} {p.activeRoutes}
                </p>
              </button>
            ))}
          </div>

          <div className="p-5 border-t border-border bg-surface-muted/60">
            <p className="text-xs font-bold text-ink-muted mb-2">{p.availableServices}</p>
            <div className="flex flex-wrap gap-1.5">
              {t.services.slice(0, 4).map((s) => (
                <span key={s.id} className="text-xs bg-surface px-2 py-1 rounded-md border border-border text-ink-muted">
                  {s.title.split(' ').slice(0, 2).join(' ')}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-12 card p-6 md:p-8">
          <h3 className="heading-card mb-2">{p.shipmentsTitle}</h3>
          <p className="text-sm text-muted mb-6">{p.shipmentsDescription}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.shipments.map((s) => (
              <div key={s.id} className="stat-pill">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-bold text-primary" dir="ltr">
                    {s.id}
                  </span>
                  <StatusBadge variant={s.variant}>{s.status}</StatusBadge>
                </div>
                <p className="font-semibold text-ink text-sm">{s.route}</p>
                <p className="text-xs text-muted mt-1">{s.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
