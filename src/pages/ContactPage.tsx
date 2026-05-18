import { useState } from 'react'
import type { FormEvent } from 'react'
import InstagramCard from '../components/InstagramCard'
import { contactText, instagramUrl } from '../data/artistContent'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-widest text-pink-dusty mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-6">
            Get in touch
          </h1>
          <p className="text-navy/75 leading-relaxed font-sans mb-8">{contactText}</p>
          <p className="text-sm text-navy/60 font-sans leading-relaxed">
            I&apos;d love to connect with fellow artists, sketchers, and curious creatives — so
            don&apos;t be shy, say hello!
          </p>
        </div>

        <div className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-md">
          {submitted ? (
            <div className="text-center py-8">
              <p className="font-serif text-2xl text-navy mb-3">Thank you</p>
              <p className="text-sm text-navy/70 font-sans">
                Your message has been noted. For now this is a preview form — please also reach out
                on{' '}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-dusty border-b border-pink-dusty"
                >
                  Instagram
                </a>{' '}
                if you&apos;d like a quicker reply.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-navy/50 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-dusty/40 bg-pink-panel/20 text-navy focus:outline-none focus:border-pink-dusty"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-navy/50 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-dusty/40 bg-pink-panel/20 text-navy focus:outline-none focus:border-pink-dusty"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-navy/50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-pink-dusty/40 bg-pink-panel/20 text-navy focus:outline-none focus:border-pink-dusty resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-light transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>

      <section className="mt-16 max-w-md mx-auto">
        <InstagramCard style="studio" prominent />
      </section>
    </div>
  )
}
