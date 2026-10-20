import Link from "next/link";

import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Trang chủ", href: "/", isActive: true },
  { label: "Sản phẩm", href: "/products" },
  { label: "Chi tiết", href: "/product/slug-id" },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
];

export function Navbar() {
  return (
    <nav
      aria-label="Điều hướng chính"
      className="w-full xl:basis-7/10 xl:shrink-0 xl:grow-0"
    >
      <ul className="flex items-center gap-x-5 gap-y-2 text-sm font-medium xl:gap-x-6">
        {navigationItems.map(({ label, href, isActive = false }) => (
          <li key={href} className="whitespace-nowrap">
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "font-medium text-md relative block py-2 text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-foreground after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100",
                isActive
                  ? "font-semibold after:scale-x-100"
                  : "after:scale-x-0",
              )}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
