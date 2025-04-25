import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { type CardData } from "../data/gallery";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { createPortal } from "react-dom";
import Lenis from "@studio-freight/lenis";

export function Gallery({ data, title }: { data: CardData[]; title: string }) {
  const [active, setActive] = useState<CardData | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!) as React.RefObject<HTMLDivElement>;
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the global Lenis instance
    lenisRef.current = (window as any).lenis;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && lenisRef.current) {
      lenisRef.current.stop();
    } else if (lenisRef.current) {
      lenisRef.current.start();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section>
        <h1 className="pb-14 text-center">{title}</h1>
        <ul className="mx-auto w-full columns-2 lg:columns-3 2xl:columns-4 items-start gap-4">
          {data.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="pb-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer break-inside-avoid"
            >
              <div className="relative rounded-lg overflow-hidden">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    alt={card.title}
                    src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${card.image}`}
                    className="h-auto w-full  object-cover object-top"
                  />
                </motion.div>

                <ProgressiveBlur
                  blurIntensity={0.6}
                  className="h-[5rem] absolute bottom-0 left-0 w-full"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 ${card.darkText ? "text-black" : "text-white"}`}
                >
                  <motion.h5 layoutId={`title-${card.title}-${id}`}>
                    {card.title}
                  </motion.h5>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </section>

      {createPortal(
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 bg-background/20 backdrop-blur-lg h-full w-full z-[9999]"
                onClick={() => setActive(null)}
              />
              <div className="fixed inset-0 grid place-items-center z-[10000]">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center z-999999 bg-background/60 backdrop-blur-md rounded-full h-10 w-10"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-auto max-w-2xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                  <div className="relative">
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                      <img
                        width={200}
                        height={200}
                        src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${active.image}`}
                        alt={active.title}
                        className="w-full h-auto max-h-[70vh] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                      />
                    </motion.div>

                    <ProgressiveBlur
                      blurIntensity={0.5}
                      className="h-[5rem] absolute bottom-0 left-0 w-full"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 p-4 ${active.darkText ? "text-black" : "text-white"}`}
                    >
                      <motion.h5 layoutId={`title-${active.title}-${id}`}>
                        {active.title}
                      </motion.h5>
                    </div>
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="p-4 bg-white dark:bg-neutral-900"
                  >
                    <p className="text-md">{active.description}</p>
                  </motion.div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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
