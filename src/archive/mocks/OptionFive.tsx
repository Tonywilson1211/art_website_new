import ArtworkImage from './ArtworkImage'
import InstagramCard from './InstagramCard'
import StoryPreview from './StoryPreview'
import {
  aboutSnippet,
  artistName,
  contactText,
  getArtwork,
  mediumsLabel,
  roseStory,
  shortBrief,
} from '../data/artistContent'

export default function OptionFive() {
  const scrollWorks = [getArtwork('3'), getArtwork('6')]

  return (
    <div className="bg-white text-navy min-h-screen">
      <header className="border-b border-pink-dusty/30">
        <div className="max-w-3xl mx-auto px-6 py-8 md:py-12">
          <p className="font-serif italic text-pink-dusty text-lg mb-2">{mediumsLabel}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium">{artistName}</h1>
          <p className="mt-3 text-sm text-navy/60 font-sans">{shortBrief}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        <section className="mb-14">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-navy/90 mb-8">
            {aboutSnippet}
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 items-end">
            {scrollWorks.map((work) => (
              <ArtworkImage
                key={work.id}
                artwork={work}
                size="natural"
                className={
                  work.orientation === 'landscape'
                    ? 'min-w-[280px] shrink-0'
                    : 'min-w-[180px] w-44 shrink-0'
                }
              />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-2">Latest from the studio</h2>
          <p className="text-sm text-navy/50 font-sans mb-6">
            Latest sketches and studio updates — follow on Instagram for new work.
          </p>
          <InstagramCard style="journal" prominent className="mb-10" />
        </section>

        <section className="mb-14">
          <StoryPreview variant="journal" showQuote />
        </section>

        <section className="mb-14 border-t border-pink-dusty/20 pt-10">
          <h2 className="font-serif text-xl mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-pink-dusty" />
            {roseStory.title}
          </h2>
          <p className="text-sm text-navy/70 leading-relaxed font-sans mb-4">{roseStory.excerpt}</p>
          <a
            href="#story-full"
            className="text-sm text-pink-dusty font-sans"
            onClick={(e) => e.preventDefault()}
          >
            Read the story →
          </a>
          <details id="story-full" className="mt-6 font-sans">
            <summary className="text-xs uppercase tracking-widest text-navy/40 cursor-pointer mb-4">
              Full story
            </summary>
            <div className="space-y-4 text-sm text-navy/75 leading-relaxed">
              {roseStory.body.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </details>
        </section>

        <section className="grid md:grid-cols-2 gap-8 py-10 border-t border-b border-pink-dusty/20">
          <div>
            <h3 className="font-serif text-lg mb-3">About Caroline</h3>
            <p className="text-sm text-navy/70 leading-relaxed font-sans mb-4">{aboutSnippet}</p>
            <a href="#about" className="text-sm text-pink-dusty font-sans">
              Read more →
            </a>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Get in touch</h3>
            <p className="text-sm text-navy/70 leading-relaxed font-sans mb-4">{contactText}</p>
            <a href="#contact" className="text-sm text-navy font-sans underline underline-offset-4">
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 text-center">
        <p className="font-serif italic text-navy/40 text-sm">
          © {new Date().getFullYear()} {artistName} · {mediumsLabel}
        </p>
      </footer>
    </div>
  )
}
