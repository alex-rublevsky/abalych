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
    <section className="flex flex-col  w-min mx-auto">
      <h1 className="mb-6">Professional experience</h1>
      <div className="columns-2 gap-4">
        {experienceData.map((item: any, index: number) => (
          <div
            className="group relative max-w-md rounded-xl border border-secondary/30 bg-secondary/10 px-8 py-12  min-w-[45ch] mb-4 break-inside-avoid"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                    radial-gradient(
                      25rem circle at ${mouseX}px ${mouseY}px,
                      oklch(0.75 0.0821 300.79 / 0.3),
                      transparent 80%
                    )
                  `,
              }}
            />
            <div className="relative z-10">
              {item.logo && (
                <img
                  src={`https://pub-0cf7b6988eb140f288f8db5d275ea3b6.r2.dev/${item.logo}`}
                  className={`w-auto object-contain ${item.largeLogo ? "h-32" : "h-18"}`}
                  alt={`${item.company} logo`}
                />
              )}
              <h3 className="text-base font-medium leading-7 text-foreground/60">
                {item.date}
              </h3>
              <div className="mt-2 flex items-center gap-x-2">
                <span className="text-xl  tracking-tight text-foreground">
                  {item.title}
                </span>
              </div>
              <p className="mt-6 text-base text-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
