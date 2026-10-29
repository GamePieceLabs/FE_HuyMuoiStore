import Link from "next/link";

const links = [
  { label: "Sản phẩm khuyến mãi", href: "/products" },
  { label: "Sản phẩm nổi bật", href: "/products" },
  { label: "Tất cả sản phẩm", href: "/products" },
];

export function FooterLinksSecondary({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className="basis-2/12"
      aria-labelledby="footer-links-secondary-title"
    >
      <h2
        id="footer-links-secondary-title"
        className={
          compact ? "sr-only" : "text-lg leading-7 font-semibold tracking-tight"
        }
      >
        Liên kết 2
      </h2>
      <ul className={compact ? "space-y-3" : "mt-6 space-y-3"}>
        {links.map(({ label, href }) => (
          <li key={label}>
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
