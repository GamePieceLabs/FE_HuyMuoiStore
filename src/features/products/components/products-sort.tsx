"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownAZ, Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [selectedOption, setSelectedOption] =
    useState<(typeof sortOptions)[number]>("Mới nhất");
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 160);
  };

  useEffect(() => cancelClose, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        onMouseEnter={() => {
          cancelClose();
          setIsOpen(true);
        }}
        onMouseLeave={scheduleClose}
        render={
          <Button
            variant="ghost"
            className="h-11 gap-1.5 px-2 font-heading text-sm font-semibold md:gap-2 md:px-3 md:text-base lg:h-10"
          />
        }
      >
        <ArrowDownAZ aria-hidden="true" className="size-4 md:size-5" />
        <span>Sắp xếp</span>
        <ChevronDown
          aria-hidden="true"
          className={`ml-1 size-3.5 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none md:ml-2 md:size-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={4}
        aria-label="Sắp xếp sản phẩm"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className="w-64 p-1.5 duration-200 data-open:slide-in-from-top-1 data-closed:slide-out-to-top-1 motion-reduce:animate-none md:w-72"
      >
        {sortOptions.map((option) => {
          const isSelected = option === selectedOption;

          return (
            <DropdownMenuItem
              key={option}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="min-h-9 cursor-pointer gap-2.5 px-3 text-xs font-medium md:min-h-10 md:px-4 md:text-sm"
            >
              <span className="flex size-4 shrink-0 items-center justify-center text-primary md:size-5">
                {isSelected ? (
                  <Check aria-hidden="true" className="size-3.5 md:size-4" />
                ) : null}
              </span>
              <span className="truncate">{option}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
