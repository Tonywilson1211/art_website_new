import { artistImage, aboutParagraphs, aboutStudioSnippet, artistName, roseStory } from '../data/artistContent'

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <p className="text-xs uppercase tracking-widest text-pink-dusty mb-4">About the artist</p>
      <h1 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-8">{artistName}</h1>

      <div className="rounded-2xl overflow-hidden bg-white p-3 shadow-lg shadow-pink/20 mb-10 max-w-sm">
        <img
          src={artistImage.src}
          alt={artistImage.alt}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      <blockquote className="font-serif text-2xl md:text-3xl italic text-navy/85 leading-snug border-l-4 border-pink pl-6 mb-12">
        {aboutStudioSnippet}
      </blockquote>

      <div className="space-y-6 text-navy/80 leading-relaxed font-sans text-base md:text-[1.05rem]">
        {aboutParagraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>

      <section id="story" className="mt-16 pt-12 border-t border-pink-dusty/40">
        <p className="text-[10px] uppercase tracking-[0.25em] text-pink-dusty mb-3 font-sans">
          Sketchbook journal
        </p>
        <h2 className="font-serif text-3xl text-navy mb-6">{roseStory.title}</h2>
        <blockquote className="font-serif italic text-xl text-navy/75 border-l-2 border-pink pl-5 mb-8">
          &ldquo;{roseStory.quote}&rdquo;
        </blockquote>
        <div className="space-y-5 text-navy/75 leading-relaxed font-sans">
          {roseStory.body.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </section>
    </article>
  )
}
