import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  aboutStudioSnippet,
  artistName,
  artworks,
  contactText,
  mediumsLabel,
  shortBrief,
} from '../data/artistContent'

const GRID_IDS = ['1', '2', '3', '4', '5', '6'] as const

export default function OptionFour() {
  const gridWorks = GRID_IDS.map((id) => artworks.find((a) => a.id === id)!)

  return (
    <div className="bg-white text-navy min-h-screen" style={{ fontFamily: 'var(--font-display)' }}>
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-pink-dusty mb-6 font-light">
          {mediumsLabel}
        </p>
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.08em] uppercase mb-4">
          {artistName.split(' ').map((word, i) => (
            <span key={i} className="block md:inline">
              {word}{' '}
            </span>
          ))}
        </h1>
        <p
          className="text-sm font-light text-navy/50 tracking-widest"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Guildford, England
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <p
          className="text-sm font-light leading-loose text-navy/60 max-w-lg mb-16"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {shortBrief}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20 items-start">
          {gridWorks.map((work) => (
            <figure key={work.id} className="group">
              <ArtworkImage
                artwork={work}
                size="sm"
                framed={false}
                className="bg-pink-panel/30 opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </figure>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <span className="inline-block w-1 h-1 rounded-full bg-pink mb-6" />
            <h2 className="text-xs uppercase tracking-[0.3em] font-light mb-6">About</h2>
            <p
              className="text-sm font-light leading-loose text-navy/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {aboutStudioSnippet}
            </p>
          </div>
          <InstagramCard style="minimal" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-navy/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-light mb-2">Gallery</h2>
            <p
              className="text-sm font-light text-navy/50"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Selected works in watercolour &amp; ink
            </p>
          </div>
          <a
            href="#works"
            className="text-xs uppercase tracking-[0.2em] text-navy hover:text-pink-dusty transition-colors"
          >
            View works →
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-sm text-navy/60 mb-4 max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
          {contactText}
        </p>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.3em] text-navy/40 hover:text-pink-dusty transition-colors"
        >
          Get in touch
        </a>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-navy/5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-navy/30 font-light">
          © {new Date().getFullYear()} {artistName}
        </p>
      </footer>
    </div>
  )
}
