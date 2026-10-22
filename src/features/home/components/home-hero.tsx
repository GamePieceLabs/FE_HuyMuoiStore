import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

interface HomeHeroProps {
  imageUrl?: string;
}

const defaultHeroImage = "/images/home/hero-single-day.jpg";

export function HomeHero({ imageUrl = defaultHeroImage }: HomeHeroProps) {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="w-full bg-background px-[20px]"
    >
      <div className="relative isolate overflow-hidden rounded-4xl bg-muted text-foreground">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center blur-[3px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 -z-10 bg-background/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />

        <div className="mx-auto flex min-h-[min(900px,calc(100svh-48px))] w-full flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:px-12">
          <div className="flex items-start justify-between gap-6 text-xs font-semibold tracking-[0.22em] uppercase">
            <p>HM Store / Campaign 01</p>
            <p className="text-right">
              New season
              <br />
              2026
            </p>
          </div>

          <div className="flex flex-col items-center py-12 text-center">
            <h1
              id="home-hero-title"
              className="font-serif text-[clamp(7rem,24vw,21rem)] leading-[0.7] font-medium tracking-[-0.12em] text-foreground"
            >
              11
              <span className="mx-10 font-sans text-[0.42em] font-light tracking-[-0.08em]">
                /
              </span>
              11
            </h1>
            <p className="mt-8 font-heading text-[clamp(2.75rem,8vw,7rem)] leading-[0.82] font-semibold tracking-[0.04em] uppercase text-foreground sm:mt-10">
              Single&apos;s Day
            </p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-foreground/80 sm:text-base">
              Những thiết kế dễ mặc, dễ phối và đủ khác biệt cho mùa mới.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xs text-sm leading-6 text-foreground/80">
              Ưu đãi đặc biệt cho bộ sưu tập mới. Số lượng có hạn.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "h-12 bg-foreground px-5 text-background hover:bg-foreground/80",
                })}
              >
                Mua ngay
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link
                href="/about-us"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-12 border-foreground/40 bg-background/10 px-5 text-foreground hover:bg-background/30 hover:text-foreground",
                })}
              >
                Khám phá HM Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
