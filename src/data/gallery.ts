import { type ReactNode } from "react";

export interface CardData {
  image: string;
  title: string;
  description: string;
  darkText?: boolean;
}

export const photographyData: CardData[] = [
  {
    image: "cat-1.jpg",
    title: "Cat 1",
    description: "A curious feline lounges on the edge of a sunlit window, its eyes half-closed in meditative stillness. The air is thick with the warmth of midday, and the only sound is the subtle flick of its tail.\n\nThis cat seems to embody the calm of a world that spins too fast. Its fur catches the golden glow of afternoon light, hinting at the serenity often overlooked in domestic moments."
  },
  {
    image: "cat-2.jpg",
    title: "Cat 2",
    description: "Nestled between crumpled blankets, this cat seems to have claimed a throne of fabric. Its whiskers twitch at a dream, paws curled like question marks in sleep.\n\nOutside the frame, the world hums. But in here, the only rhythm is the cat’s breathing—a gentle tempo that soothes the space like a lullaby.",
  },
  {
    image: "cow.jpg",
    title: "Cow",
    description: "This tranquil bovine gazes softly across a field brushed with golden grass, the horizon glowing with late afternoon sun. Its stillness mirrors the landscape’s hush.\n\nCows are often symbols of patience and pastoral grace. Here, in the silence of farmland, the animal becomes part of a wider rhythm, ancient and undisturbed."
  },
  {
    image: "devochka.jpg",
    title: "Girl",
    description: "The portrait captures more than just a face—it holds a fleeting thought, a distant memory behind the eyes. Light pools around her features like a soft tide.\n\nShe does not smile, but she does not need to. The photograph speaks through the quiet strength of her gaze, and in that stillness, there’s an entire world unfolding."
  },
  {
    image: "lake.jpg",
    title: "Lake",
    description: "Mist curls above the water, barely touching the mirrored surface that holds the reflection of distant pines. Time feels slow here, as if held gently in the palm of the earth.\n\nEvery ripple tells a story of wind, of birds diving, of unseen fish below. The lake is not just scenery—it's a breathing canvas, alive with memory."
  },
  {
    image: "moss.jpg",
    title: "Moss",
    description: "Velvet-green moss clings to ancient bark, softening the jagged edge of time. It spreads like a whispered secret over roots and rocks, a quiet defiance in the shade.\n\nThere’s resilience in this softness. Each patch holds dew, shadows, and the legacy of forests that stood long before our footsteps arrived."
  },
  {
    image: "night-railway.jpg",
    title: "Night Railway",
    description: "Steel rails glint beneath the glow of distant lamps. The hum of electricity and the scent of oil hang in the air, waiting for a train that may never arrive.\n\nThe railway at night is both lonely and alive. It carries echoes of departures, promises of reunions, and the ghosts of stories etched in gravel and light."
  },
  {
    image: "sea-house.jpg",
    title: "Sea House",
    description: "A solitary house leans into the salty wind, shutters flung open to the endless sea. Waves crash not far from its steps, whispering lullabies of freedom.\n\nInside, the scent of driftwood and old maps might linger. The sea is not just a view—it’s a voice, always calling someone home."
  },
  {
    image: "shoes.jpg",
    title: "Shoes",
    description: "Time-worn leather and scuffed soles speak of journeys taken, paths crossed, cities explored. These shoes have danced through puddles and paused at doorways.\n\nThey are relics of movement, memory, and identity. Even at rest, they seem ready to step back into the story."
  },
  {
    image: "shrooms.jpg",
    title: "Mushrooms",
    description: "Nestled under damp leaves, these forest mushrooms emerge like quiet miracles. Their caps glisten with dew, each one unique in hue and shape.\n\nBeneath them, an entire world of mycelium whispers through the earth. What we see is just the surface of a vast, unseen intelligence."
  },
];

export const experimentData: CardData[] = [
  {
    image: "birch.jpg",
    title: "Birch",
    description: "The white bark of the birch tree peels like parchment, a script written by seasons. Its slender form bends with the wind, never breaking.\n\nBirches are poems in the forest—quiet, luminous, always listening. Their presence brings clarity, like winter light after snowfall."
  },
  {
    image: "devochka.jpg",
    title: "Sticker",
    description: "A tender moment frozen in time—two hands meet, perhaps in comfort, perhaps in farewell. The simplicity of touch conveys more than words.\n\nIn this frame, humanity finds its gentlest expression. The sticker is not decoration; it’s an echo of warmth, small but enduring."
  },
  {
    image: "uteshali.jpg",
    title: "Prikol",
    description: "A subtle smile breaks on the face caught mid-expression, half amusement, half disbelief. It’s a candid glimpse into the dance of social emotion.\n\nHumor lives in the spaces between the serious. This image, playful and raw, captures a truth only real moments can tell."
  },
  {
    image: "vesna.jpg",
    title: "Spring",
    description: "The earth breathes in color as spring arrives—blossoms stretch skyward, and rivers run faster with melted dreams. Life renews itself in every corner.\n\nEach petal, each breeze, seems charged with purpose. Spring is not just a season—it’s a return to hope, fragrant and full of light.",
    darkText: true
  },
];
// export default [
//   {
//     id: 1,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "birch.jpg",
//   },
//   {
//     id: 2,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "cat-1.jpg",
//   },
//   {
//     id: 3,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "cat-2.jpg",
//   },
//   {
//     id: 4,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "cow.jpg",
//   },
//   {
//     id: 5,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "devochka.jpg",
//   },
//   {
//     id: 6,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "lake.jpg",
//   },
//   {
//     id: 7,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "moss.jpg",
//   },
//   {
//     id: 8,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "night-railway.jpg",
//   },
//   {
//     id: 9,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "sea-house.jpg",
//   },
//   {
//     id: 10,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "shoes.jpg",
//   },
//   {
//     id: 11,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "shrooms.jpg",
//   },
//   {
//     id: 12,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "uteshali.jpg",
//   },
//   {
//     id: 13,
//     content: <div className="text-white text-2xl">Card 1</div>,
//     className: "aspect-1/1",
//     thumbnail: "vesna.jpg",
//   },
// ];
