export interface NavigationItem {
  label: string;
  href: string;
  matchPrefixes?: readonly string[];
}

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Sản phẩm",
    href: "/products",
    matchPrefixes: ["/products", "/product"],
  },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
  { label: "Cửa hàng", href: "/stores" },
];

export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
): boolean {
  if (item.href === "/") {
    return pathname === "/";
  }

  const prefixes = item.matchPrefixes ?? [item.href];

  return prefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
