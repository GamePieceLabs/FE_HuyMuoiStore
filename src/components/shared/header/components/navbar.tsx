"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  isNavigationItemActive,
  navigationItems,
} from "../data/navigation-items";

export function Navbar() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const list = listRef.current;
      const activeLink = activeLinkRef.current;

      if (!list || !activeLink) return;

      const listRect = list.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicator({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <nav
      aria-label="Điều hướng chính"
      className="pl-10 hidden w-full md:block md:flex-1 xl:basis-7/10 xl:shrink-0 xl:grow-0"
    >
      <ul
        ref={listRef}
        className="relative flex items-center gap-x-5 gap-y-2 text-sm font-medium xl:gap-x-6"
      >
        {navigationItems
          .filter(({ mobileOnly }) => !mobileOnly)
          .map(({ label, href }) => {
            const isActive = isNavigationItemActive(pathname, href);

            return (
              <li key={href} className="whitespace-nowrap">
                <Link
                  ref={isActive ? activeLinkRef : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative block py-2 text-md font-medium text-foreground transition-[font-weight] duration-300 hover:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive && "font-semibold",
                  )}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 h-[1px] bg-foreground transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </ul>
    </nav>
  );
}
