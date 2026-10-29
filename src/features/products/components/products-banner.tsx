"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const desktopBannerImage =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/collection_breadcrumb_bg_dk.jpg";
const mobileBannerImage =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/collection_breadcrumb_bg_mb.jpg";

export function ProductsBanner() {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.setTimeout(() => {
      const productList = document.querySelector("#btn-scroll");
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      productList?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", "#btn-scroll");
    }, 150);
  };

  return (
    <section
      aria-labelledby="products-page-title"
      className="relative isolate h-80 w-full overflow-hidden sm:h-96"
    >
      <div className="absolute inset-0 -z-20">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileBannerImage} />
          <source media="(min-width: 768px)" srcSet={desktopBannerImage} />
          <Image
            src={desktopBannerImage}
            alt=""
            fill
            sizes="100vw"
            priority
            unoptimized
            className="object-cover"
          />
        </picture>
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/35" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex w-full max-w-[1410px] flex-col items-center px-4 py-12 text-center text-white">
          <h1
            id="products-page-title"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Tất cả sản phẩm
          </h1>
          <a
            href="#btn-scroll"
            aria-label="Cuộn đến danh sách sản phẩm"
            onClick={handleScroll}
            className="mt-4 inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
          >
            <ChevronDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
