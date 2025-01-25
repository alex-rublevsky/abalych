import Image from "next/image";

interface GallerySectionProps {
  title: string;
}

export default function GallerySection({ title }: GallerySectionProps) {
  return (
    <section className="flex flex-col gap-8">
      <h2>{title}</h2>

      <div className="relative overflow-x-auto">
        <div className="flex gap-4 pb-4 min-w-full">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-72 h-96 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`https://picsum.photos/800/1200?random=${index}`}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
