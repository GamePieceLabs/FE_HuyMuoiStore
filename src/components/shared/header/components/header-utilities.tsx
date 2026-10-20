import {
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";

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
      className="ml-auto flex items-center justify-end gap-2 sm:gap-3 xl:ml-0 xl:basis-3/20 xl:shrink-0 xl:grow-0 xl:gap-4 2xl:gap-5"
    >
      {utilityItems.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-within:bg-muted"
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
