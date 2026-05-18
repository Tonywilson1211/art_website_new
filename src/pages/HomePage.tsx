import ArtworkImage from '../components/ArtworkImage'
import InstagramCard from '../components/InstagramCard'
import StoryPreview from '../components/StoryPreview'
import StudioButton from '../components/StudioButton'
import {
  aboutStudioSnippet,
  artistImage,
  artistName,
  landscapeArtworks,
  mediumsLabel,
  portraitArtworks,
  shortBrief,
} from '../data/artistContent'

const PREVIEW_LANDSCAPES = landscapeArtworks.filter((a) => ['1', '4', '5'].includes(a.id))

export default function HomePage() {
  const heroPortrait = artistImage

  return (
  <>
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-end">
          <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-lg shadow-pink/20">
            <img
              src={heroPortrait.src}
              alt={heroPortrait.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-pink-dusty mb-2">{mediumsLabel}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-3">
              {artistName}
            </h1>
            <p className="text-navy/75 leading-relaxed max-w-xl mb-6">{shortBrief}</p>
            <div className="flex flex-wrap gap-3">
              <StudioButton to="/gallery">View gallery</StudioButton>
              <StudioButton to="/about" variant="secondary">
                About Caroline
              </StudioButton>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="rounded-3xl bg-white/90 backdrop-blur p-6 md:p-10 shadow-md">
          <p className="font-serif text-xl text-navy/90 leading-relaxed mb-8">{aboutStudioSnippet}</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <StoryPreview variant="studio" showQuote linkTo="/about#story" />
            <InstagramCard style="studio" prominent />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl">Selected works</h2>
            <p className="text-xs text-pink-dusty uppercase tracking-widest mt-1">
              A glimpse from the sketchbook
            </p>
          </div>
          <StudioButton to="/gallery" variant="secondary">
            See full gallery →
          </StudioButton>
        </div>

        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-6">
          Landscape sketches
        </p>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {PREVIEW_LANDSCAPES.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl bg-white p-4 shadow-md shadow-pink/15 hover:shadow-lg transition-shadow"
            >
              <ArtworkImage artwork={work} size="natural" className="rounded-xl" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-6">
          Portrait studies
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
          <h3 className="font-serif text-2xl mb-3">Say hello</h3>
          <p className="text-white/75 text-sm max-w-lg mx-auto mb-8">
            Questions about my work, commissions, or simply want to connect — I&apos;d love to hear
            from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <StudioButton to="/contact" variant="navy">
              Get in touch
            </StudioButton>
            <StudioButton to="/about" variant="secondary">
              Read my story
            </StudioButton>
          </div>
        </div>
      </section>
    </>
  )
}
