"use client";

import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import type { HomeProductCollection } from "../types/home-product";
import { HomeProductCard } from "./home-product-card";

const defaultCollections: readonly HomeProductCollection[] = [
  { id: "featured", label: "Nổi bật", products: [] },
  { id: "best-selling", label: "Bán chạy", products: [] },
  { id: "sale", label: "Khuyến mãi", products: [] },
];

interface HomeProductTabsProps {
  collections?: readonly HomeProductCollection[];
}

function EmptyProductState({ label }: { label: string }) {
  return (
    <div className="grid min-h-64 place-items-center border-y border-dashed border-border px-6 py-12 text-center">
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
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function HomeProductTabs({
  collections = defaultCollections,
}: HomeProductTabsProps) {
  const firstCollection = collections[0];

  if (!firstCollection) return null;

  return (
    <section
      aria-labelledby="home-products-title"
      className="w-full border-y border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Curated for you
            </p>
            <h2
              id="home-products-title"
              className="mt-3 max-w-xl font-heading text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl"
            >
              Những lựa chọn nổi bật
            </h2>
          </div>
          <Link
            href="/products"
            className={buttonVariants({
              variant: "link",
              size: "lg",
              className: "w-fit px-0",
            })}
          >
            Xem tất cả
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <Tabs defaultValue={firstCollection.id} className="mt-12 sm:mt-14">
          <TabsList
            aria-label="Danh mục sản phẩm nổi bật"
            variant="line"
            className="w-full justify-start gap-6 overflow-x-auto rounded-none border-b border-border p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-8"
          >
            {collections.map((collection) => (
              <TabsTrigger
                key={collection.id}
                value={collection.id}
                className="h-12 flex-none px-0 text-sm sm:text-base"
              >
                {collection.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {collections.map((collection) => (
            <TabsContent
              key={collection.id}
              value={collection.id}
              className="mt-9 sm:mt-10"
            >
              {collection.products.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
                  {collection.products.map((product) => (
                    <HomeProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <EmptyProductState label={collection.label} />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
