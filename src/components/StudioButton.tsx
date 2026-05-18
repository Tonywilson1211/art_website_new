import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'navy'
  className?: string
}

const variants = {
  primary:
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink/40 text-navy text-sm font-medium hover:bg-pink/60 transition-colors',
  secondary:
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-navy text-sm font-medium shadow-md shadow-pink/10 hover:shadow-lg transition-shadow',
  navy: 'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-pink text-navy text-sm font-medium hover:bg-pink-light transition-colors',
}

export default function StudioButton({
  to,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  return (
    <Link to={to} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
