import Link from "next/link";

const links = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Chi tiết", href: "/product/slug-id" },
  { label: "Blog", href: "/blogs" },
  { label: "Giới thiệu", href: "/about-us" },
  { label: "Cửa hàng", href: "/stores" },
  { label: "Chính sách", href: "/policies" },
];

export function FooterLinks({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className="basis-2/12"
      aria-labelledby="footer-links-title"
    >
      <h2
        id="footer-links-title"
        className={
          compact ? "sr-only" : "text-lg leading-7 font-semibold tracking-tight"
        }
      >
        Liên kết
      </h2>
      <ul className={compact ? "space-y-3" : "mt-6 space-y-3"}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-base leading-7 text-foreground transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
