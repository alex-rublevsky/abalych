import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import ImageComponent from "./ImageComponent";
import { GRAFFITI_WALL_IMAGE } from "../data/constants";

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
      <div 
        className="w-full"
        style={{ aspectRatio: GRAFFITI_WALL_IMAGE.ratio }}
      >
        <ImageComponent
          src={GRAFFITI_WALL_IMAGE.url}
          alt="Graffiti wall background"
          blurHash={GRAFFITI_WALL_IMAGE.blurHash}
          className="w-full h-full object-cover z-[999] relative"
        />
      </div>
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
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -translate-y-[10%]"
        style={{ y }}
      >
        <ImageComponent
          src={GRAFFITI_WALL_IMAGE.url}
          alt="Graffiti wall background"
          blurHash={GRAFFITI_WALL_IMAGE.blurHash}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
