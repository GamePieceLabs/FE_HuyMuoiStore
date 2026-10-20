import type { NavigationItem } from "../types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/", isActive: true },
  { label: "Sản phẩm", href: "/products" },
  { label: "Chi tiết", href: "/product/slug-id" },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
];
