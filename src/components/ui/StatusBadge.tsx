type StatusVariant = 'success' | 'warning' | 'neutral' | 'info'

const styles: Record<StatusVariant, string> = {
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  neutral: 'bg-surface-muted text-ink-muted',
  info: 'bg-primary-soft text-primary',
}

import type { ReactNode } from 'react'

type StatusBadgeProps = {
  children: ReactNode
  variant?: StatusVariant
}

export default function StatusBadge({ children, variant = 'neutral' }: StatusBadgeProps) {
  return <span className={`badge ${styles[variant]}`}>{children}</span>
}
