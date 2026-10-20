import { BasketShopping3Outlined } from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";

export function Logo() {
  return (
    <div
      aria-label="HM Store"
      className="flex items-center gap-3 xl:basis-3/20 xl:shrink-0 xl:grow-0"
    >
      <span className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Lineicons
          aria-hidden="true"
          className="size-6"
          icon={BasketShopping3Outlined}
          size={24}
          strokeWidth={1.75}
        />
      </span>
      <span className="hidden text-base font-semibold tracking-wide sm:inline">
        Huy Mười Store
      </span>
    </div>
  );
}
