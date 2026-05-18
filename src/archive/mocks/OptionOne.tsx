import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  aboutParagraphs,
  aboutSnippet,
  artistName,
  contactText,
  getArtwork,
  mediumsLabel,
  shortBrief,
} from '../data/artistContent'

const SELECTED_IDS = ['2', '3', '6', '7'] as const

export default function OptionOne() {
  const featured = getArtwork('1')

  return (
    <div className="bg-white text-navy font-serif">
      <header className="border-b border-pink-dusty/40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-pink-dusty mb-2 font-sans">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">{artistName}</h1>
          </div>
          <nav className="flex gap-6 text-sm font-sans text-navy/70">
            <a href="#works" className="hover:text-navy">
              Works
            </a>
            <a href="#about" className="hover:text-navy">
              About
            </a>
            <a href="#contact" className="hover:text-navy">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5 md:pt-16 order-2 md:order-1">
            <p className="text-pink-dusty text-sm italic mb-4 font-sans">{mediumsLabel}</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6 font-medium">
              Watercolour &amp; line and wash
            </h2>
            <div className="w-12 h-px bg-pink-dusty mb-6" />
            <p className="text-navy/80 leading-relaxed mb-8 font-sans text-base">{shortBrief}</p>
            <p className="text-sm text-navy/50 font-sans italic">
              Sketching whenever and wherever I can
            </p>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <ArtworkImage artwork={featured} size="full" className="w-full max-w-md ml-auto shadow-lg" />
            <p className="text-right text-xs text-navy/40 mt-3 font-sans italic">
              Featured work — watercolour &amp; ink
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="border-t border-pink-dusty/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <h3 className="text-2xl font-medium">Selected Works</h3>
            <span className="text-[10px] uppercase tracking-widest text-pink-dusty font-sans">
              Favourites
            </span>
          </div>
          <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {SELECTED_IDS.map((id) => {
              const work = getArtwork(id)
              return (
                <figure key={id} className="break-inside-avoid">
                  <ArtworkImage artwork={work} size="natural" className="mb-2" />
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-pink-panel/30 border-y border-pink-dusty/20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">About the Artist</h3>
            <p className="text-navy/80 leading-relaxed font-sans mb-6">{aboutSnippet}</p>
            <details className="group font-sans">
              <summary className="text-sm cursor-pointer border-b border-pink-dusty pb-0.5 inline-block hover:text-pink-dusty transition-colors list-none">
                <span className="group-open:hidden">Read full biography →</span>
                <span className="hidden group-open:inline">Close biography ↑</span>
              </summary>
              <div className="mt-6 space-y-4 text-navy/75 text-sm leading-relaxed">
                {aboutParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </details>
          </div>
          <InstagramCard style="editorial" prominent />
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-pink-dusty mb-4 font-sans">
          Get in touch
        </p>
        <h3 className="text-2xl font-medium mb-4">Say Hello</h3>
        <p className="text-navy/70 font-sans max-w-md mx-auto mb-8">{contactText}</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border border-navy text-sm font-sans hover:bg-navy hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </section>

      <footer className="border-t border-pink-dusty/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy/50 font-sans">
          <p>© {new Date().getFullYear()} {artistName}</p>
          <p>{mediumsLabel}</p>
        </div>
      </footer>
    </div>
  )
}
