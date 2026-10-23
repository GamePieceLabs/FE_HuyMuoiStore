import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const href = product.href ?? `/product/${product.slug}`;
  const hasDiscount = Boolean(product.originalPrice || product.discount);
  const secondaryImage = product.secondaryImage ?? product.image;
  const description =
    product.description ??
    "Thiết kế dễ phối, thoải mái cho phong cách hằng ngày.";

  return (
    <article className="group min-w-0">
      <Card className="min-w-0 gap-0 overflow-hidden rounded-xl border-0 bg-card p-0 text-card-foreground shadow-sm ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-md">
        <div className="group/image relative aspect-[4/5] overflow-hidden rounded-t-xl bg-muted/40">
          <Link
            href={href}
            aria-label={`Xem sản phẩm ${product.name}`}
            className="absolute inset-0 z-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 46vw"
              className="object-cover transition-[opacity,transform] duration-1000 [transition-timing-function:linear,ease-out] group-hover/image:scale-[1.04] group-hover/image:opacity-0 motion-reduce:transition-[opacity] motion-reduce:group-hover/image:scale-100 motion-reduce:group-hover/image:opacity-0"
            />
            <Image
              src={secondaryImage}
              alt=""
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 46vw"
              aria-hidden="true"
              className="object-cover opacity-0 transition-[opacity,transform] duration-1000 [transition-timing-function:linear,ease-out] group-hover/image:scale-[1.04] group-hover/image:opacity-100 motion-reduce:transition-[opacity] motion-reduce:group-hover/image:scale-100"
            />
          </Link>

          {product.discount ? (
            <Badge
              variant="destructive"
              className="absolute left-3 top-3 z-10 rounded-none px-2 py-1 text-[10px] font-semibold uppercase tracking-wide sm:left-4 sm:top-4"
            >
              {product.discount}
            </Badge>
          ) : null}

          <Link
            href={href}
            aria-label={`Xem nhanh sản phẩm ${product.name}`}
            className="absolute right-3 top-3 z-10 inline-flex size-10 scale-0 items-center justify-center rounded-full bg-background/95 text-foreground opacity-0 shadow-sm backdrop-blur-sm will-change-[opacity,scale] [transition-property:opacity,scale] [transition-timing-function:cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.22,1,0.36,1)] [transition-duration:700ms,800ms] [transition-delay:0ms] group-hover/image:scale-100 group-hover/image:opacity-100 group-hover/image:[transition-duration:700ms,800ms] group-hover/image:[transition-delay:100ms] group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:[transition-duration:700ms,800ms] group-focus-within:[transition-delay:100ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:scale-100 motion-reduce:[transition-property:none] sm:right-4 sm:top-4"
          >
            <Search aria-hidden="true" className="size-4" />
          </Link>

          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center px-3">
            <Link
              href={href}
              className="pointer-events-auto rounded-3xl inline-flex min-h-11 font-bold w-full max-w-64 scale-0 items-center justify-center gap-2 bg-background/95 px-5 text-md text-foreground opacity-0 shadow-sm backdrop-blur-sm will-change-[opacity,scale] [transition-property:opacity,scale,background-color] [transition-timing-function:cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.22,1,0.36,1),ease] [transition-duration:700ms,800ms,150ms] [transition-delay:0ms,0ms,0ms] hover:bg-background group-hover/image:scale-100 group-hover/image:opacity-100 group-hover/image:[transition-duration:700ms,800ms,150ms] group-hover/image:[transition-delay:175ms,175ms,0ms] group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:[transition-duration:700ms,800ms,150ms] group-focus-within:[transition-delay:175ms,175ms,0ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:scale-100 motion-reduce:[transition-property:none]"
            >
              Xem nhanh
            </Link>
          </div>
        </div>

        <CardContent className="px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4">
          <div className="flex min-h-5 items-center justify-between gap-2">
            {product.colors?.length ? (
              <div
                className="flex min-w-0 items-center gap-1.5"
                aria-label="Màu sắc sản phẩm"
              >
                {product.colors.map((color, index) => (
                  <span
                    key={`${product.slug}-${color}-${index}`}
                    aria-hidden="true"
                    className="size-[18px] rounded-full border border-border shadow-xs transition-transform hover:scale-110 sm:size-5"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {product.additionalColors ? (
                  <span className="text-xs font-medium text-muted-foreground">
                    +{product.additionalColors}
                  </span>
                ) : null}
              </div>
            ) : (
              <span />
            )}
            {product.sizesLabel ? (
              <span className="shrink-0 text-[11px] font-medium text-muted-foreground sm:text-xs">
                {product.sizesLabel}
              </span>
            ) : null}
          </div>

          <div className="mt-2 flex items-start gap-2">
            <h3 className="min-w-0 flex-1 text-sm leading-5 font-medium text-foreground sm:text-[15px] sm:leading-5">
              <Link
                href={href}
                className="line-clamp-2 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {product.name}
              </Link>
            </h3>
            <Heart
              aria-hidden="true"
              className="mt-0.5 size-[18px] shrink-0 stroke-[1.5] text-muted-foreground transition-colors group-hover:text-foreground sm:size-5"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 tabular-nums">
            <span
              className={cn(
                "text-sm font-semibold sm:text-base",
                hasDiscount ? "text-destructive" : "text-foreground",
              )}
            >
              {product.price}
            </span>
            {product.originalPrice ? (
              <span className="text-xs text-muted-foreground line-through sm:text-sm">
                {product.originalPrice}
              </span>
            ) : null}
          </div>

          <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
