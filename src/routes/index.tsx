// TODO: finalize  loader
// TODO: add pattern
//          - backdrop blur for experience cards
// TODO:
//

// secondary:
// TODO: subsections for professional experience, education, certificates
// TODO: 3d model of amoeba

import { createFileRoute } from "@tanstack/react-router";
import FooterContact from "~/components/footerContact";
import { Gallery } from "~/components/gallery";
import AbalychWorldwide from "~/components/abalychWorldwide";
import SmoothScroll from "~/components/smoothScroll";
import ExperienceSection from "~/components/experienceSection";
import ParallaxGraffiti from "~/components/ui/parallaxGraffiti";
import { FloatingPreview } from "~/components/ui/floating-preview";
import { useViewportSize } from "~/hooks/use-viewport-size";
import { mainGalleryData, stickerGalleryData } from "~/data/gallery";
import Loader from "~/components/ui/Loader";
import HeroSection from "~/components/ui/HeroSection";
import Pattern from "~/components/ui/Pattern";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { isMobile } = useViewportSize();

  return (
    <SmoothScroll>
      <main className="relative ">
        <Pattern />
        <Loader />

        <HeroSection isMobile={isMobile} />

        <ExperienceSection />
        {isMobile ? (
          <img
            className="h-[50vw] w-full"
            src="https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/graffiti-wall.jpg"
          />
        ) : (
          <ParallaxGraffiti />
        )}

        {isMobile ? (
          <Gallery data={stickerGalleryData} title="Stickers" />
        ) : (
          <FloatingPreview />
        )}
        <Gallery data={mainGalleryData} />

        <AbalychWorldwide />

        <FooterContact />
      </main>
    </SmoothScroll>
  );
}
