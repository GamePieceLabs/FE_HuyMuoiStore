import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { products } from "@/components/shared/products/data";
import { ProductCard } from "@/components/shared/products/product-card";
import type { Product } from "@/components/shared/products/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productSliders = [
  { id: "featured", label: "Nổi bật", products: products.slice(0, 3) },
  { id: "best-selling", label: "Bán chạy", products: products.slice(3, 6) },
  { id: "sale", label: "Khuyến mãi", products: products.slice(0, 3) },
] as const;

const officeFashionVideo = {
  src: "https://cdn.hstatic.net/files/200001170195/file/clip01.mp4",
  poster:
    "//cdn.hstatic.net/themes/200001170195/1001490675/14/loomline_index_col_slide1_1_banner_img.jpg?v=476",
};

function HomeProductSlider({
  id,
  label,
  products: sliderProducts,
}: {
  id: string;
  label: string;
  products: readonly Product[];
}) {
  return (
    <section aria-labelledby={`${id}-title`}>
      <Carousel
        aria-label={`Sản phẩm ${label.toLowerCase()}`}
        className="w-full min-w-0"
        opts={{ align: "start", loop: true }}
      >
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
          <div className="min-w-0">
            <h3
              id={`${id}-title`}
              className="font-heading text-2xl leading-tight font-medium tracking-tight text-foreground sm:text-3xl"
            >
              {label}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <CarouselPrevious
              aria-label={`Xem ${label.toLowerCase()} trước`}
              className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
            />
            <CarouselNext
              aria-label={`Xem ${label.toLowerCase()} tiếp theo`}
              className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
            />
          </div>
        </div>

        <CarouselContent className="-ml-3">
          {sliderProducts.map((product) => (
            <CarouselItem
              key={product.slug}
              className="basis-[82%] pl-3 sm:basis-1/2"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export function HomeStyleShowcase() {
  return (
    <section aria-labelledby="home-style-showcase-title" className="w-full">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="home-style-showcase-title"
          className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl"
        >
          Chăm sóc bản thân, bắt đầu từ làn da
          <br className="hidden sm:block" />
          Vẻ đẹp hòa quyện trong bạn
        </h2>
        <Link
          href="/products"
          className="mt-6 inline-flex min-h-11 items-center gap-1 border-b border-foreground px-1 text-sm font-medium text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Xem tất cả sản phẩm
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
        <article className="group relative min-h-[520px] overflow-hidden rounded-2xl bg-muted text-white sm:min-h-[600px] lg:sticky lg:top-35 lg:self-start">
          <video
            aria-label="Thời trang văn phòng"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loop
            muted
            playsInline
            poster={officeFashionVideo.poster}
            preload="metadata"
          >
            <source src={officeFashionVideo.src} type="video/mp4" />
          </video>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-center sm:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
              Thời trang văn phòng
            </p>
            <h3 className="mt-3 font-heading text-3xl leading-none font-medium tracking-tight sm:text-4xl">
              Để bạn luôn rạng rỡ trong công việc
            </h3>
            <Link
              href="/products"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white px-7 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Xem thêm
            </Link>
          </div>
        </article>

        <div className="min-w-0 space-y-10 pt-1">
          {productSliders.map((slider) => (
            <HomeProductSlider
              key={slider.id}
              id={slider.id}
              label={slider.label}
              products={slider.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
