import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import StoryPreview from './StoryPreview'
import {
  aboutSnippet,
  artistName,
  contactText,
  getArtwork,
  landscapeArtworks,
  mediumsLabel,
  portraitArtworks,
  shortBrief,
} from '../data/artistContent'

const BLOCK_LANDSCAPES = landscapeArtworks.filter((a) => ['1', '5', '8'].includes(a.id))

export default function OptionTen() {
  const overlapA = getArtwork('4')
  const overlapB = getArtwork('3')

  return (
    <div className="bg-white text-navy font-serif min-h-screen">
      <section className="bg-navy text-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-pink-light/80 text-xs uppercase tracking-[0.3em] mb-4 font-sans">
              {mediumsLabel}
            </p>
            <h1 className="text-5xl md:text-7xl font-medium leading-none mb-6">{artistName}</h1>
            <p className="font-sans text-white/70 leading-relaxed">{shortBrief}</p>
          </div>
          <div className="hidden md:block w-24 h-1 bg-pink ml-auto" />
        </div>
      </section>

      <section className="relative -mt-8 md:-mt-16 max-w-6xl mx-auto px-6">
        <div className="relative h-[320px] md:h-[420px]">
          <div className="absolute left-0 top-0 w-[70%] z-10 shadow-2xl">
            <ArtworkImage artwork={overlapA} size="full" className="bg-white" />
          </div>
          <div className="absolute right-0 top-12 md:top-20 w-[55%] z-20 shadow-2xl border-4 border-white">
            <ArtworkImage artwork={overlapB} size="lg" className="bg-pink-panel/40" />
          </div>
        </div>
      </section>

      <section className="bg-pink-panel/50 mt-24 md:mt-32 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium mb-2">Selected works</h2>
          <div className="w-16 h-0.5 bg-navy mb-10" />
          <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-6 font-sans">
            Landscapes
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {BLOCK_LANDSCAPES.map((work) => (
              <figure key={work.id} className="bg-white p-3 shadow-md">
                <ArtworkImage artwork={work} size="md" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 bg-navy text-white p-8 md:p-10">
          <h3 className="text-xl font-medium mb-6">About</h3>
          <p className="font-sans text-sm text-white/80 leading-relaxed">{aboutSnippet}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-4 font-sans">
            Portrait studies
          </p>
          <div className="space-y-6">
            {portraitArtworks.map((work) => (
              <figure key={work.id} className="border-l-4 border-pink pl-4 bg-pink-panel/20 py-3">
                <ArtworkImage artwork={work} size="sm" framed={false} />
              </figure>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 space-y-8">
          <StoryPreview variant="editorial" showQuote={false} />
          <InstagramCard style="gallery" prominent />
        </div>
      </section>

      <section
        id="contact"
        className="border-t-8 border-navy bg-white px-6 py-16 text-center"
      >
        <h3 className="text-3xl font-medium mb-4">Get in touch</h3>
        <p className="font-sans text-navy/70 max-w-md mx-auto mb-8">{contactText}</p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-pink text-navy font-sans text-sm font-medium hover:bg-pink-dusty transition-colors"
        >
          Send a message
        </a>
      </section>

      <footer className="bg-navy text-white/40 text-center py-6 text-xs font-sans">
        © {new Date().getFullYear()} {artistName}
      </footer>
    </div>
  )
}
