const storeUrlPrefix = "https://www.rublevsky.studio/store/";

export interface CardData {
  image: string
  title: string
  description?: string
  darkText?: boolean
  showTitle?: boolean
  storeUrl?: string
}

export const mainGalleryData: CardData[] = [
  {
    image: "cat-1.webp",
    title: "Myata",
     showTitle: true
    
  },
  {
    image: "chickens.webp",
    title: "Friends",
     showTitle: true
  },
  {
    image: "flower.webp",
    title: "Flower",
    showTitle: false
  },
  {
    image: "leafs.webp",
    title: "Leafs",
     showTitle: false
  },
  {
    image: "cat-2.webp",
    title: "Puzyrik",
     showTitle: true
  },
  {
    image: "cow.webp",
    title: "Buddy",
     showTitle: true
  },
  {
    image: "lake.webp",
    title: "Otonabee River",
     showTitle: true
  },
  {
    image: "moss.webp",
    title: "Moss",
    showTitle: false
  },

  {
    image: "sea-house.webp",
    title: "Volga",
     showTitle: true
  },
  {
    image: "shoes.webp",
    title: "Hood",
     showTitle: true
    
  },
  {
    image: "shrooms.webp",
    title: "Mushrooms",
     showTitle: false
  },
  {
    image: "uteshali.webp",
    title: "Heart",
    showTitle: false
  },
  {
    image: "vesna.webp",
    title: "Spring",
     showTitle: true,
    darkText: true

  },
  {
    image: "les.webp",
    title: "Les",
     showTitle: false,
   

  }
]

export const stickerGalleryData: CardData[] = [
  {
    image: "birch.jpg",
    title: "Birch",
    showTitle: false,
    storeUrl: storeUrlPrefix + "birch-sticker"
  },
  {
    image: "devochka.jpg",
    title: "Sticker",
    showTitle: false,
    storeUrl:  storeUrlPrefix + "mushroom-girl-sticker"
  },
  {
    image: "butterfly.webp",
    title: "Butterfly",
    showTitle: false
  },
  {
    image: "brain-sticker.webp",
    title: "brain-sticker",
    showTitle: false,
    storeUrl: storeUrlPrefix + "shroom-brain-sticker"
  },
  {
    image: "shroom-sticker.jpg",
    title: "shroom-sticker",
    showTitle: false
 
  },
  {
    image: "leaf-sticker.webp",
    title: "leaf-sticker",
    showTitle: false,
    darkText: true
  },
  {
    image: "triple-person-swirl-sticker.webp",
    title: "triple-person-swirl-sticker",
    showTitle: false,
    darkText: true
  },
  {
    image: "hiphop-sticker.webp",
    title: "hiphop-sticker",
    showTitle: false
  },
   {
    image: "vision.webp",
    title: "vision",
    showTitle: false
  },
  {
    image: "river-sticker.webp",
    title: "river",
    showTitle: false
  },
  {
    image: "graffiti-bark-abalych-1.jpg",
    title: "graffiti-bark-abalych-1",
    showTitle: false
  }
 

]
