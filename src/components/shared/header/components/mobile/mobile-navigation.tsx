"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { LanguageSelector } from "@/components/shared/language-selector";
import { cn } from "@/lib/utils";
import { navigationItems } from "../../data/navigation-items";
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
          <div className="flex items-center justify-between gap-4">
            <SheetTitle>Huy Mười Store</SheetTitle>
            <LanguageSelector />
          </div>
          <SheetDescription className="sr-only">
            Điều hướng chính của cửa hàng
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 py-4">
          <nav aria-label="Điều hướng chính">
            <ul className="flex flex-col gap-1">
              {navigationItems.map(({ label, href, isActive = false }) => (
                <li key={href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-md px-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive && "bg-muted font-semibold",
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
