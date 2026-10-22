import { Check } from "lucide-react";

const policies = [
  "Miễn phí vận chuyển",
  "Đảm bảo hoàn tiền",
  "Thanh toán linh hoạt",
  "Hỗ trợ trực tuyến",
  "Đổi trả trong 7 ngày",
] as const;

export function PolicyList() {
  return (
    <section
      aria-label="Chính sách HM Store"
      className="w-full"
    >
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {policies.map((policy) => (
          <li
            key={policy}
            className="flex min-h-20 items-center gap-3 rounded-lg border border-border bg-card px-4 py-4 shadow-sm transition-colors hover:bg-muted/40 sm:justify-center sm:px-3 lg:py-5"
          >
            <Check
              aria-hidden="true"
              className="size-5 shrink-0 text-foreground"
              strokeWidth={2}
            />
            <span className="text-sm font-medium text-foreground">
              {policy}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
