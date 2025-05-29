import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { useViewportSize } from "~/hooks/use-viewport-size";

interface ScatterTextProps {
  text: string;
  className?: string;
  extraLarge?: boolean;
  style?: React.CSSProperties;
}

export default function ScatterText({
  text,
  className,
  extraLarge,
  style,
}: ScatterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);
  const { isMobile } = useViewportSize();

  useEffect(() => {
    if (isMobile) return;
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector(".h1")!);

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      // Calculate the speed of the pointer movement
      // and use that to calculate the distance the character should move
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isMobile]);

  const sizes = extraLarge
    ? "text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl"
    : "text-4xl md:text-5xl lg:text-6xl xl:text-6xl";

  const trackingLeading = extraLarge
    ? "tracking-widest 2xl:tracking-wider leading-20 md:leading-16 xl:leading-28 "
    : "tracking-widest 2xl:tracking-wider leading-13 md:leading-16 xl:leading-28";

  if (isMobile) {
    return (
      <h1
        className={`${className || ""} font-graffiti text-foreground ${trackingLeading} ${sizes} w-fit`}
        style={style}
      >
        {text}
      </h1>
    );
  }

  return (
    <div className={`z-20 ${className || ""}`} ref={containerRef} style={style}>
      <h1
        className={`h1 text-foreground font-graffiti ${trackingLeading} ${sizes}`}
      >
        {text}
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
               
                text-align: left;
                
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
