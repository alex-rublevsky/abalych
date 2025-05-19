import { useEffect, useState, useRef } from "react";
import { motion, useAnimate, AnimatePresence } from "motion/react";
import SymbolA from "../SymbolA";
import type Lenis from "lenis";

export default function Loader() {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initial setup and timer
  useEffect(() => {
    // Ensure we stop scrolling as early as possible
    const stopScroll = () => {
      lenisRef.current = (window as any).lenis;
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    };

    // Try immediately
    stopScroll();

    // Also try after a tiny delay in case Lenis wasn't ready
    const immediateTimer = setTimeout(stopScroll, 0);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(immediateTimer);
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };
  }, []);

  // Continuously ensure scroll is locked while visible
  useEffect(() => {
    if (!isVisible) {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
      return;
    }

    const interval = setInterval(() => {
      lenisRef.current = (window as any).lenis;
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={scope}
          className="fixed bg-accent w-screen h-screen inset-0 z-[9999] flex justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="relative w-[70vw] lg:w-[50vh] h-[70vw] lg:h-[50vh] flex justify-center items-center">
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 1 }}
              animate={{ scale: 0.5 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <SymbolA className="w-32 lg:w-48" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
