import type { NavigationItem } from "../types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/", isActive: true },
  { label: "Sản phẩm", href: "/products" },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
  { label: "Cửa hàng", href: "/stores", mobileOnly: true },
  { label: "Chính sách", href: "/policies", mobileOnly: true },
];
