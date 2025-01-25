import styles from "@/styles/typography.module.css";
import Image from "next/image";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-20 p-8 md:p-16">
      {/* First section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h2>
          Hi, my name is Kristina and I&apos;m CEO of bebra and founder of swag
          2012
        </h2>
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/800/800?random=profile"
            alt="Kristina's portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Second section */}
      <section className="flex flex-col gap-6">
        <h3 className="mb-6">Professional experience</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience 1 */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Jan 2024 – April 2024</span>
            <h4 className="text-lg font-medium">Medical Research Volunteer</h4>
            <p className="text-base">
              Canadian centre for clinical trials (at Wilderman Medical Clinic)
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">
              December 2024 - Current
            </span>
            <h4 className="text-lg font-medium">
              Technical support specialist
            </h4>
            <p className="text-base">MTRC</p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Graduation 2025</span>
            <h4 className="text-lg font-medium">
              Bachelor of Science (B.Sc.) in Biology Candidate
            </h4>
          </div>

          {/* Experience 4 */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">
              September 2019 - May 2020
            </span>
            <h4 className="text-lg font-medium">
              Directed research in Neuropharmacology
            </h4>
            <p className="text-base">Reaviz Medical University</p>
            <p className="text-base text-gray-600">
              The impact of the adaptogen of plant origin Rhodiola rosea on
              resistance of rats to stress conditions
            </p>
          </div>
        </div>
      </section>

      <GallerySection title="Typa sh*t I've been on" />
      <GallerySection title="Photography" />

      {/* Contact section */}
      <section className="min-h-[75vh] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-x-20 gap-y-12">
          <h2>
            <a
              href="mailto:your.email@example.com"
              className="hover:opacity-60 transition-opacity"
            >
              Email
            </a>
          </h2>
          <h2>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              Telegram
            </a>
          </h2>
          <h2>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
          </h2>
          <h2>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              Instagram
            </a>
          </h2>
        </div>
      </section>
    </main>
  );
}
