import ScatterText from "./ScatterText";
import SymbolA from "./SymbolA";
import { HERO_IMAGE_URL } from "../data/constants";

interface HeroProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroProps) {

  return (
    <section className="relative h-[100dvh] w-screen overflow-x-hidden no-padding no-padding-bottom z-20">
      <div className="max-w-[120rem] mx-auto w-full h-full flex flex-col">
        <div className="relative w-full flex flex-col justify-center items-center pt-24 flex-1 md:flex-none px-4">
          <div className="flex flex-col items-center w-fit">
            <ScatterText
              text="Kristina   Abalymova"
              className="text-pretty mb-4 text-center"
              extraLarge={true}
              style={{ maxWidth: isMobile ? "9ch" : "100%" }}
            />
            <ScatterText
              text="aka Abalych"
              className="text-pretty self-end whitespace-nowrap"
              extraLarge={false}
            />
          </div>
        </div>

        <div className="relative w-full mx-auto flex-1 flex flex-col justify-end overflow-hidden">
          {/* TODO: fix the small symbl on small height large width devices */}
          <SymbolA
            className="absolute left-0 bottom-10 -rotate-25 h-[65vw] max-h-[60dvh] xl:max-h-[66dvh] z-[999] mix-blend-difference bg-blend-difference"
            color="#ffffff"
            //layoutId="hero-symbol-a"
          />
          <SymbolA
            className="absolute left-0 bottom-10 -rotate-25 h-[65vw] max-h-[60dvh] xl:max-h-[66dvh] -z-[1]"
            color="#ffffff"
          />
          <img
            src={HERO_IMAGE_URL}
            alt="Kristina's portrait"
            className="w-full h-full object-contain object-bottom z-3"
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
