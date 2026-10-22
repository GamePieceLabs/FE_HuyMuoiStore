"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, PackageOpen } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { ProductCard } from "./product-card";
import type { ProductCollection } from "./types";

interface ProductListProps {
  tabs: readonly ProductCollection[];
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

export function ProductList({ tabs }: ProductListProps) {
  const firstTab = tabs[0];
  const [activeTab, setActiveTab] = useState(firstTab?.id ?? "");
  const tabsListRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const tabsList = tabsListRef.current;
      const activeTabElement = activeTabRef.current;

      if (!tabsList || !activeTabElement) return;

      const tabsListRect = tabsList.getBoundingClientRect();
      const activeTabRect = activeTabElement.getBoundingClientRect();

      tabsList.style.setProperty(
        "--tabs-indicator-left",
        `${activeTabRect.left - tabsListRect.left}px`,
      );
      tabsList.style.setProperty(
        "--tabs-indicator-width",
        `${activeTabRect.width}px`,
      );
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  if (!firstTab) return null;

  return (
    <section aria-labelledby="home-products-title" className="w-full">
      <h2 id="home-products-title" className="sr-only">
        Sản phẩm nổi bật
      </h2>

      <Tabs
        defaultValue={firstTab.id}
        onValueChange={(value) => {
          if (value) setActiveTab(value);
        }}
        className="w-full"
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <TabsList
            ref={tabsListRef}
            aria-label="Danh mục sản phẩm"
            variant="line"
            className="relative min-w-0 flex-1 justify-start gap-6 overflow-x-auto rounded-none p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-9"
          >
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                ref={tab.id === activeTab ? activeTabRef : undefined}
                value={tab.id}
                className="h-10 flex-none px-0 text-base font-medium after:hidden sm:text-lg"
              >
                {tab.label}
              </TabsTrigger>
            ))}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-[var(--tabs-indicator-left)] h-0.5 w-[var(--tabs-indicator-width)] bg-foreground transition-[left,width] duration-300 ease-out"
            />
          </TabsList>

          <Link
            href="/products"
            className="inline-flex h-10 shrink-0 items-center gap-1 border-b border-foreground text-xs font-medium text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
          >
            Xem tất cả sản phẩm
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="mt-5 sm:mt-6"
          >
            {tab.products.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {tab.products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <EmptyProductState label={tab.label} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
