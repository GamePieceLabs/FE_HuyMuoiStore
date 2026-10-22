import Image from "next/image";
import Link from "next/link";
import { Eye, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    <article className="group min-w-0 rounded-xl bg-muted/65 p-2 transition-colors duration-300 hover:bg-muted sm:p-2.5">
      <div className="group/image relative aspect-[4/5] overflow-hidden rounded-lg bg-background">
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
            className="object-cover transition-[opacity,transform] duration-500 ease-out group-hover/image:scale-105 group-hover/image:opacity-0 motion-reduce:transition-none motion-reduce:group-hover/image:scale-100 motion-reduce:group-hover/image:opacity-0"
          />
          <Image
            src={secondaryImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 46vw"
            aria-hidden="true"
            className="object-cover opacity-0 transition-transform duration-500 ease-out group-hover/image:scale-105 group-hover/image:opacity-100 motion-reduce:transition-none motion-reduce:group-hover/image:scale-100"
          />
        </Link>

        {product.discount ? (
          <Badge
            variant="destructive"
            className="absolute left-2 top-2 z-10 rounded-sm px-1.5 py-0.5 text-[11px] font-semibold sm:left-3 sm:top-3"
          >
            {product.discount}
          </Badge>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <Link
            href={href}
            className="rounded-full pointer-events-auto inline-flex min-h-9 min-w-70 items-center justify-center gap-1.5 bg-background/95 px-5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Eye aria-hidden="true" className="size-3.5" />
            Xem nhanh
          </Link>
        </div>
      </div>

      <div className="px-1 pb-1 pt-3 sm:pt-4">
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
                  className="size-4 rounded-full border border-border/80 shadow-xs sm:size-[18px]"
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

        <div className="mt-3 flex items-start gap-2">
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
            className="mt-0.5 size-4 shrink-0 stroke-[1.5] text-foreground sm:size-[18px]"
          />
        </div>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground">
          {description}
        </p>

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

        <Link
          href={href}
          className="mt-4 inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-md border border-foreground bg-foreground px-3 text-xs font-medium text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Xem sản phẩm
        </Link>
      </div>
    </article>
  );
}
