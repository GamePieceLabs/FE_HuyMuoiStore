"use client";

import { ChevronDown, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            aria-label="Chọn ngôn ngữ"
            className="h-9 gap-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            variant="ghost"
          />
        }
      >
        <Languages aria-hidden="true" className="size-4" strokeWidth={1.75} />
        <span>VI</span>
        <ChevronDown aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuRadioGroup defaultValue="vi">
          <DropdownMenuRadioItem value="vi" className="pr-8">
            <span>Tiếng Việt</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="pr-8">
            <span>English</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
