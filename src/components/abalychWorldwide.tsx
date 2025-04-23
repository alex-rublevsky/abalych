import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion-3d";

export default function AbalychWorldwide() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="h-screen no-padding-bottom no-padding">
      <div className="h-full w-full max-w-[120rem] mx-auto relative">
        <h1 className="absolute pl-3 top-1/2 -translate-y-1/2 mix-blend-difference text-primary z-10 text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] 2xl:text-[13rem]">
          Abalych
          <br />
          Worldwide
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-3/10 -translate-y-1/2 w-[70vw] h-[70vw] max-h-[80vh] max-w-[80vh] md:w-[80vw] md:h-[80vw] md:-translate-x-3/8">
          <Earth parentRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}

function Earth({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/public/earth-1.webp",
    "/public/earth-2.webp",
    "/public/earth-3.webp",
  ]);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.3]);

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={1} />
      <directionalLight intensity={29.5} position={[1, 0, 0.2]} />
      <motion.mesh scale={3} rotation-y={rotationY}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
}
