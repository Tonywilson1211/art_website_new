import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import StoryPreview from './StoryPreview'
import {
  aboutStudioSnippet,
  artistImage,
  artistName,
  contactText,
  landscapeArtworks,
  mediumsLabel,
  portraitArtworks,
  shortBrief,
} from '../data/artistContent'

const DESK_LANDSCAPES = landscapeArtworks.filter((a) => ['1', '4', '5'].includes(a.id))

export default function OptionSeven() {
  return (
    <div className="bg-pink-panel/60 text-navy min-h-screen font-sans">
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-end">
          <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-lg shadow-pink/20">
            <img
              src={artistImage.src}
              alt={artistImage.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-pink-dusty mb-2">{mediumsLabel}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-3">
              {artistName}
            </h1>
            <p className="text-navy/75 leading-relaxed max-w-xl">{shortBrief}</p>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="rounded-3xl bg-white/90 backdrop-blur p-6 md:p-10 shadow-md">
          <p className="font-serif text-xl text-navy/90 leading-relaxed mb-8">{aboutStudioSnippet}</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <StoryPreview variant="studio" showQuote />
            <InstagramCard style="studio" prominent />
          </div>
        </div>
      </section>

      <section id="works" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-serif text-2xl text-center mb-2">On the desk today</h2>
        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-8">
          Landscape sketches
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {DESK_LANDSCAPES.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl bg-white p-4 shadow-md shadow-pink/15 rotate-0 hover:-rotate-1 transition-transform"
            >
              <ArtworkImage artwork={work} size="natural" className="rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-6">
          Sketchbook pages — portrait format
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-end max-w-4xl mx-auto">
          {portraitArtworks.map((work, i) => (
            <div
              key={work.id}
              className={`bg-white rounded-2xl p-4 shadow-lg w-full max-w-[220px] ${
                i === 1 ? 'md:-mt-6' : ''
              }`}
            >
              <ArtworkImage artwork={work} size="lg" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-navy text-white p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl mb-3">Get in touch</h3>
          <p className="text-white/75 text-sm max-w-lg mx-auto mb-6">{contactText}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-pink text-navy text-sm font-medium"
          >
            Say hello
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-navy/40">
        © {new Date().getFullYear()} {artistName}
      </footer>
    </div>
  )
}
