import { Mail } from "lucide-react";

export function FooterAbout({ compact = false }: { compact?: boolean }) {
  return (
    <section className="basis-3/12" aria-labelledby="footer-about-title">
      <h2
        id="footer-about-title"
        className={
          compact ? "sr-only" : "text-lg leading-7 font-semibold tracking-tight"
        }
      >
        Giới thiệu
      </h2>
      <p
        className={
          compact
            ? "text-base leading-7 text-muted-foreground"
            : "mt-6 text-base leading-7 text-foreground"
        }
      >
        Chúng tôi tuyển chọn sản phẩm chất lượng, mang đến trải nghiệm mua sắm
        đơn giản và đáng tin cậy mỗi ngày.
      </p>
      <a
        href="mailto:hello@hmstore.vn"
        className="mt-0 sm:mt-5 inline-flex items-center gap-2 text-base leading-7 font-medium text-foreground transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Mail aria-hidden="true" className="size-4" />
        hello@hmstore.vn
      </a>
    </section>
  );
}
