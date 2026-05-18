import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import {
  aboutStudioSnippet,
  artistName,
  contactText,
  getArtwork,
  mediumsLabel,
  shortBrief,
} from '../data/artistContent'

export default function OptionNine() {
  const featured = getArtwork('3')
  const accent = getArtwork('6')

  return (
    <div className="bg-white text-navy min-h-screen">
      <div className="max-w-lg mx-auto px-8 py-20 md:py-28">
        <div className="w-full h-px bg-pink-dusty/60 mb-12" />

        <p className="text-[10px] uppercase tracking-[0.45em] text-pink-dusty text-center mb-8 font-sans">
          An invitation to view
        </p>

        <h1 className="font-serif text-4xl md:text-5xl text-center font-medium tracking-wide mb-4">
          {artistName}
        </h1>

        <p className="text-center text-xs uppercase tracking-[0.25em] text-navy/50 mb-12 font-sans">
          {mediumsLabel}
        </p>

        <div className="w-8 h-px bg-pink mx-auto mb-12" />

        <p className="text-center text-sm leading-loose text-navy/70 font-sans mb-16">
          {shortBrief}
        </p>

        <figure className="mb-6">
          <ArtworkImage artwork={featured} size="lg" className="bg-pink-panel/30" />
        </figure>

        <div className="w-full h-px bg-navy/10 my-12" />

        <p className="text-sm leading-loose text-navy/60 font-sans text-center mb-16">
          {aboutStudioSnippet}
        </p>

        <p className="text-[10px] uppercase tracking-widest text-pink-dusty text-center mb-6 font-sans">
          Selected work
        </p>

        <figure className="max-w-[180px] mx-auto mb-16">
          <ArtworkImage artwork={accent} size="md" />
        </figure>

        <div className="w-full h-px bg-pink-dusty/40 mb-12" />

        <InstagramCard style="minimal" className="mb-16" />

        <div className="w-full h-px bg-navy/10 mb-12" />

        <section id="contact" className="text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] mb-4 font-sans">Get in touch</h2>
          <p className="text-sm text-navy/60 font-sans leading-relaxed mb-8">{contactText}</p>
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] text-navy border-b border-pink-dusty pb-1 hover:text-pink-dusty transition-colors"
          >
            Send a message
          </a>
        </section>

        <div className="w-full h-px bg-pink-dusty/60 mt-20" />

        <footer className="mt-12 text-center text-[10px] text-navy/30 uppercase tracking-widest font-sans">
          © {new Date().getFullYear()} {artistName}
        </footer>
      </div>
    </div>
  )
}
