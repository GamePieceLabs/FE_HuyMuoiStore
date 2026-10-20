import { ArrowRight, ArrowRightCircleIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export function FooterNewsletter({ compact = false }: { compact?: boolean }) {
  return (
    <section className="basis-5/12" aria-labelledby="footer-newsletter-title">
      <h2
        id="footer-newsletter-title"
        className={
          compact
            ? "sr-only"
            : "text-2xl leading-8 font-semibold tracking-tight"
        }
      >
        Đăng ký nhận bản tin
      </h2>
      <p className="mt-6 max-w-md text-base leading-7 text-foreground">
        Nhận thông tin mới nhất và ưu đãi độc quyền từ chúng tôi.
      </p>
      <div className="relative mt-5 max-w-md">
        <label className="sr-only" htmlFor="footer-email">
          Email của bạn
        </label>
        <Input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Nhập email của bạn"
          className="h-12 rounded-full bg-muted px-5 pr-10 text-base border-none ring-0 placeholder:text-black placeholder:font-medium"
        />
        <ArrowRightCircleIcon
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
