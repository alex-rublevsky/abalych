import { useId, useState } from "react";
import { motion } from "motion/react";
import { type CardData } from "../data/gallery";
import { PortalCard } from "./Modal";
import ScatterText from "./ScatterText";
import { ShoppingCart } from "lucide-react";

interface GalleryProps {
  data: CardData[];
  title?: string;
}

export function Gallery({ data, title = "Visual Experiments" }: GalleryProps) {
  const [active, setActive] = useState<CardData | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const id = useId();

  return (
    <>
      <section className="no-padding-bottom">
        <ScatterText
          text={title}
          className="pt-32 pb-20 text-center"
          //extraLarge={true}
        />
        <ul className="mx-auto w-full columns-2 lg:columns-3 2xl:columns-4 items-start gap-4">
          {data.map((card, index) => (
            <motion.div
              key={card.title}
              onClick={() => setActive(card)}
              className={`mb-4 flex flex-col cursor-pointer break-inside-avoid intersect-once intersect:motion-preset-blur-up-lg motion-duration-1000 motion-delay-${index * 100}`}
              onMouseEnter={() => setHoveredCard(card.title)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                className="relative rounded-[1.3rem] overflow-hidden"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  alt={card.title}
                  src={`https://assets.abaly.ch/${Array.isArray(card.image) ? card.image[0] : card.image}`}
                  className={`h-auto w-full object-cover object-top transition-transform duration-300 
                    ${
                    hoveredCard === card.title ? "scale-100" : "scale-100"
                  }`}
                  
                />
                {Array.isArray(card.image) && card.image.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                    +{card.image.length - 1}
                  </div>
                )}
                {card.storeUrl && (
                  <motion.div
                    layoutId={`buy-button-${card.title}-${id}`}
                    className="absolute top-2 left-2"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.button
                      className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-200 rounded-lg cursor-pointer border border-gray-200/50 hover:border-gray-300/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(card.storeUrl, "_blank");
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.div layoutId={`buy-icon-${card.title}-${id}`}>
                        <ShoppingCart className="h-4 w-4 text-gray-700" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                )}
                {card.title && card.showTitle && (
                  <div
                    className={`absolute inset-x-0 bottom-0 p-2 md:p-2 ${
                      card.darkText ? "text-black" : "text-white"
                    }`}
                  >
                    <h5
                      className="pt-2 pb-2 px-4 backdrop-blur-sm w-fit rounded-[0.8rem] overflow-hidden text-base"
                    >
                      {card.title}
                    </h5>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </ul>
      </section>

      <PortalCard active={active} onClose={() => setActive(null)} id={id} />
    </>
  );
}
