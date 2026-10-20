"use client";

import { Languages } from "lucide-react";

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
            className="size-11 p-0 text-muted-foreground hover:bg-muted hover:text-foreground"
            variant="ghost"
          />
        }
      >
        <Languages aria-hidden="true" className="size-5" strokeWidth={2} />
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
