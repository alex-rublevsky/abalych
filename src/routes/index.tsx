import { createFileRoute } from "@tanstack/react-router";
import FooterContact from "~/components/footerContact";
import { Gallery } from "~/components/layout-grid";
import AbalychWorldwide from "~/components/abalychWorldwide";
import SmoothScroll from "~/components/smoothScroll";
import { photographyData, experimentData } from "~/data/gallery";
import ExperienceSection from "~/components/experienceSection";

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
        <Gallery data={photographyData} title="Photography" />
        <Gallery data={experimentData} title="Experiments" />
        <AbalychWorldwide />
        <FooterContact />
      </main>
    </SmoothScroll>
  );
}
