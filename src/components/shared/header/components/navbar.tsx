"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  isNavigationItemActive,
  navigationItems,
} from "../data/navigation-items";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Điều hướng chính"
      className="hidden min-w-0 flex-1 lg:block"
    >
      <ul className="relative flex items-center gap-x-5 gap-y-2 text-sm font-medium xl:gap-x-6">
        {navigationItems
          .filter(({ mobileOnly }) => !mobileOnly)
          .map(({ label, href }) => {
            const isActive = isNavigationItemActive(pathname, href);

            return (
              <li key={href} className="whitespace-nowrap">
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative block py-2 text-md font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none",
                    isActive && "text-foreground [anchor-name:--active-nav-item]",
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
          className="pointer-events-none absolute bottom-0 h-px bg-foreground [left:anchor(left)] [position-anchor:--active-nav-item] [width:anchor-size(width)] transition-[left,width] duration-300 ease-out motion-reduce:transition-none"
        />
      </ul>
    </nav>
  );
}
