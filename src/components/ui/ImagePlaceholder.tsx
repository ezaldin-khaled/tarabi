import Icon from '../Icon'
import { useLanguage } from '../../i18n/LanguageContext'

type ImagePlaceholderProps = {
  label?: string
  aspectRatio?: 'video' | 'square' | 'hero'
  className?: string
  icon?: string
  src?: string
}

const aspectClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  hero: 'aspect-[4/3] md:aspect-[16/10]',
}

export default function ImagePlaceholder({
  label = 'Image placeholder',
  aspectRatio = 'hero',
  className = '',
  icon = 'image',
  src,
}: ImagePlaceholderProps) {
  const { t } = useLanguage()

  if (src) {
    return (
      <div
        className={`image-placeholder image-placeholder--photo ${aspectClasses[aspectRatio]} ${className}`}
      >
        <img src={src} alt={label} className="image-placeholder__img" />
      </div>
    )
  }

  return (
    <div
      className={`image-placeholder image-placeholder--modern ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="image-placeholder__mesh" aria-hidden />
      <div className="image-placeholder__inner">
        <div className="image-placeholder__icon-wrap">
          <Icon name={icon} className="text-3xl text-accent" />
        </div>
        <span className="image-placeholder__label">{label}</span>
        <span className="image-placeholder__hint">{t.ui.imageSoon}</span>
      </div>
    </div>
  )
}
