"use client";

import Link from "next/link";
import { ArrowUpRight, PackageOpen } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { productCollections } from "./data";
import { ProductCard } from "./product-card";
import type { ProductCollection } from "./types";

interface ProductListProps {
  collections?: readonly ProductCollection[];
}

function EmptyProductState({ label }: { label: string }) {
  return (
    <div className="grid min-h-64 place-items-center rounded-xl border border-dashed border-border px-6 py-12 text-center">
      <div className="max-w-sm">
        <PackageOpen
          aria-hidden="true"
          className="mx-auto size-8 text-muted-foreground"
        />
        <h3 className="mt-4 font-heading text-xl font-medium tracking-tight">
          {label} đang được cập nhật
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Các sản phẩm mới sẽ được hiển thị tại đây trong thời gian sớm nhất.
        </p>
        <Link
          href="/products"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "mt-6",
          })}
        >
          Xem tất cả sản phẩm
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function ProductList({ collections = productCollections }: ProductListProps) {
  const firstCollection = collections[0];

  if (!firstCollection) return null;

  return (
    <section aria-labelledby="home-products-title" className="w-full">
      <h2 id="home-products-title" className="sr-only">
        Sản phẩm nổi bật
      </h2>

      <Tabs defaultValue={firstCollection.id} className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <TabsList
            aria-label="Danh mục sản phẩm"
            variant="line"
            className="min-w-0 flex-1 justify-start gap-6 overflow-x-auto rounded-none p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-9"
          >
            {collections.map((collection) => (
              <TabsTrigger
                key={collection.id}
                value={collection.id}
                className="h-10 flex-none px-0 text-base font-medium sm:text-lg"
              >
                {collection.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <Link
            href="/products"
            className="inline-flex h-10 shrink-0 items-center gap-1 border-b border-foreground text-xs font-medium text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
          >
            Xem tất cả sản phẩm
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>

        {collections.map((collection) => (
          <TabsContent
            key={collection.id}
            value={collection.id}
            className="mt-5 sm:mt-6"
          >
            {collection.products.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {collection.products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <EmptyProductState label={collection.label} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
