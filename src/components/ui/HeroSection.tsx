import ScatterText from "~/components/ui/ScatterText";

interface HeroProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroProps) {
  return (
    <section className="relative h-screen w-screen overflow-x-hidden no-padding no-padding-bottom z-20">
      <div className="max-w-[120rem] mx-auto w-full h-full grid grid-rows-[1fr_auto] gap-8 md:gap-4">
        <div className="relative w-full h-full flex items-center">
          <ScatterText
            text="Kristina Abalymova"
            className="w-full text-pretty p-8 text-center"
            extraLarge={true}
          />
        </div>

        <div className="w-full">
          <img
            src="https://abalych-assets.rublevsky.studio/hero.webp"
            alt="Kristina's portrait"
            className="w-full h-auto object-contain z-3"
          />
        </div>
      </div>
    </section>
  );
}
