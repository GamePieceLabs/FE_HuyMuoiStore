import Image from "next/image";
import Link from "next/link";
import { Heart, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const IMAGE_SIZES =
  "(min-width: 1280px) 23vw, (min-width: 1024px) 24vw, (min-width: 640px) 32vw, 46vw";

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const href = product.href ?? `/product/${product.slug}`;
  const hasDiscount = Boolean(product.originalPrice || product.discount);
  const secondaryImage = product.secondaryImage ?? product.image;
  const description =
    product.description ??
    "Thiết kế dễ phối, thoải mái cho phong cách hằng ngày.";

  const quickViewProps = onQuickView
    ? { onClick: () => onQuickView(product) }
    : {};

  return (
    <Card
      className={cn(
        "group min-w-0 gap-0 overflow-hidden rounded-xl",
        "border-border/60 bg-card py-0 shadow-sm",
        "transition-shadow duration-300 hover:shadow-lg",
      )}
    >
      {/* Media */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/40">
        <Link
          href={href}
          aria-label={`Xem sản phẩm ${product.name}`}
          className={cn(
            "absolute inset-0 z-0 block",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-inset",
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={IMAGE_SIZES}
            className={cn(
              "object-cover transition-opacity duration-500 ease-out",
              "group-hover:opacity-0 group-hover:delay-250",
              "group-focus-within:opacity-0 group-focus-within:delay-250",
              "motion-reduce:transition-none",
            )}
          />
          <Image
            src={secondaryImage}
            alt=""
            aria-hidden="true"
            fill
            sizes={IMAGE_SIZES}
            className={cn(
              "object-cover opacity-0 transition-opacity duration-500 ease-out",
              "group-hover:opacity-100 group-hover:delay-250",
              "group-focus-within:opacity-100 group-focus-within:delay-250",
              "motion-reduce:transition-none",
            )}
          />
        </Link>

        {product.discount ? (
          <Badge
            variant="destructive"
            className={cn(
              "absolute left-3 top-3 z-10 rounded-sm",
              "px-1.5 py-0.5 text-[11px] font-semibold",
            )}
          >
            {product.discount}
          </Badge>
        ) : null}

        {/* Nút kính lúp: trượt từ phải sang */}
        <Link
          href={href}
          aria-label={`Xem nhanh ${product.name}`}
          {...quickViewProps}
          className={cn(
            "absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-background text-foreground shadow-sm",
            "translate-x-6 opacity-0 transition-all duration-500 ease-out",
            "hover:bg-foreground hover:text-background",
            "group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-[250ms]",
            "group-focus-within:translate-x-0 group-focus-within:opacity-100 group-focus-within:delay-[250ms]",
            "[@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-100",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "motion-reduce:transition-none motion-reduce:translate-x-0",
          )}
        >
          <Search aria-hidden="true" className="size-5" />
        </Link>

        {/* Pill "Xem nhanh" */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10">
          <Link
            href={href}
            {...quickViewProps}
            className={cn(
              "pointer-events-auto flex h-10 w-full items-center justify-center rounded-full bg-background/95 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm",
              "translate-y-3 scale-95 opacity-0 transition-all duration-500 ease-out",
              "hover:bg-background",
              "group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[350ms]",
              "group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:delay-[350ms]",
              "[@media(hover:none)]:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "motion-reduce:transition-none",
            )}
          >
            Xem nhanh
          </Link>
        </div>
      </div>

      {/* Info */}
      <CardContent className="space-y-2 px-3 pb-4 pt-3 sm:px-4">
        {product.colors?.length ? (
          <div
            className="flex min-h-5 items-center gap-1.5"
            aria-label="Màu sắc sản phẩm"
          >
            {product.colors.map((color, index) => (
              <span
                key={`${product.slug}-${color}-${index}`}
                aria-hidden="true"
                className="size-4 rounded-full border border-border/80 shadow-xs"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.additionalColors ? (
              <span className="text-xs font-medium text-muted-foreground">
                +{product.additionalColors}
              </span>
            ) : null}
            {product.sizesLabel ? (
              <span className="ml-auto shrink-0 text-xs font-medium text-muted-foreground">
                {product.sizesLabel}
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-start gap-2">
          <h3 className="min-w-0 flex-1 text-sm font-medium leading-5 text-foreground">
            <Link
              href={href}
              className={cn(
                "line-clamp-2 transition-opacity hover:opacity-70",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
            >
              {product.name}
            </Link>
          </h3>
          <button
            type="button"
            aria-label="Thêm vào yêu thích"
            className={cn(
              "mt-0.5 shrink-0 text-foreground transition-colors",
              "hover:text-destructive focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <Heart aria-hidden="true" className="size-[18px] stroke-[1.5]" />
          </button>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2 tabular-nums">
          <span
            className={cn(
              "text-sm font-semibold sm:text-base",
              hasDiscount ? "text-destructive" : "text-foreground",
            )}
          >
            {product.price}
          </span>
          {product.originalPrice ? (
            <span className="text-xs text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          ) : null}
        </div>

        <p className="line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
