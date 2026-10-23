import { MapPinned, ShieldCheck } from "lucide-react";
import Link from "next/link";

const secondaryLinks = [
  { label: "Cửa hàng", href: "/stores", icon: MapPinned },
  { label: "Chính sách", href: "/policies", icon: ShieldCheck },
];

export function HeaderTopbar() {
  return (
    <div className="hidden bg-black text-white xl:block">
      <nav aria-label="Liên kết hỗ trợ" className="mx-13 px-3.75">
        <ul className="flex h-9 items-center justify-end gap-1 text-xs font-medium tracking-wide">
          {secondaryLinks.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                className="group relative flex h-7 items-center gap-2 rounded-sm px-2.5 text-white/75 transition-colors after:absolute after:inset-x-2.5 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform after:duration-200 hover:bg-white/10 hover:text-white hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-1 focus-visible:ring-offset-black focus-visible:after:scale-x-100"
                href={href}
              >
                <span className="flex size-5 items-center justify-center rounded-sm bg-white/10 text-white/70 transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <Icon
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={1.75}
                  />
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
