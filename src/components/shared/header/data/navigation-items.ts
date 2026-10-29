import type { NavigationItem } from "../types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
  { label: "Cửa hàng", href: "/stores", mobileOnly: true },
  { label: "Chính sách", href: "/policies", mobileOnly: true },
];

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
