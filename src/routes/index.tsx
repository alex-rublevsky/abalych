// TODO: subsections for professional experience, education, certificates
// TODO: 3d model of amoeba

import { createFileRoute } from "@tanstack/react-router";
import FooterContact from "~/components/footerContact";
import { Gallery } from "~/components/gallery";
import AbalychWorldwide from "~/components/abalychWorldwide";
import SmoothScroll from "~/components/smoothScroll";
import ExperienceSection from "~/components/experienceSection";
import ParallaxGraffiti from "~/components/ui/parallaxGraffiti";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SmoothScroll>
      <main className="">
        <section className="h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-2xl mx-auto">
          <img
            src="https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/portrait.jpg"
            alt="Kristina's portrait"
            className="object-contain w-full h-auto overflow-hidden rounded-2xl"
            //sizes="(max-width: 768px) 100vw, 50vw"
          />

          <h2>
            Hi, my name is Kristina and I&apos;m CEO of bebra and founder of
            swag 2012
          </h2>
        </section>

        <ExperienceSection />
        <ParallaxGraffiti />
        <Gallery />

        <AbalychWorldwide />
        <FooterContact />
      </main>
    </SmoothScroll>
  );
}
