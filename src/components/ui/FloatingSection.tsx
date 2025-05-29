import { useEffect, useId, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, { FloatingElement } from "./parallax-floating";
import { type CardData, stickerGalleryData } from "~/data/gallery";
import { PortalCard } from "./portal-card";
import ScatterText from "./ScatterText";
import { ShoppingCart } from "lucide-react";
import { Button } from "./button";

export const FloatingPreview = () => {
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState<CardData | null>(null);
  const [isClient, setIsClient] = useState(false);
  const id = useId();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!scope.current || !isClient) return;

    const images = scope.current.querySelectorAll("img");
    if (images.length === 0) return;

    animate(
      images,
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, [animate, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative my-32">
      <div
        className="flex w-full min-h-[65rem] md:h-screen justify-center items-center "
        ref={scope}
      >
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
          <ScatterText text="sticker art!" className="z-[99999]" />
          {/* <h1 className="text-5xl md:text-7xl z-50 text-black font-calendas">
            Stickers
          </h1> */}
        </motion.div>

        <Floating
          sensitivity={1}
          easingFactor={0.05}
          className="z-99 pointer-events-none"
        >
          {stickerGalleryData.slice(0, 11).map((card, index) => (
            <FloatingElement
              key={card.title}
              depth={getDepthValue(index)}
              className={
                getPositionClass(index) + ` pointer-events-auto cursor-pointer`
              }
            >
              {/* <div>{index}</div> */}
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                className="relative cursor-pointer"
                onClick={() => setActive(card)}
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{
                  duration: 0.2,
                  layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                }}
                layout
              >
                {card.storeUrl && (
                  <motion.div
                    className="absolute top-2 right-2 z-10"
                    layoutId={`buy-button-${card.title}-${id}`}
                    layout
                    transition={{
                      layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                    }}
                  >
                    <motion.button
                      className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-200 rounded-lg cursor-pointer border border-gray-200/50 hover:border-gray-300/50 overflow-hidden"
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
                <motion.img
                  layoutId={`image-${card.title}-${id}`}
                  initial={{ opacity: 0 }}
                  src={`https://assets.abaly.ch/${card.image}`}
                  alt={card.title}
                  className={getSizeClass(index)}
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1 },
                  }}
                  layout
                  transition={{
                    layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                  }}
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
      return 2.8;
    case 5:
      return 1;
    case 6:
      return 0.4;
    case 7:
      return 0.8;
    case 8:
      return 1.5;
    case 9:
      return 2.4;
    case 10:
      return 1;
    default:
      return 1;
  }
}

function getPositionClass(index: number): string {
  const positions = [
    "top-[7%] left-[5%]",
    "top-[20%] md:top-[0%] left-[27%]",
    "top-[5%] right-[30%]",
    "top-[30%] md:top-[40%] left-[2%]",
    "bottom-[1%] left-[5%]",
    "top-[70%] right-[2%]",
    "bottom-[0%] left-[52%] lg:left-[55%]",
    "top-[25%] lg:top-[24%] right-[14%]",
    "bottom-[0%] left-[30%]",
    "bottom-[30%] right-[2%]",
    "top-[7%] right-[3%]",
  ];
  return positions[index] || "";
}

function getSizeClass(index: number): string {
  const baseClasses = "object-cover cursor-pointer rounded-lg";
  const sizes = [
    "w-28 h-auto md:w-44 lg:w-48 xl:w-52 2xl:w-72",
    "w-28 h-auto md:w-48 lg:w-58 xl:w-68",
    "w-28 h-auto sm:w-32 md:w-50 lg:w-58 xl:w-68 2xl:w-86",
    "w-28 h-auto sm:w-42 md:w-58 lg:w-58 xl:w-62 2xl:w-82",
    "w-28 h-auto sm:w-42 md:w-62 lg:w-78 xl:w-78 2xl:w-82",
    "w-28 h-auto sm:w-42 md:w-58 lg:w-68 xl:w-78 2xl:w-82",
    "w-28 h-auto sm:w-42 md:w-54 lg:w-54 xl:w-64 2xl:w-92",
    "w-28 h-auto sm:w-42 md:w-54 lg:w-64 xl:w-78 2xl:w-82",
    "w-28 h-auto sm:w-42 md:w-52 lg:w-64 2xl:w-92",
    "w-28 h-auto sm:w-42 md:w-54 lg:w-64 2xl:w-72",
    "w-28 h-auto sm:w-42 md:w-42 lg:w-64 2xl:w-68",
  ];
  return `${sizes[index]} ${baseClasses}`;
}
