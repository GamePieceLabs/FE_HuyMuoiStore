"use client";

import { Menu } from "lucide-react";

import { Navbar } from "./navbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            aria-label="Mở menu điều hướng"
            className="size-11 shrink-0 xl:hidden"
            size="icon"
            variant="ghost"
          />
        }
      >
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </SheetTrigger>

      <SheetContent className="w-[min(86vw,22rem)] p-0" side="left">
        <SheetHeader className="border-b border-border px-6 py-5 pr-14">
          <SheetTitle>Huy Mười Store</SheetTitle>
          <SheetDescription className="sr-only">
            Điều hướng chính của cửa hàng
          </SheetDescription>
        </SheetHeader>
        <div className="px-6 py-5">
          <Navbar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
