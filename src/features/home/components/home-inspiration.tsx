import Link from "next/link";

const inspirationItems = [
  {
    title: "Tin tức, mẹo & đánh giá",
    href: "/blogs/news",
    image:
      "https://cdn.hstatic.net/files/200001170195/file/loomline_index_banner_2_1_img_22954791d4e24ef291ad6150cb4e4d2d.jpg",
    alt: "Tin tức, mẹo và đánh giá",
  },
  {
    title: "Liên hệ tư vấn",
    href: "/pages/lien-he",
    video:
      "https://cdn.hstatic.net/files/200001170195/file/clipb01.mp4",
    poster:
      "//cdn.hstatic.net/themes/200001170195/1001490675/14/loomline_index_banner_2_2_img?v=476",
    alt: "Liên hệ tư vấn",
  },
  {
    title: "Cửa hàng gần bạn",
    href: "/pages/he-thong-cua-hang",
    image:
      "//cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_banner_2_3_img.jpg?v=321",
    alt: "Cửa hàng gần bạn",
  },
] as const;

function InspirationMedia({
  item,
  title,
}: {
  item: (typeof inspirationItems)[number];
  title: string;
}) {
  return (
    <div className="relative aspect-[0.7] overflow-hidden rounded-2xl bg-muted">
      {"video" in item ? (
        <video
          aria-label={item.alt}
          autoPlay
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loop
          muted
          playsInline
          poster={item.poster}
          preload="metadata"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-center text-white sm:p-6">
        <h3 className="font-heading text-2xl font-medium tracking-tight drop-shadow-sm">
          {title}
        </h3>
        <span className="mt-4 inline-flex min-h-11 items-center border-b border-white px-1 text-sm font-medium transition-opacity duration-200 group-hover:opacity-70">
          Xem thêm
        </span>
      </div>
    </div>
  );
}

export function HomeInspiration() {
  return (
    <section
      aria-labelledby="home-inspiration-title"
      className="w-full"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          Khám phá thêm
        </p>
        <h2
          id="home-inspiration-title"
          className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          Phong cách làm đẹp cho mọi khoảnh khắc,
          <br className="hidden sm:block" /> mọi thời điểm
        </h2>
        <Link
          href=""
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.03] hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Giới thiệu
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5 lg:mt-12 lg:gap-7">
        {inspirationItems.map((item) => (
          <article key={item.title} className="min-w-0">
            <Link
              href={item.href}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              <InspirationMedia item={item} title={item.title} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
