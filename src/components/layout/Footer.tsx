import { Link } from 'react-router-dom'
import { artistName, instagramUrl, shortBrief } from '../../data/artistContent'

const FOOTER_NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-pink-dusty/30 bg-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="font-serif text-xl text-navy mb-3">{artistName}</p>
            <p className="text-sm text-navy/60 leading-relaxed max-w-md">{shortBrief}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-pink-dusty mb-4">Explore</p>
            <ul className="space-y-2">
              {FOOTER_NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-navy/70 hover:text-pink-dusty transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-pink-dusty/20 text-xs text-navy/40">
          <p>© {new Date().getFullYear()} {artistName}</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-dusty transition-colors"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </footer>
  )
}
