"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";

const filterGroups = [
  {
    id: "category",
    label: "Danh mục",
    options: [
      "Sản phẩm khuyến mãi",
      "Sản phẩm nổi bật",
      "Tất cả sản phẩm",
    ],
  },
  {
    id: "vendor",
    label: "Nhà cung cấp",
    options: ["Khác", "Mode Fashion"],
  },
  {
    id: "type",
    label: "Loại",
    options: ["Áo", "Quần", "Váy", "Phụ kiện"],
  },
  {
    id: "size",
    label: "Kích thước",
    options: ["S", "M", "L", "XL"],
  },
  {
    id: "price",
    label: "Lọc giá",
    options: [
      "Dưới 200.000₫",
      "200.000₫ - 500.000₫",
      "500.000₫ - 1.000.000₫",
      "Trên 1.000.000₫",
    ],
  },
] as const;

const colorOptions = [
  { id: "black", label: "Đen", value: "#111111" },
  { id: "white", label: "Trắng", value: "#ffffff" },
  { id: "pink", label: "Hồng", value: "#f23895" },
  { id: "blue", label: "Xanh dương", value: "#1757eb" },
  { id: "green", label: "Xanh lá", value: "#099116" },
  { id: "brown", label: "Nâu", value: "#964b00" },
] as const;

export function ProductsFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`relative z-10 shrink-0 pt-10 transition-[width] duration-300 ease-out sm:pt-12 md:pt-16 lg:pt-10 ${isOpen ? "w-72 sm:w-80" : "w-0"}`}
    >
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

      <div
        id="products-filter-content"
        hidden={!isOpen}
        className="mt-6 w-72 border-r border-border px-[15px] pb-8 sm:w-80"
      >
        <div className="space-y-8">
          {filterGroups.map((group) => (
            <fieldset key={group.id}>
              <legend className="mb-4 font-heading text-base font-semibold text-foreground">
                {group.label}
              </legend>
              <div className="space-y-3">
                {group.options.map((option, index) => {
                  const optionId = `${group.id}-${index}`;

                  return (
                    <label
                      key={option}
                      htmlFor={optionId}
                      className="flex min-h-8 cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Checkbox id={optionId} />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <fieldset>
            <legend className="mb-4 font-heading text-base font-semibold text-foreground">
              Màu sắc
            </legend>
            <div className="space-y-3">
              {colorOptions.map((color) => (
                <label
                  key={color.id}
                  htmlFor={`color-${color.id}`}
                  className="group flex min-h-8 cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Checkbox
                    id={`color-${color.id}`}
                    aria-label={color.label}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className="size-7 rounded-full border border-border ring-offset-2 transition-shadow group-hover:ring-2 group-hover:ring-foreground/30 peer-data-checked:ring-2 peer-data-checked:ring-foreground"
                    style={{ backgroundColor: color.value }}
                  />
                  <span>{color.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </aside>
  );
}
