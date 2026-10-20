import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

import type { HomeProduct } from "../types/home-product";

interface HomeProductCardProps {
  product: HomeProduct;
}

export function HomeProductCard({ product }: HomeProductCardProps) {
  const href = product.href ?? `/product/${product.slug}`;

  return (
    <article className="group min-w-0">
      <Link
        href={href}
        aria-label={`Xem sản phẩm ${product.name}`}
        className="block overflow-hidden rounded-[1.25rem] bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          {product.badge ? (
            <Badge
              variant="secondary"
              className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur-sm"
            >
              {product.badge}
            </Badge>
          ) : null}
        </AspectRatio>
      </Link>

      <div className="mt-4 space-y-2">
        <h3 className="font-heading text-base leading-tight font-medium tracking-tight sm:text-lg">
          <Link
            href={href}
            className="transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {product.name}
          </Link>
        </h3>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm tabular-nums">
          <span className="font-semibold text-foreground">{product.price}</span>
          {product.originalPrice ? (
            <span className="text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
