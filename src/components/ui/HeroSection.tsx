import ScatterText from "~/components/ui/ScatterText";
import SymbolA from "../SymbolA";

interface HeroProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroProps) {
  return (
    <section className="relative h-[100dvh] w-screen overflow-x-hidden no-padding no-padding-bottom z-20">
      <div className="max-w-[120rem] mx-auto w-full h-full grid grid-rows-[1fr_auto] gap-8 md:gap-4">
        <div className="relative w-full h-full flex items-center">
          <ScatterText
            text="Kristina   Abalymova"
            className="w-full text-pretty p-8 text-center font-bold text-gray-900 dark:text-gray-100"
            extraLarge={true}
          />
        </div>

        <div className="relative w-fit mx-auto max-h-[60dvh] ">
          <SymbolA
            className="absolute left-0 bottom-10 -rotate-25 h-[65vw] max-h-[60dvh] z-[999] mix-blend-difference bg-blend-difference"
            color="#ffffff"
          />
          <SymbolA
            className="absolute left-0 bottom-10 -rotate-25 h-[65vw] max-h-[60vh] -z-[1]"
            color="#ffffff"
          />
          <img
            src="https://abalych-assets.rublevsky.studio/hero.webp"
            alt="Kristina's portrait"
            className="w-full h-full object-contain z-3"
          />
        </div>

        {/* <img
          src="https://abalych-assets.rublevsky.studio/abalych-logo.svg"
          alt="Abalych Logo"
          className="absolute left-50 bottom-20 -rotate-25 w-[35vw] h-auto z-40 blend-mode-difference"
        /> */}
      </div>
    </section>
  );
}
