import {
  instagramHandle,
  instagramPreviewArtwork,
  instagramPreviewCaption,
  instagramUrl,
} from '../data/artistContent'

type Style = 'editorial' | 'studio' | 'gallery' | 'minimal' | 'journal'

type Props = {
  style?: Style
  className?: string
  prominent?: boolean
}

export default function InstagramCard({
  style = 'editorial',
  className = '',
  prominent = false,
}: Props) {
  const base = prominent ? 'p-6 md:p-8' : 'p-5 md:p-6'

  const shells: Record<Style, string> = {
    editorial: `border border-pink-dusty/60 bg-white ${base}`,
    studio: `rounded-2xl bg-white shadow-md shadow-pink/10 ${base}`,
    gallery: `border-l-4 border-pink bg-white ${base}`,
    minimal: `border-t border-navy/10 pt-6 ${base}`,
    journal: `rounded-lg bg-pink-panel border border-pink-dusty/30 ${base}`,
  }

  return (
    <article className={`${shells[style]} ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink to-pink-dusty flex items-center justify-center text-white text-xs font-medium">
          CJ
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-navy/60 font-sans">Instagram</p>
          <p className="text-sm text-navy font-medium">{instagramHandle}</p>
        </div>
      </div>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-4 group"
      >
        <div className="bg-pink-panel/40 flex items-center justify-center p-3 overflow-hidden">
          <img
            src={instagramPreviewArtwork.src}
            alt="Preview of Caroline's latest sketch — follow on Instagram for updates"
            className="max-h-56 w-auto max-w-full object-contain group-hover:opacity-95 transition-opacity"
            loading="lazy"
          />
        </div>
        <p className="text-[10px] uppercase tracking-widest text-navy/40 mt-2 font-sans">
          Preview — follow for live updates
        </p>
      </a>

      <p className="text-navy/80 text-sm leading-relaxed mb-2 font-sans">
        {instagramPreviewCaption}
      </p>
      <p className="text-navy/50 text-xs mb-5 font-sans">
        Follow Caroline on Instagram for the latest sketches and studio updates.
      </p>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-pink-dusty transition-colors font-sans"
      >
        View latest on Instagram
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
