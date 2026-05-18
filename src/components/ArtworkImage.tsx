import type { Artwork } from '../data/artistContent'

type Size = 'sm' | 'md' | 'lg' | 'full' | 'natural'

type Props = {
  artwork: Artwork
  className?: string
  framed?: boolean
  size?: Size
}

const maxHeight: Record<Size, string> = {
  sm: 'max-h-44',
  md: 'max-h-72',
  lg: 'max-h-[28rem]',
  full: 'max-h-[36rem]',
  natural: 'max-h-none',
}

export default function ArtworkImage({
  artwork,
  className = '',
  framed = true,
  size = 'md',
}: Props) {
  return (
    <div
      className={`flex items-center justify-center ${
        framed ? 'bg-pink-panel/50 p-3 md:p-4' : ''
      } ${className}`}
    >
      <img
        src={artwork.src}
        alt={artwork.alt}
        loading="lazy"
        className={`w-auto h-auto max-w-full object-contain ${maxHeight[size]}`}
      />
    </div>
  )
}
