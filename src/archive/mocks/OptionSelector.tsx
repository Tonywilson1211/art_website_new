type Option = {
  id: number
  label: string
  subtitle: string
}

type Props = {
  options: readonly Option[]
  active: number
  onSelect: (id: number) => void
}

export default function OptionSelector({ options, active, onSelect }: Props) {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-sm"
      aria-label="Design option selector"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.25em] text-navy/40 mb-2 font-sans text-center md:text-left">
          Caroline J Hill — Homepage mockups
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start gap-2">
          {options.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => onSelect(opt.id)}
                className={`px-4 py-2 text-left rounded transition-all font-sans ${
                  active === opt.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-pink-panel/50 text-navy hover:bg-pink-light/60'
                }`}
              >
                <span className="block text-sm font-medium">{opt.label}</span>
                <span
                  className={`block text-[10px] ${
                    active === opt.id ? 'text-white/70' : 'text-navy/50'
                  }`}
                >
                  {opt.subtitle}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
