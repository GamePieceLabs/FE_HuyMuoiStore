"use client";

import { useState } from "react";
import { ArrowDownAZ, Check, ChevronDown } from "lucide-react";

const sortOptions = [
  "Giá: Tăng dần",
  "Giá: Giảm dần",
  "Tên: A-Z",
  "Tên: Z-A",
  "Cũ nhất",
  "Mới nhất",
  "Bán chạy nhất",
  "Tồn kho giảm dần",
] as const;

export function ProductsSort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<(typeof sortOptions)[number]>(
    "Mới nhất",
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="products-sort-options"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 items-center gap-2 font-heading text-base font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ArrowDownAZ aria-hidden="true" className="size-5" />
        <span>Sắp xếp</span>
        <ChevronDown
          aria-hidden="true"
          className={`ml-3 size-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id="products-sort-options"
        role="listbox"
        aria-label="Sắp xếp sản phẩm"
        hidden={!isOpen}
        className="absolute top-full right-0 z-30 w-72 border border-border bg-background py-2 shadow-lg"
      >
        {sortOptions.map((option) => {
          const isSelected = option === selectedOption;

          return (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="flex min-h-11 w-full items-center gap-3 px-4 text-left text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
            >
              <span className="flex size-5 shrink-0 items-center justify-center text-primary">
                {isSelected ? (
                  <Check aria-hidden="true" className="size-4" />
                ) : null}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
