"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Filter option data
const filterGroups = [
  {
    id: "vendor",
    label: "Nhà cung cấp",
    options: ["Khác", "Mode Fashion"],
  },
  {
    id: "type",
    label: "Loại",
    options: ["Khác"],
  },
  {
    id: "size",
    label: "Kích thước",
    options: ["14 x 20 cm", "15 x 23 cm", "13 x 18 cm"],
  },
  {
    id: "price",
    label: "Lọc giá",
    options: [
      "Dưới 1.000.000₫",
      "1.000.000₫ - 2.000.000₫",
      "2.000.000₫ - 3.000.000₫",
      "3.000.000₫ - 4.000.000₫",
      "Trên 4.000.000₫",
    ],
  },
] as const;

const categoryOptions = [
  {
    label: "Sản phẩm khuyến mãi",
    href: "/products?category=sale",
    current: false,
  },
  {
    label: "Sản phẩm nổi bật",
    href: "/products?category=featured",
    current: false,
  },
  { label: "Tất cả sản phẩm", href: "/products", current: true },
] as const;

const tagOptions = [
  "Design",
  "External",
  "Fashion",
  "Item",
  "Sale",
  "Simple",
] as const;

const colorOptions = [
  { id: "black", label: "Đen", value: "#111111" },
  { id: "white", label: "Trắng", value: "#ffffff" },
  { id: "gray", label: "Xám", value: "#808080" },
  { id: "beige", label: "Be", value: "#f5f5dc" },
  { id: "cream", label: "Kem", value: "#fffdd0" },
  { id: "brown", label: "Nâu", value: "#964b00" },
  { id: "navy", label: "Xanh navy", value: "#000080" },
  { id: "blue", label: "Xanh dương", value: "#1757eb" },
  { id: "green", label: "Xanh lá", value: "#099116" },
  { id: "pink", label: "Hồng", value: "#f23895" },
  { id: "red", label: "Đỏ", value: "#ff0000" },
  { id: "dark-red", label: "Đỏ đô", value: "#8b0000" },
  { id: "yellow", label: "Vàng", value: "#ffff00" },
  { id: "orange", label: "Cam", value: "#ffa500" },
  { id: "purple", label: "Tím", value: "#800080" },
] as const;

export function ProductsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordionItems, setOpenAccordionItems] = useState<string[]>(() => [
    "category",
    ...filterGroups.map((group) => group.id),
    "color",
    "tags",
  ]);

  return (
    <aside
      className={`sticky top-0 z-10 shrink-0 self-start pt-10 transition-[width] duration-300 ease-out sm:pt-12 md:pt-16 lg:pt-10 ${isOpen ? "w-72 sm:w-80" : "w-0"}`}
    >
      {/* Filter toggle */}
      <div className={`h-11 ${isOpen ? "w-full" : "w-0"}`}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="products-filter-content"
          onClick={() => setIsOpen((open) => !open)}
          className="absolute top-10 left-[15px] inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-heading text-base font-bold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:top-12 md:top-16 lg:top-10"
        >
          <SlidersHorizontal aria-hidden="true" className="size-5" />
          Bộ lọc
        </button>
      </div>

      {/* Filter groups */}
      <div
        id="products-filter-content"
        hidden={!isOpen}
        className="mt-4 w-72 px-[15px] pb-6 sm:w-80"
      >
        <Accordion
          multiple
          value={openAccordionItems}
          onValueChange={setOpenAccordionItems}
          aria-label="Các nhóm bộ lọc sản phẩm"
        >
          {/* Categories */}
          <AccordionItem
            value="category"
            className="border-0 not-last:border-b-0"
          >
            <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2 font-heading text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:text-foreground">
              Danh mục
            </AccordionTrigger>
            <AccordionContent className="pb-3 [&_a]:no-underline [&_a]:hover:no-underline">
              <nav aria-label="Danh mục sản phẩm" className="space-y-1">
                {categoryOptions.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    aria-current={category.current ? "page" : undefined}
                    className={`flex min-h-8 items-center text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${category.current ? "font-medium text-foreground" : "text-muted-foreground"}`}
                  >
                    {category.label}
                  </Link>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>

          {/* Product attributes */}
          {filterGroups.map((group) => (
            <AccordionItem
              key={group.id}
              value={group.id}
              className="border-0 not-last:border-b-0"
            >
              <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2 font-heading text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:text-foreground">
                {group.label}
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-1">
                  {group.options.map((option, index) => {
                    const optionId = `${group.id}-${index}`;

                    return (
                      <label
                        key={option}
                        htmlFor={optionId}
                        className="flex min-h-8 cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Checkbox id={optionId} className="border-0 bg-muted" />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Colors */}
          <AccordionItem
            value="color"
            className="border-0 not-last:border-b-0"
          >
            <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2 font-heading text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:text-foreground">
              Màu sắc
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="flex flex-wrap gap-1.5">
                {colorOptions.map((color) => (
                  <label
                    key={color.id}
                    htmlFor={`color-${color.id}`}
                    className="group flex size-10 cursor-pointer items-center justify-center"
                    title={color.label}
                  >
                    <Checkbox
                      id={`color-${color.id}`}
                      aria-label={color.label}
                      className="peer sr-only border-0"
                    />
                    <span
                      aria-hidden="true"
                      className="size-7 rounded-md transition-transform group-hover:scale-110 peer-focus-visible:scale-110 peer-data-checked:scale-75"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="sr-only">{color.label}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tags */}
          <AccordionItem
            value="tags"
            className="border-0 not-last:border-b-0"
          >
            <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2 font-heading text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:text-foreground">
              Tags
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <div className="flex flex-wrap gap-1.5">
                {tagOptions.map((tag, index) => (
                  <label
                    key={tag}
                    htmlFor={`tags-${index}`}
                    className="cursor-pointer"
                  >
                    <Checkbox
                      id={`tags-${index}`}
                      aria-label={tag}
                      className="peer sr-only border-0"
                    />
                    <Badge
                      variant="secondary"
                      className="h-8 rounded-lg border-0 px-3 text-sm peer-data-checked:bg-foreground peer-data-checked:text-background"
                    >
                      {tag}
                    </Badge>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Filter actions */}
        {openAccordionItems.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setIsOpen(false)}
              className="min-h-11 border-0"
            >
              Hủy
            </Button>
            <Button
              type="button"
              size="lg"
              onClick={() => setIsOpen(false)}
              className="min-h-11 border-0"
            >
              Áp dụng
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
