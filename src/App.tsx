import { useState } from 'react'
import OptionSelector from './components/OptionSelector'
import OptionOne from './components/OptionOne'
import OptionTwo from './components/OptionTwo'
import OptionThree from './components/OptionThree'
import OptionFour from './components/OptionFour'
import OptionFive from './components/OptionFive'
import OptionSix from './components/OptionSix'
import OptionSeven from './components/OptionSeven'
import OptionEight from './components/OptionEight'
import OptionNine from './components/OptionNine'
import OptionTen from './components/OptionTen'

const OPTIONS = [
  { id: 1, label: 'Option 1', subtitle: 'Editorial Classic' },
  { id: 2, label: 'Option 2', subtitle: 'Soft Studio' },
  { id: 3, label: 'Option 3', subtitle: 'Navy Gallery Frame' },
  { id: 4, label: 'Option 4', subtitle: 'Modern Minimal' },
  { id: 5, label: 'Option 5', subtitle: "Painter's Journal" },
  { id: 6, label: 'Option 6', subtitle: "Collector's Salon" },
  { id: 7, label: 'Option 7', subtitle: 'Sketchbook Studio' },
  { id: 8, label: 'Option 8', subtitle: 'Editorial Exhibition' },
  { id: 9, label: 'Option 9', subtitle: 'Minimal Gallery Card' },
  { id: 10, label: 'Option 10', subtitle: 'Contemporary Classic' },
] as const

const VIEWS = [
  OptionOne,
  OptionTwo,
  OptionThree,
  OptionFour,
  OptionFive,
  OptionSix,
  OptionSeven,
  OptionEight,
  OptionNine,
  OptionTen,
] as const

export default function App() {
  const [active, setActive] = useState(1)
  const ActiveView = VIEWS[active - 1]

  return (
    <div className="min-h-screen">
      <OptionSelector options={OPTIONS} active={active} onSelect={setActive} />
      <ActiveView />
    </div>
  )
}
