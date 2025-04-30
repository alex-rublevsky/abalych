import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export default function AbalychWorldwide() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center no-padding-bottom no-padding"
    >
      <div
        className="relative flex-none max-w-screen-xl"
        style={{ width: "100%", aspectRatio: "1.5" }}
      >
        <Earth parentRef={sectionRef} />
      </div>
    </section>
  );
}

function Earth({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [color, normal, aoMap, textImage] = useLoader(TextureLoader, [
    "/earth-1.webp",
    "/earth-2.webp",
    "/earth-3.webp",
    "/abalych-worldwide.png",
  ]);

  useEffect(() => {
    // Configure texture for proper transparency handling
    textImage.premultiplyAlpha = false;
    textImage.minFilter = THREE.NearestFilter;
    textImage.magFilter = THREE.NearestFilter;
    textImage.generateMipmaps = false;
    textImage.needsUpdate = true;
  }, [textImage]);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.48]);

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      className="h-full"
      gl={{
        alpha: true,
        premultipliedAlpha: false,
      }}
    >
      <ambientLight intensity={0.33} />
      <directionalLight intensity={24.5} position={[1, 0, 0.15]} />

      <group position={[1.5, 0, 0]} scale={1.1}>
        {/* Earth sphere */}
        <motion.mesh scale={2.4} rotation-y={rotationY}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>

        {/* Text plane */}
        <mesh position={[-2, 0, 2.5]} scale={[3.4, 1.7, 10]}>
          <planeGeometry />
          <meshBasicMaterial
            map={textImage}
            transparent={true}
            blending={THREE.CustomBlending}
            blendSrc={THREE.OneMinusDstColorFactor}
            blendDst={THREE.OneMinusSrcColorFactor}
            blendEquation={THREE.AddEquation}
            depthWrite={false}
            depthTest={true}
            side={THREE.DoubleSide}
            opacity={1}
            alphaTest={0.01}
          />
        </mesh>
      </group>
    </Canvas>
  );
}
