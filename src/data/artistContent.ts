/** Public asset path — respects Vite `base` for GitHub Pages subpath deploys */
export function publicAsset(path: string): string {
  const key = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${key}`
}

export type Orientation = 'landscape' | 'portrait'

export type Artwork = {
  id: string
  src: string
  orientation: Orientation
  alt: string
}

export const artistName = 'Caroline J Hill'

export const shortBrief =
  "I'm Caroline, a passionate visual artist based in Guildford, England, working primarily in watercolour and ink — also known as line and wash."

export const mediumsLabel = 'Watercolour, Ink & Line Wash'

export const locationLabel = 'Guildford, England'

export const aboutParagraphs = [
  "Welcome! I'm Caroline, a passionate visual artist based in Guildford, England, working primarily in watercolour and ink — also known as line and wash. I love this expressive, spontaneous medium for the way it captures both detail and emotion with simplicity and charm.",
  "Although I've been doodling for as long as I can remember, I began painting seriously in 2017 after retiring — and I haven't looked back since. My art is rooted in everyday life: sketching whenever and wherever I can, though most often from photographs in my cosy home studio. I'm drawn to the small details that often go unnoticed — a cluttered windowsill, the curve of a kettle, wheelie bins, traffic cones, or a tangle of telegraph wires. These humble, sometimes overlooked elements are what give our surroundings personality, and I love weaving them into my work.",
  "I'm continually inspired by artists such as Koosje Koene, Róisín Curé, Liz Steel, Liz Chaderton, and Phil Davies — creatives who celebrate the sketchbook as both an art form and a storytelling tool. Increasingly, I find joy in sketchbook journaling: capturing moments from my day, recording fleeting thoughts, and telling visual stories through drawings. There's something deeply satisfying about making art that's personal, imperfect, and full of life.",
  "My approach is relaxed, observational, and playful. I use a fine ink line to sketch what I see, then bring it to life with expressive watercolour washes. I favour loose, fluid lines and a touch of humour, embracing the quirks and wonkiness that make a sketch feel real. The goal isn't perfection — it's connection, joy, and honesty.",
  "More than anything, I'm passionate about encouraging others to pick up a pen and give drawing a try. I believe creativity is for everyone — not just professional artists — and I do my very best to support and inspire fellow creatives, whether they're just starting out or picking up a sketchbook after years away. If my work makes you smile, think, or feel inspired to draw your own world, then I've done what I set out to do.",
  "Thank you for visiting! You'll often find me sketching on the go, photographing quirky scenes, or experimenting with new materials at my desk. I'd love to connect with fellow artists, sketchers, and curious creatives — so don't be shy, say hello!",
]

/** Snippet for homepage about sections */
export const aboutSnippet =
  "I'm drawn to the small details that often go unnoticed — a cluttered windowsill, the curve of a kettle, wheelie bins, traffic cones, or a tangle of telegraph wires. These humble, sometimes overlooked elements are what give our surroundings personality, and I love weaving them into my work."

/** Shorter intro for studio-style sections */
export const aboutStudioSnippet =
  'My approach is relaxed, observational, and playful. I use a fine ink line to sketch what I see, then bring it to life with expressive watercolour washes — embracing the quirks and wonkiness that make a sketch feel real.'

export const roseStory = {
  title: 'A rose that sparked a lifetime of art',
  excerpt:
    'When I was just four years old, my parents took me on a summer outing from our home in Twickenham to the Kent countryside. Margaret H. O\'Riley welcomed us to her charming old house — and in her studio, with just a few strokes of her pencil, a rose began to bloom on the page.',
  quote:
    "I'm not a professional, but I am an artist in the truest sense—driven by the same passion I first felt watching Margaret draw that rose.",
  body: [
    "When I was just four years old, my parents took me on a summer outing from our home in Twickenham, a suburb of London, to the Kent countryside. It was a beautiful, sunlit day—one of those golden memories that stays with you forever. My father drove us—my mother, my brother, and me—to visit a woman he knew: a botanical illustrator named Margaret H. O'Riley.",
    "We arrived at her charming, old house in Appledore, Kent. I remember the sense of calm, the way the light poured into her dining room where she had laid out tea for us. Strawberries, jelly, sandwiches—it was all so beautifully arranged, and to my young eyes, almost magical.",
    "What happened next was the moment that changed everything for me. Margaret took us to her studio, a place that felt full of wonder. I asked her to draw something. She smiled, picked up her pencil, and with just a few strokes, a rose began to bloom on the page. I watched in awe as the flower appeared before my eyes, as if by magic. That moment stayed with me. It was then that I resolved to be an artist.",
    "Years passed, and after my father passed away, I could no longer ask him the name of the woman who had made such a lasting impression on me. But recently, after some searching and with a little help, I rediscovered her name: Margaret H. O'Riley.",
    "Margaret was a talented illustrator best known for her botanical work, particularly books on flowers published by Hamlyn in the 1950s. Her illustrations were celebrated for their scientific accuracy and artistic beauty. She lived in Appledore, Kent, where she continued her work surrounded by the natural beauty that surely inspired her. Life wasn't always easy for her—my father once mentioned that she had to be the breadwinner in the family due to her husband's struggles with alcoholism. There's little publicly known about whether she had children, but her strength and dedication to her art remain deeply admirable.",
    "Now that I'm retired, I sketch and paint every day. My sketchbook goes everywhere with me. I'm not a professional, but I am an artist in the truest sense—driven by the same passion I first felt watching Margaret draw that rose. Rediscovering her name has filled a gap in my journey, and for that, I am truly grateful.",
    'Thank you, Margaret. Your quiet gift planted the seed that grew into a lifelong love of art.',
  ],
}

export const contactText =
  "Whether you have a question about my work, are interested in a commission, or just want to say hello, please feel free to reach out using the form below. I'd love to hear from you."

export const instagramUrl =
  'https://www.instagram.com/carolinehill3482?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

export const instagramHandle = '@carolinehill3482'

export const instagramPreviewCaption =
  'Latest sketches and studio updates from Guildford — follow along for new work, sketchbook pages, and everyday scenes.'

export const artistImage = {
  src: publicAsset('images/artist1.jpg'),
  alt: 'Caroline J Hill, visual artist',
}

export const artworks: Artwork[] = [
  { id: '1', src: publicAsset('images/1.JPEG'), orientation: 'landscape', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '2', src: publicAsset('images/2.JPEG'), orientation: 'portrait', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '3', src: publicAsset('images/3.JPEG'), orientation: 'landscape', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '4', src: publicAsset('images/4.JPEG'), orientation: 'landscape', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '5', src: publicAsset('images/5.JPEG'), orientation: 'landscape', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '6', src: publicAsset('images/6.JPEG'), orientation: 'portrait', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '7', src: publicAsset('images/7.JPEG'), orientation: 'portrait', alt: 'Watercolour and ink study by Caroline J Hill' },
  { id: '8', src: publicAsset('images/8.JPEG'), orientation: 'landscape', alt: 'Watercolour and ink study by Caroline J Hill' },
]

/** Used as Instagram card preview image (not live API content) */
export const instagramPreviewArtwork = artworks.find((a) => a.id === '6')!

export const landscapeArtworks = artworks.filter((a) => a.orientation === 'landscape')
export const portraitArtworks = artworks.filter((a) => a.orientation === 'portrait')

export function getArtwork(id: string): Artwork {
  const work = artworks.find((a) => a.id === id)
  if (!work) throw new Error(`Artwork ${id} not found`)
  return work
}
