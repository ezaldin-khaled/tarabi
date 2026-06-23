import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
  align?: 'start' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'start',
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 ${
        align === 'center' ? 'text-center items-center' : 'sm:items-end sm:justify-between'
      }`}
    >
      <div className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-section">
          <span className="text-gradient">{title}</span>
        </h2>
        {description && <p className="text-muted text-body-lg mt-3 leading-relaxed">{description}</p>}
      </div>
      {action}
    </div>
  )
}
