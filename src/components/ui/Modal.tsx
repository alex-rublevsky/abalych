import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";
import { type CardData } from "~/data/gallery";
import { useOutsideClick } from "~/hooks/use-outside-click";
import Lenis from "lenis";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

interface PortalCardProps {
  active: CardData | null;
  onClose: () => void;
  id: string;
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7 text-black z-999999"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export const PortalCard: React.FC<PortalCardProps> = ({
  active,
  onClose,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null!) as React.RefObject<HTMLDivElement>;
  const lenisRef = useRef<Lenis | null>(null);
  const [isClient, setIsClient] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = active
    ? Array.isArray(active.image)
      ? active.image
      : [active.image]
    : [];
  const hasMultipleImages = images.length > 1;

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const targetImage = carouselRef.current.children[0].children[
        index
      ] as HTMLElement;
      if (targetImage) {
        targetImage.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    scrollToImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    scrollToImage(newIndex);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [active]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    lenisRef.current = (window as any).lenis;

    if (active && lenisRef.current) {
      lenisRef.current.stop();
    } else if (lenisRef.current) {
      lenisRef.current.start();
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };
  }, [active, isClient]);

  useOutsideClick(ref, onClose);

  useEffect(() => {
    if (!isClient) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && hasMultipleImages) {
        prevImage();
      } else if (event.key === "ArrowRight" && hasMultipleImages) {
        nextImage();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, isClient, hasMultipleImages]);

  if (!isClient) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-lg h-full w-full z-[9999] cursor-pointer"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex md:grid md:place-items-center z-[10000] pointer-events-none">
            <motion.div
              ref={ref}
              className={`w-full flex flex-col overflow-hidden ${
                active.description
                  ? "h-fit max-h-[95vh] md:max-h-[95dvh]"
                  : "h-fit items-center justify-center"
              } md:h-auto`}
              style={{
                maxHeight: "100dvh",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative rounded-[1.3rem] overflow-hidden flex-shrink-0 w-fit mx-auto">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex absolute top-2 left-2 lg:hidden items-center justify-center z-[10002] bg-background/60 backdrop-blur-md rounded-[0.8rem] h-10 w-10"
                  onClick={onClose}
                >
                  <CloseIcon />
                </motion.button>

                {/* Unified structure for both single and multiple images */}
                {hasMultipleImages ? (
                  <>
                    {/* Carousel container */}
                    <motion.div
                      ref={carouselRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="overflow-x-auto overflow-y-hidden scrollbar-none touch-pan-x snap-x snap-mandatory scroll-smooth max-h-[95dvh] w-fit max-w-[95vw]"
                      style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      <div className="flex pointer-events-none">
                        {images.map((img, index) => (
                          <div
                            key={`${active.title}-${index}`}
                            className="flex-shrink-0 w-full flex justify-center items-center snap-center relative"
                          >
                            <div className="relative pointer-events-none">
                              {/* Use motion.img with layoutId only for the first/current image */}
                              {index === 0 ? (
                                <motion.img
                                  layoutId={`card-${active.title}-${id}`}
                                  src={`https://assets.abaly.ch/${img}`}
                                  alt={`${active.title} - Image ${index + 1}`}
                                  className="w-auto h-auto rounded-lg object-contain select-none pointer-events-auto"
                                  style={{ maxHeight: "95dvh" }}
                                  draggable={false}
                                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                />
                              ) : (
                                <img
                                  src={`https://assets.abaly.ch/${img}`}
                                  alt={`${active.title} - Image ${index + 1}`}
                                  className="w-auto h-auto rounded-lg object-contain select-none pointer-events-auto"
                                  style={{ maxHeight: "95dvh" }}
                                  draggable={false}
                                />
                              )}

                              {/* Shopping cart button positioned relative to each image */}
                              {active.storeUrl &&
                                index === currentImageIndex && (
                                  <motion.div
                                    layoutId={`buy-button-${active.title}-${id}`}
                                    className="absolute top-2 right-2 z-[10001] pointer-events-auto"
                                    layout
                                    transition={{
                                      layout: {
                                        duration: 0.4,
                                        ease: [0.25, 0.1, 0.25, 1],
                                      },
                                    }}
                                  >
                                    <motion.button
                                      className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-200 rounded-lg cursor-pointer border border-gray-200/50 hover:border-gray-300/50 overflow-hidden"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(
                                          active.storeUrl,
                                          "_blank"
                                        );
                                      }}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                      }}
                                    >
                                      <motion.div
                                        layoutId={`buy-icon-${active.title}-${id}`}
                                      >
                                        <ShoppingCart className="h-4 w-4 text-gray-700" />
                                      </motion.div>
                                    </motion.button>
                                  </motion.div>
                                )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Navigation buttons */}
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[10002] bg-black/60 backdrop-blur-md hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-100 pointer-events-auto cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.2 }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[10002] bg-black/60 backdrop-blur-md hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-100 pointer-events-auto cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </motion.button>
                  </>
                ) : (
                  <>
                    {/* Single image - direct motion.img with layoutId */}
                    <div className="relative w-full lg:w-auto flex items-center justify-center">
                      <motion.img
                        layoutId={`card-${active.title}-${id}`}
                        src={`https://assets.abaly.ch/${images[0]}`}
                        alt={active.title}
                        className="w-auto h-auto max-w-full object-contain rounded-lg"
                        style={{ maxHeight: "95dvh" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Shopping cart button for single image */}
                    {active.storeUrl && (
                      <motion.div
                        layoutId={`buy-button-${active.title}-${id}`}
                        className="absolute top-2 right-2 z-[10001] pointer-events-auto"
                        layout
                        transition={{
                          layout: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                      >
                        <motion.button
                          className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-200 rounded-lg cursor-pointer border border-gray-200/50 hover:border-gray-300/50 overflow-hidden"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(active.storeUrl, "_blank");
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <motion.div
                            layoutId={`buy-icon-${active.title}-${id}`}
                          >
                            <ShoppingCart className="h-4 w-4 text-gray-700" />
                          </motion.div>
                        </motion.button>
                      </motion.div>
                    )}
                  </>
                )}

                <div className="h-[3rem] md:h-[5rem] absolute bottom-0 left-0 w-full" />

                {/* Thumbnail navigation for multiple images */}
                {hasMultipleImages && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[10002] flex gap-2 bg-black/60 backdrop-blur-md rounded-lg p-3 pointer-events-auto"
                  >
                    {images.map((img, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          scrollToImage(index);
                        }}
                        className={`relative overflow-hidden rounded-md transition-all duration-100 ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary scale-105"
                            : "hover:scale-105 opacity-70 hover:opacity-100"
                        }`}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.08 }}
                      >
                        <img
                          src={`https://assets.abaly.ch/${img}`}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-12 h-12 object-cover"
                        />
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {active.title && active.showTitle && (
                  <div
                    className={`absolute inset-x-0 bottom-0 p-2 md:p-2 ${
                      active.darkText ? "text-black" : "text-white"
                    }`}
                  >
                    <h5
                      className="pt-2 pb-2 px-4 backdrop-blur-sm w-fit rounded-4xl overflow-hidden text-base "
                    >
                      {active.title}
                    </h5>
                  </div>
                )}
              </div>
              {active.description && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-4 overflow-y-auto md:max-h-[95dvh] flex-1 md:flex-initial w-full pointer-events-auto"
                >
                  <p className="text-md">{active.description}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
