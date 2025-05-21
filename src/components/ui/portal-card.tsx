import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";
import { type CardData } from "~/data/gallery";
import { useOutsideClick } from "~/hooks/use-outside-click";
import Lenis from "lenis";

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

  useEffect(() => {
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
  }, [active]);

  useOutsideClick(ref, onClose);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-background/20 cursor-pointer backdrop-blur-lg h-full w-full z-[9999]"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex md:grid md:place-items-center z-[10000]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className={`w-full md:w-fit md:max-w-[95vw] mx-auto flex flex-col md:bg-white md:dark:bg-neutral-900 md:rounded-3xl overflow-hidden ${
                active.description
                  ? "h-[100dvh]"
                  : "h-screen items-center justify-center"
              } md:h-auto`}
              style={{
                maxHeight: "100dvh",
              }}
            >
              <div className="relative rounded-[1.3rem] overflow-hidden flex-shrink-0 w-fit mx-auto">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center z-[10001] bg-background/60 backdrop-blur-md rounded-[0.8rem] h-10 w-10"
                  onClick={onClose}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${active.image}`}
                    alt={active.title}
                    className={`w-auto h-auto md:rounded-tr-lg md:rounded-tl-lg object-contain [view-transition-name:card-image-${active.image}]`}
                    style={{ maxHeight: "95dvh" }}
                  />
                </motion.div>
                <div className="h-[3rem] md:h-[5rem] absolute bottom-0 left-0 w-full" />
                {active.title && active.showTitle && (
                  <div
                    className={`absolute inset-x-0 bottom-0 p-2 md:p-2 ${
                      active.darkText ? "text-black" : "text-white"
                    }`}
                  >
                    <motion.h5
                      layoutId={`title-${active.title}-${id}`}
                      className="pt-2 pb-2 px-4 backdrop-blur-sm w-fit rounded-4xl overflow-hidden text-base [view-transition-name:card-title]"
                    >
                      {active.title}
                    </motion.h5>
                  </div>
                )}
              </div>
              {active.description && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-4 bg-white dark:bg-neutral-900 overflow-y-auto md:max-h-[95dvh] flex-1 md:flex-initial w-full"
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
