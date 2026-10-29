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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Filter option data
const categoryFilterGroup = {
  id: "category",
  label: "Danh mục",
  type: "category",
  options: [
    {
      label: "Sản phẩm khuyến mãi",
      href: "/products?category=sale",
    },
    {
      label: "Sản phẩm nổi bật",
      href: "/products?category=featured",
    },
    { label: "Tất cả sản phẩm", href: "/products" },
  ],
} as const;

const vendorFilterGroup = {
  id: "vendor",
  label: "Nhà cung cấp",
  type: "checkbox",
  options: ["Khác", "Mode Fashion"],
} as const;

const typeFilterGroup = {
  id: "type",
  label: "Loại",
  type: "checkbox",
  options: ["Khác"],
} as const;

const sizeFilterGroup = {
  id: "size",
  label: "Kích thước",
  type: "checkbox",
  options: ["14 x 20 cm", "15 x 23 cm", "13 x 18 cm"],
} as const;

const priceFilterGroup = {
  id: "price",
  label: "Lọc giá",
  type: "checkbox",
  options: [
    "Dưới 1.000.000₫",
    "1.000.000₫ - 2.000.000₫",
    "2.000.000₫ - 3.000.000₫",
    "3.000.000₫ - 4.000.000₫",
    "Trên 4.000.000₫",
  ],
} as const;

const colorFilterGroup = {
  id: "color",
  label: "Màu sắc",
  type: "color",
  options: [
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
  ],
} as const;

const tagsFilterGroup = {
  id: "tags",
  label: "Tags",
  type: "tags",
  options: ["Design", "External", "Fashion", "Item", "Sale", "Simple"],
} as const;

const filterGroups = [
  categoryFilterGroup,
  vendorFilterGroup,
  typeFilterGroup,
  sizeFilterGroup,
  priceFilterGroup,
  colorFilterGroup,
  tagsFilterGroup,
] as const;

type FilterPanelProps = {
  idPrefix: string;
  onClose: () => void;
  onOpenAccordionItemsChange: (items: string[]) => void;
  openAccordionItems: string[];
};

function FilterPanel({
  idPrefix,
  onClose,
  onOpenAccordionItemsChange,
  openAccordionItems,
}: FilterPanelProps) {
  return (
    <>
      <Accordion
        multiple
        value={openAccordionItems}
        onValueChange={onOpenAccordionItemsChange}
        aria-label="Các nhóm bộ lọc sản phẩm"
      >
        {filterGroups.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="border-0 not-last:border-b-0"
          >
            <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2 font-heading text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:text-foreground">
              {group.label}
            </AccordionTrigger>
            <AccordionContent
              className={
                group.type === "category"
                  ? "pb-3 [&_a]:no-underline [&_a]:hover:no-underline"
                  : "pb-3"
              }
            >
              {group.type === "category" && (
                <nav aria-label="Danh mục sản phẩm" className="space-y-1">
                  {group.options.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="flex min-h-8 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {category.label}
                    </Link>
                  ))}
                </nav>
              )}

              {group.type === "checkbox" && (
                <div className="space-y-1">
                  {group.options.map((option, index) => {
                    const optionId = `${idPrefix}-${group.id}-${index}`;

                    return (
                      <label
                        key={option}
                        htmlFor={optionId}
                        className="flex min-h-8 cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Checkbox
                          id={optionId}
                          className="border-0 bg-muted"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {group.type === "color" && (
                <div className="flex flex-wrap gap-1.5">
                  {group.options.map((color) => {
                    const colorId = `${idPrefix}-color-${color.id}`;

                    return (
                      <label
                        key={color.id}
                        htmlFor={colorId}
                        className="group flex size-10 cursor-pointer items-center justify-center"
                        title={color.label}
                      >
                        <Checkbox
                          id={colorId}
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
                    );
                  })}
                </div>
              )}

              {group.type === "tags" && (
                <div className="flex flex-wrap gap-1.5">
                  {group.options.map((tag, index) => {
                    const tagId = `${idPrefix}-tags-${index}`;

                    return (
                      <label
                        key={tag}
                        htmlFor={tagId}
                        className="cursor-pointer"
                      >
                        <Checkbox
                          id={tagId}
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
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {openAccordionItems.length > 0 && (
        <div className="grid grid-cols-2 gap-2 pt-4">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={onClose}
            className="min-h-11 border-0"
          >
            Hủy
          </Button>
          <Button
            type="button"
            size="lg"
            onClick={onClose}
            className="min-h-11 border-0"
          >
            Áp dụng
          </Button>
        </div>
      )}
    </>
  );
}

export function ProductsFilter() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openAccordionItems, setOpenAccordionItems] = useState<string[]>(() => [
    ...filterGroups.map((group) => group.id),
  ]);

  return (
    <>
      <div className="relative w-0 shrink-0 lg:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Mở bộ lọc sản phẩm"
                className="absolute top-10 left-[15px] z-10 inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-heading text-base font-bold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:top-12 md:top-16"
              />
            }
          >
            <SlidersHorizontal aria-hidden="true" className="size-5" />
            Bộ lọc
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[min(88vw,22rem)] gap-0 p-0"
          >
            <SheetHeader className="border-b border-border px-5 py-5 pr-14">
              <SheetTitle className="text-lg font-semibold">
                Bộ lọc sản phẩm
              </SheetTitle>
              <SheetDescription>
                Chọn các tiêu chí để thu hẹp danh sách sản phẩm.
              </SheetDescription>
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
              <FilterPanel
                idPrefix="mobile-filter"
                openAccordionItems={openAccordionItems}
                onOpenAccordionItemsChange={setOpenAccordionItems}
                onClose={() => setIsMobileOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <aside
        className={`relative hidden shrink-0 pt-10 transition-[width] duration-300 ease-out lg:block ${isDesktopOpen ? "sticky top-25 w-80" : "w-0"}`}
      >
        <div className={`h-11 ${isDesktopOpen ? "w-full" : "w-0"}`}>
          <button
            type="button"
            aria-expanded={isDesktopOpen}
            aria-controls="products-filter-content"
            onClick={() => setIsDesktopOpen((open) => !open)}
            className="absolute top-10 left-[15px] inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-heading text-base font-bold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <SlidersHorizontal aria-hidden="true" className="size-5" />
            Bộ lọc
          </button>
        </div>

        <div
          id="products-filter-content"
          hidden={!isDesktopOpen}
          className="mt-4 w-80 px-[15px] pb-6"
        >
          <FilterPanel
            idPrefix="desktop-filter"
            openAccordionItems={openAccordionItems}
            onOpenAccordionItemsChange={setOpenAccordionItems}
            onClose={() => setIsDesktopOpen(false)}
          />
        </div>
      </aside>
    </>
  );
}
