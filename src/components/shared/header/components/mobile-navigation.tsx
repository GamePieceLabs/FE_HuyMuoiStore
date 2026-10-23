"use client";

import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSelector } from "@/components/shared/language-selector";
import { cn } from "@/lib/utils";
import {
  isNavigationItemActive,
  navigationItems,
} from "../data/navigation-items";
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
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            aria-label="Mở menu điều hướng"
            className="size-11 shrink-0 lg:hidden"
            size="icon"
            variant="ghost"
          />
        }
      >
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </SheetTrigger>

      <SheetContent className="w-[min(72vw,18rem)] p-0" side="left">
        <SheetHeader className="border-b border-border bg-muted/30 px-5 py-5 pr-14">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <SheetTitle className="truncate text-lg font-semibold tracking-tight">
                Huy Mười Store
              </SheetTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Khám phá phong cách của bạn
              </p>
            </div>
            <LanguageSelector />
          </div>
          <SheetDescription className="sr-only">
            Điều hướng chính của cửa hàng
          </SheetDescription>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-5">
          <nav aria-label="Điều hướng chính">
            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Khám phá
            </p>
            <ul className="flex flex-col gap-1">
              {navigationItems
                .filter(({ mobileOnly }) => !mobileOnly)
                .map(({ label, href }) => {
                  const isActive = isNavigationItemActive(pathname, href);

                  return (
                    <li key={href}>
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isActive &&
                            "bg-foreground text-background hover:bg-foreground/90",
                        )}
                        href={href}
                      >
                        <span>{label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className={cn(
                            "size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5",
                            isActive && "text-background/70",
                          )}
                          strokeWidth={1.75}
                        />
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <p className="mb-2 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Thông tin
            </p>
            <ul className="flex flex-col gap-1">
              {navigationItems
                .filter(({ mobileOnly }) => mobileOnly)
                .map(({ label, href }) => {
                  const isActive = isNavigationItemActive(pathname, href);

                  return (
                    <li key={href}>
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isActive &&
                            "bg-foreground text-background hover:bg-foreground/90",
                        )}
                        href={href}
                      >
                        <span>{label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className={cn(
                            "size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5",
                            isActive && "text-background/70",
                          )}
                          strokeWidth={1.75}
                        />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
