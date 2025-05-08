import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

interface ParallaxGraffitiProps {
  //height?: string;
  parallaxStrength?: number;
}

export default function ParallaxGraffiti({
  //height = "50vw",
  parallaxStrength = 25,
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

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center overflow-hidden h-[50vw] md:h-[50vw] md:max-h-[80dvh]"
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
            src="https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/graffiti-wall.jpg"
            alt="Graffiti wall background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
