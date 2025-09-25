import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { type MouseEvent } from "react";
import { type ExperienceEntry, experienceData } from "../data/experience";
//import { AnimatedGroup } from "~/components/motion_primitives/animated-group";
import ScatterText from "./ScatterText";

export default function ExperienceSection() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      {experienceData.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="flex flex-col items-center w-full pb-24 relative z-30 "
        >
          <div className="w-full max-w-screen-xl px-4 z-30 ">
            {section.title && (
              <ScatterText text={section.title} className="pb-8 pt-20 " />
            )}
            {/* TODO: this was animated group before */}
            <div className="columns-1 md:columns-2 gap-4 space-y-4 w-full z-30 ">
              {section.entries.map((item: ExperienceEntry, index: number) => (
                <div
                  key={index}
                  className={`bg-background backdrop-blur-lg z-[9999] group relative w-full rounded-xl overflow-hidden border-2 border-border px-8 py-12 mb-4 break-inside-avoid intersect-once intersect:motion-preset-blur-up-lg motion-duration-1000 motion-delay-${index * 100}`}
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    className="pointer-events-none  absolute -inset-px  opacity-0 transition  duration-300 group-hover:opacity-100 "
                    style={{
                      background: useMotionTemplate`
                      radial-gradient(
                        25rem circle at ${mouseX}px ${mouseY}px,
                        oklch(0.88 0.2326 125.05 / 0.29),
                        transparent 80%
                      )
                    `,
                    }}
                  />

                  <div className="relative z-10  ">
                    {item.logo && (
                      <img
                        src={`https://assets.abaly.ch/${item.logo}`}
                        className={`w-auto object-contain mb-4 ${item.largeLogo ? "h-32" : "h-18"}`}
                        alt={`${item.company} logo`}
                      />
                    )}
                    <h3 className="text-base font-medium leading-7 text-foreground/60">
                      {item.date}
                    </h3>

                    <p className="mt-2 text-xl tracking-tight text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-2 tracking-tight text-foreground/50">
                      {item.company}
                    </p>

                    {item.description && (
                      <div className="mt-6 text-base text-foreground space-y-4">
                        {item.description
                          .split("\n")
                          .map((paragraph: string) => paragraph.trim())
                          .filter((paragraph: string) => paragraph.length > 0)
                          .map((paragraph: string, i: number) => (
                            <p
                              key={i}
                              dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
