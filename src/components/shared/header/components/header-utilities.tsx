import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

import { LanguageSelector } from "@/components/shared/language-selector";

const utilityItems = [
  { label: "Yêu thích", icon: Heart },
  { label: "Tìm kiếm", icon: Search },
  { label: "Tài khoản", icon: UserRound },
  { label: "Giỏ hàng", icon: ShoppingBag },
];

export function HeaderUtilities() {
  return (
    <ul
      aria-label="Tiện ích"
      className="ml-auto flex shrink-0 items-center justify-end"
    >
      {utilityItems.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex size-11 items-center justify-center rounded-md text-foreground transition-colors duration-200 ease-out hover:bg-muted focus-within:bg-muted motion-reduce:transition-none"
        >
          <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
          <span className="sr-only">{label}</span>
        </li>
      ))}
      <li className="hidden size-11 items-center justify-center text-foreground xl:flex">
        <LanguageSelector />
      </li>
    </ul>
  );
}
