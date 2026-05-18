import ArtworkImage from '../components/ArtworkImage'
import InstagramCard from '../components/InstagramCard'
import StudioButton from '../components/StudioButton'
import { landscapeArtworks, portraitArtworks, shortBrief } from '../data/artistContent'

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-widest text-pink-dusty mb-3">Gallery</p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-6">
          Selected collection
        </h1>
        <p className="text-navy/75 leading-relaxed font-sans">{shortBrief}</p>
        <p className="text-sm text-navy/60 mt-4 font-sans leading-relaxed">
          A curated selection of watercolour and ink studies — everyday scenes, quiet details,
          and places observed from my studio and sketchbook.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-serif text-xl text-center mb-2">Landscape studies</h2>
        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-8">
          Line and wash on paper
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {landscapeArtworks.map((work) => (
            <figure
              key={work.id}
              className="rounded-2xl bg-white p-4 shadow-md shadow-pink/15 hover:shadow-lg transition-shadow"
            >
              <ArtworkImage artwork={work} size="natural" className="rounded-xl" />
            </figure>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-xl text-center mb-2">Portrait &amp; vertical studies</h2>
        <p className="text-center text-xs text-pink-dusty uppercase tracking-widest mb-8">
          Sketchbook pages
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-end">
          {portraitArtworks.map((work, i) => (
            <figure
              key={work.id}
              className={`rounded-2xl bg-white p-4 shadow-lg w-full max-w-[240px] ${
                i === 1 ? 'sm:-mt-4' : ''
              }`}
            >
              <ArtworkImage artwork={work} size="lg" />
            </figure>
          ))}
        </div>
      </section>

      <section className="max-w-xl mx-auto">
        <InstagramCard style="studio" prominent />
        <p className="text-center text-sm text-navy/50 mt-6 font-sans">
          For the newest sketches and studio updates, follow along on Instagram.
        </p>
        <div className="text-center mt-8">
          <StudioButton to="/contact">Get in touch</StudioButton>
        </div>
      </section>
    </div>
  )
}
