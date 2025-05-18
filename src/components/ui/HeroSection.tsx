import ScatterText from "~/components/ui/ScatterText";

interface HeroProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroProps) {
  return (
    <section className="relative min-h-fit h-screen w-screen overflow-x-hidden no-padding z-20">
      <div className="max-w-[120rem] mx-auto w-full h-full grid grid-cols-1  gap-8 md:gap-4 items-center justify-center">
        <div className="relative w-full h-fit">
          <ScatterText
            text="Kristina Abalymova"
            className="w-full text-pretty p-8 text-center pt-20"
            extraLarge={true}
          />
        </div>

        <img
          src="https://abalych-assets.rublevsky.studio/hero.webp"
          alt="Kristina's portrait"
          className="w-full h-auto object-contain z-3"
        />
      </div>
    </section>
  );
}
