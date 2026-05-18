import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  aboutSnippet,
  artistName,
  contactText,
  getArtwork,
  locationLabel,
  mediumsLabel,
  portraitArtworks,
  roseStory,
  shortBrief,
} from '../data/artistContent'

export default function OptionEight() {
  const hero = getArtwork('8')

  return (
    <div className="bg-white text-navy font-serif overflow-hidden">
      <header className="relative px-6 md:px-0 pt-16 pb-8 md:pb-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-0 items-end">
          <div className="md:col-span-5 md:pl-12 md:pr-8 md:pb-20 z-10 relative">
            <p className="text-[10px] uppercase tracking-[0.35em] text-pink-dusty mb-6 font-sans">
              Feature · {locationLabel}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
              {artistName}
            </h1>
            <p className="font-sans text-sm text-navy/60 uppercase tracking-widest mb-6">
              {mediumsLabel}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-navy/80 font-sans max-w-md">
              {shortBrief}
            </p>
          </div>
          <div className="md:col-span-7 md:-mr-12 relative">
            <div className="bg-pink-panel/30 p-4 md:p-6">
              <ArtworkImage artwork={hero} size="full" framed={false} className="w-full" />
            </div>
            <p className="absolute bottom-8 left-8 md:left-12 text-[10px] uppercase tracking-widest text-white/90 font-sans mix-blend-difference">
              Featured study
            </p>
          </div>
        </div>
      </header>

      <section className="border-t border-navy/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12">
          <div className="lg:col-span-7 px-6 md:px-12 py-16 border-r border-pink-dusty/30">
            <p className="text-2xl md:text-3xl leading-snug text-navy/90 mb-8">{aboutSnippet}</p>
            <blockquote className="font-serif text-3xl md:text-4xl italic text-navy leading-tight border-l-4 border-pink pl-6 my-12">
              &ldquo;{roseStory.quote}&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-navy/50 mb-4">From &ldquo;{roseStory.title}&rdquo;</p>
            <a
              href="#story"
              className="font-sans text-sm border-b border-navy pb-1 hover:text-pink-dusty transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Read the story →
            </a>
          </div>
          <aside className="lg:col-span-5 bg-pink-panel/20 px-6 md:px-10 py-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-pink-dusty mb-8 font-sans">
              Vertical studies
            </h2>
            <div className="space-y-8">
              {portraitArtworks.map((work) => (
                <figure key={work.id} className="bg-white p-4 shadow-sm">
                  <ArtworkImage artwork={work} size="natural" />
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-start border-t border-navy/10">
        <InstagramCard style="editorial" prominent />
        <div id="contact">
          <h3 className="text-2xl font-medium mb-4">Get in touch</h3>
          <p className="font-sans text-sm text-navy/70 leading-relaxed mb-6">{contactText}</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-navy text-white text-sm font-sans hover:bg-navy-light transition-colors"
          >
            Contact Caroline
          </a>
        </div>
      </section>

      <footer className="border-t border-navy/10 py-8 text-center text-xs text-navy/40 font-sans">
        © {new Date().getFullYear()} {artistName}
      </footer>
    </div>
  )
}
