import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { MouseEvent } from "react";
import { type ExperienceEntry, experienceData } from "~/data/experience";

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
          className="flex flex-col items-center w-full pb-24"
        >
          <div className="w-full max-w-screen-xl px-4">
            <h1 className="mb-6 text-5xl">{section.title}</h1>
            <div className="columns-1 md:columns-2 gap-4 space-y-4 w-full">
              {section.entries.map((item: ExperienceEntry, index: number) => (
                <div
                  key={index}
                  className="group relative w-full rounded-xl border border-primary/30 bg-primary/5 px-8 py-12 mb-4 break-inside-avoid"
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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
                  <div className="relative z-10">
                    {item.logo && (
                      <img
                        src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${item.logo}`}
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

                    {item.description &&
                      (item.description.includes("• ") ? (
                        <ul className="mt-6 text-base text-foreground list-disc list-outside ml-5 space-y-2">
                          {item.description
                            .split("\n")
                            .map((line: string, i: number) => (
                              <li key={i} className="pl-1">
                                {line.trim().replace("• ", "")}
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <p className="mt-6 text-base text-foreground">
                          {item.description}
                        </p>
                      ))}
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
