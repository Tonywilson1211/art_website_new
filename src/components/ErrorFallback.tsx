import { Link } from 'react-router-dom'
import { artistName } from '../data/artistContent'

type Props = {
  message?: string
}

export default function ErrorFallback({
  message = 'Something went wrong loading this page.',
}: Props) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-16 text-center font-sans">
      <p className="font-serif text-2xl text-navy mb-4">{artistName}</p>
      <p className="text-navy/70 text-sm max-w-md mb-8">{message}</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-pink/40 text-navy text-sm font-medium hover:bg-pink/60 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
