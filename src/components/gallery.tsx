import { useId, useState } from "react";
import { motion } from "motion/react";
import { type CardData } from "../data/gallery";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { PortalCard } from "./ui/portal-card";
import ScatterText from "./ui/ScatterText";
import { Link } from "@tanstack/react-router";

interface GalleryProps {
  data: CardData[];
  title?: string;
}

export function Gallery({ data, title = "Visual Experiments" }: GalleryProps) {
  const [active, setActive] = useState<CardData | null>(null);
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
          {data.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="mb-4 flex flex-col  cursor-pointer break-inside-avoid"
            >
              <div className="relative rounded-[1.3rem] overflow-hidden">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    alt={card.title}
                    src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${card.image}`}
                    className={`h-auto w-full object-cover object-top [view-transition-name:card-image-${card.image}]`}
                  />
                </motion.div>
                <div className="h-[3rem] md:h-[5rem] absolute bottom-0 left-0 w-full" />
                {card.title && card.showTitle && (
                  <div
                    className={`absolute inset-x-0 bottom-0 p-2 md:p-2 ${
                      card.darkText ? "text-black" : "text-white"
                    }`}
                  >
                    <motion.h5
                      layoutId={`title-${card.title}-${id}`}
                      className="pt-2 pb-2 px-4 backdrop-blur-sm w-fit rounded-[0.8rem] overflow-hidden text-base [view-transition-name:card-title]"
                    >
                      {card.title}
                    </motion.h5>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </ul>
      </section>

      <PortalCard active={active} onClose={() => setActive(null)} id={id} />
    </>
  );
}
