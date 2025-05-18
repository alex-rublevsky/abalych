import { useEffect, useState } from "react";
import { motion, useAnimate, AnimatePresence } from "motion/react";

// Images for slideshow
const images = [
  "/amobae/amobae-01.svg",
  "/amobae/amobae-02.svg",
  "/amobae/amobae-03.svg",
  "/amobae/amobae-04.svg",
  "/amobae/amobae-05.svg",
  "/amobae/amobae-01.svg",
];

export default function Loader() {
  const [scope, animate] = useAnimate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  async function loaderAnimation() {
    // Start with slower timing and then speed up before slowing down again
    // Non-linear timing curve: slow → fast → slow
    const timings = [0.5, 0.3, 0.2, 0.3, 0.5];

    // Initialize with first image
    setCurrentImageIndex(0);

    // Fade in the loader initially
    await animate(scope.current, { opacity: [0, 1] }, { duration: 0.3 });

    // Wait a moment on the first image
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Run through all images with animation
    for (let i = 1; i < images.length; i++) {
      // Update current image index
      setCurrentImageIndex(i);

      // Calculate the current duration based on position in the sequence
      const currentDuration = timings[Math.min(i - 1, timings.length - 1)];

      // Wait for the image transition
      await new Promise((resolve) =>
        setTimeout(resolve, currentDuration * 1000)
      );
    }

    // Optional: add a final fade out for the loader when done
    await animate(
      scope.current,
      { opacity: [1, 0] },
      { duration: 0.5, delay: 0.2 }
    );
  }

  useEffect(() => {
    // Store the animation promise so we can potentially cancel it
    const animationPromise = loaderAnimation();

    // Cleanup function for component unmount
    return () => {
      // If needed, you could add cancel logic here if you implement
      // a way to abort the animation sequence
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={scope}
        className="bg-accent w-screen h-screen absolute inset-0 z-10 flex justify-center items-center"
        initial={{ opacity: 0 }}
      >
        <motion.div className="relative w-[70vw] lg:w-[50vh] h-[70vw] lg:h-[50vh] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Amoeba shaped loader"
              width="auto"
              height="auto"
              className="absolute w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
