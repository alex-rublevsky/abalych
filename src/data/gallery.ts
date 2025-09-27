const storeUrlPrefix = "https://www.rublevsky.studio/store/";

export interface CardData {
  image: string | string[]
  blurHash: string
  title: string
  description?: string
  darkText?: boolean
  showTitle?: boolean
  storeUrl?: string
  ratio: string
}

export const mainGalleryData: CardData[] = [
  {
    image: "cat-1.webp",
    title: "Myata",
    showTitle: true,
    blurHash: "L2EVyrIR02I8004;00O^MuxU={pe",
    ratio: "720/480"
    
  },
  {
    image: "chickens.webp",
    title: "Friends",
    showTitle: true,
    blurHash: "LCEf7+E2IUxu?w-p%MRPxY%M-;RP",
    ratio: "1919/1279"
  },
  {
    image: "flower.webp",
    title: "Flower",
    showTitle: false,
    blurHash: "L9C@$jrf00DkD}MztQxI00kD_LV@",
    ratio: "1256/1256"
  },
  {
    image: "leafs.webp",
    title: "Leafs",
    showTitle: false,
    blurHash: "L39vAb4WMnNKHkTX.3%u^P8$.ORU",
    ratio: "1280/1920"
  },
  {
    image: "cat-2.webp",
    title: "Puzyrik",
    showTitle: true,
    blurHash: "LdIOa=xZ-:oK.AWVRkfRtSRjRQWC",
    ratio: "1280/1920"
  },
  {
    image: "cow.webp",
    title: "Buddy",
    showTitle: true,
    blurHash: "L_Ma9Tj[WBof?wj]jsazRioLa}f6",
    ratio: "1848/1232"
  },
  {
    image: "lake.webp",
    title: "Otonabee River",
    showTitle: true,
    blurHash: "LbE|b;aeWVof_4a|j[j[%Nofj[ay",
    ratio:"1280/1920"
  },
  {
    image: "moss.webp",
    title: "Moss",
    showTitle: false,
    blurHash: "L5Fq{a~Q0oxV^hV?ogI:II-i-l?E",
    ratio:"1280/1920"
  },

  {
    image: "sea-house.webp",
    title: "Volga",
    showTitle: true,
    blurHash: "L*H.slWCj]ja.Aaej[f6RkayWBj[",
    ratio:"1280/1920"
  },
  {
    image: "shoes.webp",
    title: "Hood",
    showTitle: true,
    blurHash: "L8Bh+]4TRot:IBo0ozx]yEo#V@s*",
    ratio:"1829/1219"
  },
  {
    image: "shrooms.webp",
    title: "Mushrooms",
    showTitle: false,
    blurHash: "L5G=Mr}u1VT50Jv=6r1q1Vo7;R,:",
    ratio:"1333/2000"
  },
  {
    image: "uteshali.webp",
    title: "Heart",
    showTitle: false,
    blurHash: "LgNB0-Wo9bXT.mxv-nt6I.j[MyWA",
    ratio:"1169/1739"
  },
  {
    image: "vesna.webp",
    title: "Spring",
    showTitle: true,
    darkText: true,
    blurHash: "LKO;C~?c019H~D4:O8ad?a-;?bsC",
    ratio:"1510/2230"

  },
  {
    image: "les.webp",
    title: "Les",
    showTitle: false,
    blurHash: "LNC%4:WGD*t4~qxaM{WC?ct7M{WW",
    ratio:"1200/1800"
  },
  {
    image: ["fungus-abstraction.webp","fungus-abstraction-photo.webp", "delusional-fungus.webp"],
    title: "Fungus Abstraction",
    showTitle: false,
    blurHash: "L8AUmO02?]x?t*$$IANL8x~o4nnn",
    ratio:"1462/1950"
  },
  {
    image: ["u-have-to-be-delusional.webp", "u-have-to-be-delusional-photo.webp", "delusional-fungus.webp"],
    title: "Pinecone Abstraction",
    showTitle: false,
    blurHash: "L$O1H~S[%3S^jFnmf$W:=*o3WTWW",
    ratio:"2010/1500"
  },
]

export const stickerGalleryData: CardData[] = [
  {
    image: "birch.jpg",
    title: "Birch",
    showTitle: false,
    storeUrl: storeUrlPrefix + "birch-sticker",
    blurHash: "LSIg[uD%d@t3}FxuV@n$q_R%cBr^",
    ratio:"1071/1500"
  },
  {
    image: "devochka.jpg",
    title: "Sticker",
    showTitle: false,
    storeUrl:  storeUrlPrefix + "mushroom-girl-sticker",
    blurHash: "LBFi0=9G02j;~W%M%g%200xu^*xv",
    ratio:"1286/1800"
  },
  {
    image: "butterfly.webp",
    title: "Butterfly",
    showTitle: false,
    blurHash:"LOCQSxMtIxDjKB$bNxWXIKRk%Ex[",
    ratio:"1800/1800"
  },
  {
    image: "brain-sticker.webp",
    title: "brain-sticker",
    showTitle: false,
    storeUrl: storeUrlPrefix + "shroom-brain-sticker",
    blurHash:"L5HLMM^+00I.yZ-:9K8x3TSzHYDj",
    ratio:"1800/1801"
  },
  {
    image: "shroom-sticker.jpg",
    title: "shroom-sticker",
    showTitle: false,
    blurHash:"L7Knb#00004T9H?b~q-XKm_3I7S$",
    ratio:"1500/1500"
  },
  {
    image: "leaf-sticker.webp",
    title: "leaf-sticker",
    showTitle: false,
    darkText: true,
    blurHash:"LEK-k8]*{oohC6TdJ-xG:[$*AmNZ",
    ratio: "1800/1800"

  },
  {
    image: "triple-person-swirl-sticker.webp",
    title: "triple-person-swirl-sticker",
    showTitle: false,
    darkText: true,
    blurHash:"LYJ+1C~qSK%h9ZS2ogjb%MaxRkaf",
    ratio:"1800/1800"
  },
  {
    image: "hiphop-sticker.webp",
    title: "hiphop-sticker",
    showTitle: false,
    blurHash:"LEEM%WE3U$Io_N%g4mV[;W-;5Mt7",
    ratio:"1867/1868"
  },
   {
    image: "vision.webp",
    title: "vision",
    showTitle: false,
    blurHash:"LJF5p%Xn00rVo~jEVsXA00ae~CkV",
    ratio: "1280/1589"
  },
  {
    image: "river-sticker.webp",
    title: "river",
    showTitle: false,
    blurHash:"L8JHwA00Hq~B8w?cIU8_vy?cR*Mw",
    ratio:"1019/1053"
  },
  {
    image: "graffiti-bark-abalych-1.jpg",
    title: "graffiti-bark-abalych-1",
    showTitle: false,
    blurHash:"LDJQK90d%%boBe$ytRXmEVxv#Q9u",
    ratio:"1448/1448"
  }
]
