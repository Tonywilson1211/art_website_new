import { roseStory } from '../data/artistContent'

type Variant = 'editorial' | 'studio' | 'journal' | 'minimal'

type Props = {
  variant?: Variant
  showQuote?: boolean
  className?: string
}

export default function StoryPreview({
  variant = 'editorial',
  showQuote = true,
  className = '',
}: Props) {
  const shells: Record<Variant, string> = {
    editorial: 'border-t border-pink-dusty/40 pt-8',
    studio: 'rounded-2xl bg-white p-6 md:p-8 shadow-md shadow-pink/10',
    journal: 'border-l-2 border-pink-dusty pl-6',
    minimal: 'border-t border-navy/10 pt-8',
  }

  return (
    <article className={`${shells[variant]} ${className}`}>
      <p className="text-[10px] uppercase tracking-[0.25em] text-pink-dusty mb-3 font-sans">
        Sketchbook journal
      </p>
      <h3 className="font-serif text-xl md:text-2xl text-navy mb-4">{roseStory.title}</h3>
      <p className="text-navy/80 leading-relaxed text-sm md:text-base font-sans mb-5">
        {roseStory.excerpt}
      </p>
      {showQuote && (
        <blockquote className="font-serif italic text-navy/70 border-l-2 border-pink pl-4 mb-6 text-lg leading-relaxed">
          {roseStory.quote}
        </blockquote>
      )}
      <a
        href="#story"
        className="text-sm font-sans text-navy border-b border-pink-dusty pb-0.5 hover:text-pink-dusty transition-colors"
        onClick={(e) => e.preventDefault()}
      >
        Read the story →
      </a>
    </article>
  )
}
