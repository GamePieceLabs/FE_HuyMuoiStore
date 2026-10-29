import Image from "next/image";

interface HomeHeroProps {
  imageUrl?: string;
}

const defaultHeroImage =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_slider_1_img.jpg?v=321";

export function HomeHero({ imageUrl = defaultHeroImage }: HomeHeroProps) {
  return (
    <section aria-label="Banner trang chủ" className="relative px-5">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt=""
          width={1920}
          height={800}
          sizes="100vw"
          unoptimized
          fetchPriority="high"
          className="block h-auto w-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 size-2 -translate-x-1/2 rounded-full bg-white shadow-sm ring-1 ring-black/10"
      />
    </section>
  );
}
