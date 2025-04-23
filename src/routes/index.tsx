import { createFileRoute } from "@tanstack/react-router";
import FooterContact from "~/components/footerContact";
import { ParallaxScroll } from "~/components/layout-grid";
import { galleryData } from "~/data/gallery";
import { Button } from "~/components/ui/button";
import { experienceData } from "~/data/experience";
import AbalychWorldwide from "~/components/abalychWorldwide";
import SmoothScroll from "~/components/smoothScroll";
import { GlowingEffect } from "~/components/ui/glowing-effect";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SmoothScroll>
      <main className="">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2>
            Hi, my name is Kristina and I&apos;m CEO of bebra and founder of
            swag 2012
          </h2>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/800/800?random=profile"
              alt="Kristina's portrait"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
        <section className="flex flex-col gap-6 max-w-screen-2xl mx-auto">
          <h1 className="mb-6">Professional experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((entry) => (
              <div key={entry.title}>{experienceEntry(entry)}</div>
            ))}
          </div>
        </section>
        <ParallaxScroll images={galleryData} />
        <AbalychWorldwide />
        <FooterContact />
      </main>
    </SmoothScroll>
  );
}

function experienceEntry({
  date,
  title,
  company,
  description,
  logo,
  largeLogo,
}: {
  date: string;
  title: string;
  company: string;
  description?: string;
  logo?: string;
  largeLogo?: boolean;
}) {
  return (
    <div className="relative max-w-[70ch] list-none">
      <div className="relative h-full rounded-2xl border md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex flex-col items-start gap-4 p-6 overflow-hidden rounded-xl dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {logo && (
            <img
              src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${logo}`}
              className={`w-auto object-contain ${largeLogo ? "h-32" : "h-18"}`}
              alt={`${company} logo`}
            />
          )}
          <p className="text-muted-foreground">{date}</p>
          <h5 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem]">
            {title}
          </h5>
          <p className="text-base font-medium">{company}</p>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
