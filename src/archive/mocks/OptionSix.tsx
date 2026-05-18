import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  aboutSnippet,
  artistName,
  contactText,
  getArtwork,
  landscapeArtworks,
  locationLabel,
  mediumsLabel,
  portraitArtworks,
  shortBrief,
} from '../data/artistContent'

const SALON_LANDSCAPES = landscapeArtworks.filter((a) => ['3', '4', '5', '8'].includes(a.id))

export default function OptionSix() {
  const centerpiece = getArtwork('1')

  return (
    <div className="bg-white text-navy font-serif min-h-screen">
      <div className="border-[12px] border-navy m-3 md:m-6 min-h-[calc(100vh-1.5rem)] flex flex-col">
        <header className="border-b border-pink-dusty/50 px-6 md:px-12 py-10 md:py-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-pink-dusty mb-4 font-sans">
            Private collection · {locationLabel}
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">{artistName}</h1>
          <p className="text-navy/60 font-sans text-sm max-w-xl mx-auto">{mediumsLabel}</p>
        </header>

        <section className="px-6 md:px-12 py-12 md:py-16 border-b border-pink-dusty/30">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:pr-8 border-r-0 lg:border-r border-pink-dusty/40">
              <p className="text-lg leading-relaxed text-navy/85 mb-6">{shortBrief}</p>
              <p className="text-sm text-navy/60 font-sans leading-relaxed">{aboutSnippet}</p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-4 border-navy p-2 md:p-3 bg-pink-panel/20">
                <ArtworkImage artwork={centerpiece} size="full" framed={false} />
              </div>
              <p className="text-right text-xs text-pink-dusty mt-3 font-sans uppercase tracking-widest">
                Centrepiece — watercolour &amp; ink
              </p>
            </div>
          </div>
        </section>

        <section id="works" className="px-6 md:px-12 py-12 bg-pink-panel/15">
          <h2 className="text-2xl font-medium mb-2">Curated Works</h2>
          <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-8 font-sans">
            Landscape studies
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SALON_LANDSCAPES.map((work) => (
              <figure key={work.id} className="border border-navy/15 bg-white p-2 shadow-sm">
                <ArtworkImage artwork={work} size="md" />
              </figure>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-12 border-t border-pink-dusty/30">
          <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-6 font-sans">
            Portrait &amp; vertical studies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
            {portraitArtworks.map((work) => (
              <figure
                key={work.id}
                className="flex-1 max-w-[200px] mx-auto border border-navy/10 bg-white p-3"
              >
                <ArtworkImage artwork={work} size="lg" />
              </figure>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 border-t border-navy/10 mt-auto">
          <div>
            <h3 className="text-xl font-medium mb-4">About the Artist</h3>
            <p className="font-sans text-sm text-navy/75 leading-relaxed">{aboutSnippet}</p>
          </div>
          <InstagramCard style="editorial" prominent />
        </section>

        <section
          id="contact"
          className="px-6 md:px-12 py-10 text-center border-t-4 border-navy bg-navy text-white"
        >
          <h3 className="text-xl font-medium mb-3">Get in touch</h3>
          <p className="font-sans text-sm text-white/75 max-w-md mx-auto mb-6">{contactText}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-pink text-pink-light text-sm font-sans hover:bg-pink hover:text-navy transition-colors"
          >
            Send a message
          </a>
        </section>

        <footer className="px-6 py-4 text-center text-[10px] text-navy/40 font-sans uppercase tracking-widest">
          © {new Date().getFullYear()} {artistName}
        </footer>
      </div>
    </div>
  )
}
