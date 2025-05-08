"use client";

import { useEffect, useId, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, { FloatingElement } from "./parallax-floating";
import { type CardData, stickerGalleryData } from "~/data/gallery";
import { PortalCard } from "./portal-card";
import ScatterText from "./ScatterText";

export const FloatingPreview = () => {
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState<CardData | null>(null);
  const id = useId();

  useEffect(() => {
    if (!scope.current) return;

    const images = scope.current.querySelectorAll("img");
    if (images.length === 0) return;

    animate(
      images,
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, [animate]);

  return (
    <div className="relative my-32">
      <div
        className="flex w-full min-h-[800px] md:h-screen justify-center items-center bg-background"
        ref={scope}
      >
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
          <ScatterText text="Stickers!" />
          {/* <h1 className="text-5xl md:text-7xl z-50 text-black font-calendas">
            Stickers
          </h1> */}
        </motion.div>

        <Floating
          sensitivity={1}
          easingFactor={0.05}
          className="z-99 pointer-events-none"
        >
          {stickerGalleryData.slice(0, 8).map((card, index) => (
            <FloatingElement
              key={card.title}
              depth={getDepthValue(index)}
              className={getPositionClass(index) + ` pointer-events-auto`}
              layoutId={`card-${card.title}-${id}`}
            >
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="relative"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${card.image}`}
                  alt={card.title}
                  className={getSizeClass(index)}
                  onClick={() => setActive(card)}
                />
                {active?.title === card.title && active.description && (
                  <motion.div
                    layoutId={`title-${card.title}-${id}`}
                    className="absolute inset-x-0 bottom-0 p-4 text-white"
                  >
                    <h5>{card.title}</h5>
                  </motion.div>
                )}
              </motion.div>
            </FloatingElement>
          ))}
        </Floating>
      </div>

      <PortalCard active={active} onClose={() => setActive(null)} id={id} />
    </div>
  );
};

function getDepthValue(index: number): number {
  // Create different depth layers
  switch (index) {
    case 0:
      return 1.9;
    case 2:
      return 0.5;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
      return 1;
    case 6:
      return 3;
    case 7:
      return 0.8;
    default:
      return 1;
  }
}

function getPositionClass(index: number): string {
  const positions = [
    "top-[0%] left-[11%]",
    "top-[20%] md:top-[10%] left-[32%]",
    "top-[2%] left-[53%]",
    "top-[30%] md:top-[40%] left-[2%]",
    "bottom-[5%] left-[20%]",
    "top-[70%] right-[2%]",
    "bottom-[0%] left-[60%]",
    "top-[20%] right-[10%]",
  ];
  return positions[index] || "";
}

function getSizeClass(index: number): string {
  const baseClasses =
    "object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg";
  const sizes = [
    "w-28 h-auto md:w-38 lg:w-48 xl:w-52",
    "w-28 h-auto md:w-38 lg:w-48 xl:w-56",
    "w-28 h-auto sm:w-32 md:w-38 lg:w-48 xl:w-64",
    "w-28 h-auto sm:w-42 md:w-38 lg:w-48 xl:w-52",
    "w-28 h-auto sm:w-42 md:w-38 lg:w-48 xl:w-58",
    "w-28 h-auto sm:w-42 md:w-38 lg:w-48 xl:w-64",
    "w-28 h-auto sm:w-42 md:w-38 lg:w-48 xl:w-64",
    "w-28 h-auto sm:w-42 md:w-38 lg:w-64",
  ];
  return `${sizes[index]} ${baseClasses}`;
}
