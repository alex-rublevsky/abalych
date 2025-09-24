import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

interface ParallaxGraffitiProps {
  //height?: string;
  parallaxStrength?: number;
  isMobile?: boolean;
}

export default function ParallaxGraffiti({
  //height = "50vw",
  parallaxStrength = 25,
  isMobile,
}: ParallaxGraffitiProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Calculate parallax offset based on strength
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxStrength}%`, `${parallaxStrength}%`]
  );

  return isMobile ? (
    <div className="z-[999]">
      <img
        className="h-[50vw] w-full z-[999] relative"
        src="https://assets.abaly.ch/graffiti-wall.jpg"
      />
    </div>
  ) : (
    <div
      ref={container}
      className="relative flex items-center justify-center overflow-hidden h-[50vw] md:h-[50vw] md:max-h-[80dvh] z-30"
      style={{
        //height,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          style={{ y }}
          className="w-full h-[120%] -translate-y-[10%]"
        >
          <img
            src="https://assets.abaly.ch/graffiti-wall.webp"
            alt="Graffiti wall background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
