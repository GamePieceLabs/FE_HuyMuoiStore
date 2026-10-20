import {
  Heart,
  Languages,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const utilityItems = [
  { label: "Yêu thích", icon: Heart },
  { label: "Tìm kiếm", icon: Search },
  { label: "Tài khoản", icon: UserRound },
  { label: "Giỏ hàng", icon: ShoppingBag },
  { label: "Ngôn ngữ", icon: Languages },
];

export function HeaderUtilities() {
  return (
    <ul
      aria-label="Tiện ích"
      className="ml-auto flex items-center justify-end gap-4 sm:gap-5 xl:ml-0 xl:basis-3/20 xl:shrink-0 xl:grow-0 xl:gap-4 2xl:gap-5"
    >
      {utilityItems.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex min-w-6 items-center justify-center text-foreground"
        >
          <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}
