"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navigationListVariants: Variants = {
  closed: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
  open: {
    transition: { delayChildren: 0.12, staggerChildren: 0.045 },
  },
};

const navigationItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

export function MobileNavigation() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const closeNavigation = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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

      <SheetContent
        className="w-[75vw]! max-w-none! p-0 duration-[420ms]! ease-[cubic-bezier(0.22,1,0.36,1)]!"
        overlayClassName="bg-black/30! duration-[420ms]! supports-backdrop-filter:backdrop-blur-none!"
        side="left"
      >
        <SheetHeader className="border-b border-border bg-muted/30 px-5 py-5 pr-14">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <SheetTitle className="truncate text-2xl font-semibold tracking-tight">
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
            <p className="mb-2 px-3 text-lg font-bold uppercase tracking-[0.16em] text-black">
              Khám phá
            </p>
            <motion.ul
              animate={reduceMotion ? "open" : isOpen ? "open" : "closed"}
              className="flex flex-col gap-1"
              initial={reduceMotion ? false : "closed"}
              variants={navigationListVariants}
            >
              {navigationItems
                .filter(({ mobileOnly }) => !mobileOnly)
                .map(({ label, href }) => {
                  const isActive = isNavigationItemActive(pathname, href);

                  return (
                    <motion.li
                      key={href}
                      variants={navigationItemVariants}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    >
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex min-h-10 items-center justify-between rounded-lg px-3 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none",
                          isActive &&
                            "bg-foreground text-background hover:bg-foreground/90",
                        )}
                        href={href}
                        onClick={closeNavigation}
                      >
                        <span>{label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className={cn(
                            "size-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none",
                            isActive && "text-background/70",
                          )}
                          strokeWidth={1.75}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
            </motion.ul>

            <p className="mb-2 mt-8 px-3 text-lg font-bold text-black uppercase tracking-[0.16em]">
              Thông tin
            </p>
            <motion.ul
              animate={reduceMotion ? "open" : isOpen ? "open" : "closed"}
              className="flex flex-col gap-1"
              initial={reduceMotion ? false : "closed"}
              variants={navigationListVariants}
            >
              {navigationItems
                .filter(({ mobileOnly }) => mobileOnly)
                .map(({ label, href }) => {
                  const isActive = isNavigationItemActive(pathname, href);

                  return (
                    <motion.li
                      key={href}
                      variants={navigationItemVariants}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    >
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none",
                          isActive &&
                            "bg-foreground text-background hover:bg-foreground/90",
                        )}
                        href={href}
                        onClick={closeNavigation}
                      >
                        <span>{label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className={cn(
                            "size-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none",
                            isActive && "text-background/70",
                          )}
                          strokeWidth={1.75}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
            </motion.ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
