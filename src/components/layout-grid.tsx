"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "../utils/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const quarter = Math.ceil(images.length / 5);

  const firstPart = images.slice(0, quarter);
  const secondPart = images.slice(quarter, 2 * quarter);
  const thirdPart = images.slice(2 * quarter, 3 * quarter);
  const fourthPart = images.slice(3 * quarter);

  return (
    <div className={cn("items-start w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${el}`}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 m-0! p-0!"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${el}`}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 m-0! p-0!"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${el}`}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 m-0! p-0!"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <img
                src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${el}`}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 m-0! p-0!"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
