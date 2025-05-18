import { type ReactNode } from "react"

export interface CardData {
  image: string
  title: string
  description?: string
  darkText?: boolean
  showTitle?: boolean
}

export const mainGalleryData: CardData[] = [
  {
    image: "cat-1.jpg",
    title: "Myata",
     showTitle: true
    
  },
  {
    image: "chickens.jpg",
    title: "Chickens",
     showTitle: true
  },
  {
    image: "flower.jpg",
    title: "Flower",
    showTitle: false
  },
  {
    image: "leafs.jpg",
    title: "Leafs",
     showTitle: true
  },
  {
    image: "cat-2.jpg",
    title: "Puzyrik",
     showTitle: true
  },
  {
    image: "cow.jpg",
    title: "Buddy",
     showTitle: true
  },
  {
    image: "lake.jpg",
    title: "Otonabee River",
     showTitle: true
  },
  {
    image: "moss.jpg",
    title: "Moss",
    showTitle: false
  },

  {
    image: "sea-house.jpg",
    title: "Volga",
     showTitle: true
  },
  {
    image: "shoes.jpg",
    title: "Hood",
     showTitle: true
    
  },
  {
    image: "shrooms.jpg",
    title: "Mushrooms",
     showTitle: false
  },
  {
    image: "uteshali.jpg",
    title: "Prikol",
     showTitle: true
  },
  {
    image: "vesna.jpg",
    title: "Spring",
     showTitle: true,
    darkText: true

  }
]

export const stickerGalleryData: CardData[] = [
  {
    image: "birch.jpg",
    title: "Birch",
    showTitle: false
  },
  {
    image: "devochka.jpg",
    title: "Sticker",
    showTitle: false
  },
  {
    image: "butterfly.jpg",
    title: "Butterfly",
    showTitle: false
  },
  {
    image: "brain-sticker.jpg",
    title: "brain-sticker",
    showTitle: false
  },
  {
    image: "shroom-sticker.jpg",
    title: "shroom-sticker",
    showTitle: false
 
  },
  {
    image: "leaf-sticker.jpg",
    title: "leaf-sticker",
    showTitle: false,
    darkText: true
  },
  {
    image: "triple-person-swirl-sticker.jpg",
    title: "triple-person-swirl-sticker",
    showTitle: false,
    darkText: true
  },
  {
    image: "hiphop-sticker.jpg",
    title: "hiphop-sticker",
    showTitle: false
  }
]
