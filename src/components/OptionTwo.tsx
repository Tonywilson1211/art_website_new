import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import StoryPreview from './StoryPreview'
import {
  aboutStudioSnippet,
  artistImage,
  artistName,
  contactText,
  getArtwork,
  mediumsLabel,
  shortBrief,
} from '../data/artistContent'

const STUDIO_IDS = ['4', '2', '7'] as const

export default function OptionTwo() {
  const heroWork = getArtwork('5')

  return (
    <div className="bg-pink-panel/40 text-navy font-sans min-h-screen">
      <header className="max-w-5xl mx-auto px-6 pt-10 pb-6 text-center">
        <div className="inline-block px-6 py-2 rounded-full bg-white/80 shadow-sm mb-6">
          <p className="text-xs text-pink-dusty tracking-widest uppercase">{mediumsLabel}</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-navy mb-2">{artistName}</h1>
        <p className="text-navy/60">{shortBrief}</p>
      </header>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-lg shadow-pink/15">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ArtworkImage artwork={heroWork} size="lg" className="rounded-2xl" />
            <div>
              <p className="font-serif text-2xl leading-relaxed text-navy mb-6">{aboutStudioSnippet}</p>
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink/30 text-navy text-sm hover:bg-pink/50 transition-colors"
              >
                View selected works →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="font-serif text-2xl text-center mb-8">Selected Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STUDIO_IDS.map((id) => {
            const work = getArtwork(id)
            return (
              <div
                key={id}
                className="rounded-2xl bg-white p-4 shadow-md shadow-pink/10 hover:shadow-lg transition-shadow"
              >
                <ArtworkImage artwork={work} size="natural" className="rounded-xl mb-3" />
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <StoryPreview variant="studio" className="mb-10" />
        <div className="rounded-3xl bg-pink-light/50 p-6 md:p-10">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-4">
              <img
                src={artistImage.src}
                alt={artistImage.alt}
                className="w-full max-w-xs mx-auto md:mx-0 rounded-2xl object-contain bg-white p-2"
                loading="lazy"
              />
              <div>
                <h3 className="font-serif text-2xl mb-4">About Caroline</h3>
                <p className="text-navy/75 leading-relaxed text-sm">{shortBrief}</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <InstagramCard style="studio" prominent />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-2xl bg-navy text-white p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl mb-3">Get in touch</h3>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-6">{contactText}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-pink text-navy text-sm font-medium hover:bg-pink-light transition-colors"
          >
            Send a message
          </a>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-8 text-center text-xs text-navy/40">
        <p>© {new Date().getFullYear()} {artistName} · {mediumsLabel}</p>
      </footer>
    </div>
  )
}
