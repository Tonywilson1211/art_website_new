import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  artistName,
  artworks,
  contactText,
  getArtwork,
  mediumsLabel,
  roseStory,
  shortBrief,
} from '../data/artistContent'

export default function OptionThree() {
  const featured = getArtwork('8')
  const catalogue = artworks.filter((a) => ['1', '2', '3', '4'].includes(a.id))

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      <aside className="bg-navy text-white md:w-72 lg:w-80 shrink-0">
        <div className="p-8 md:p-10 md:min-h-screen flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.25em] text-pink/80 mb-8">Exhibition</p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-2">
            {artistName}
          </h1>
          <p className="text-white/60 text-sm mb-1">{mediumsLabel}</p>
          <p className="text-pink-light/80 text-xs italic mb-10">Guildford, England</p>

          <nav className="space-y-3 text-sm border-t border-white/10 pt-8 mb-auto">
            {['Selected Works', 'Story', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white/70 hover:text-pink-light transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-[10px] text-white/30 mt-8">Sketching daily since 2017</p>
        </div>
      </aside>

      <main className="flex-1 bg-white">
        <header className="border-b-4 border-navy px-6 md:px-12 py-8">
          <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-2">
            Private View
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy">Watercolour &amp; Ink Studies</h2>
        </header>

        <section className="px-6 md:px-12 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ArtworkImage
                artwork={featured}
                size="full"
                className="border-8 border-navy"
              />
              <p className="font-serif text-lg mt-4 text-navy">Featured study</p>
              <p className="text-sm text-navy/50 mb-6">Watercolour &amp; ink — line and wash</p>
              <p className="text-navy/75 leading-relaxed max-w-xl">{shortBrief}</p>
            </div>
            <div>
              <InstagramCard style="gallery" prominent className="shadow-sm" />
            </div>
          </div>
        </section>

        <section
          id="story"
          className="px-6 md:px-12 py-10 bg-pink-panel/20 border-t border-navy/5"
        >
          <blockquote className="font-serif text-xl md:text-2xl italic text-navy leading-relaxed max-w-2xl mb-4">
            &ldquo;{roseStory.quote}&rdquo;
          </blockquote>
          <p className="text-sm text-navy/50 font-sans">— from &ldquo;{roseStory.title}&rdquo;</p>
        </section>

        <section id="selected-works" className="px-6 md:px-12 py-10 border-t border-navy/5">
          <h3 className="font-serif text-xl text-navy mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pink-dusty" />
            Catalogue Selection
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
            {catalogue.map((work) => (
              <figure key={work.id} className="border border-navy/10 bg-white p-2">
                <ArtworkImage artwork={work} size="sm" framed />
              </figure>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-navy/10"
        >
          <div>
            <h3 className="font-serif text-xl text-navy mb-2">Get in touch</h3>
            <p className="text-sm text-navy/60 max-w-sm">{contactText}</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-navy text-white text-sm hover:bg-navy-light transition-colors"
          >
            Contact the studio
          </a>
        </section>

        <footer className="px-6 md:px-12 py-6 border-t border-navy/10 text-xs text-navy/40">
          © {new Date().getFullYear()} {artistName}
        </footer>
      </main>
    </div>
  )
}
