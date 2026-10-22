import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const aboutImageUrl =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_about_img.jpg?v=321";

export function HomeAbout() {
  return (
    <section
      aria-labelledby="home-about-title"
      className="grid items-stretch overflow-hidden rounded-2xl border border-border bg-[#D7F8FB] lg:grid-cols-2 dark:bg-[#3a2e2a]"
    >
      {/* Nội dung bên trái - Màu nền phủ full toàn bộ bên trái */}
      <div className="flex flex-col items-center justify-center px-6 py-6 text-center sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Dịu nhẹ &amp; an toàn
        </p>
        <h2
          id="home-about-title"
          className="mt-2 max-w-md font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Dành riêng cho làn da nhạy cảm
        </h2>
        <p className="mt-3 max-w-md text-xs leading-5 text-muted-foreground sm:text-sm">
          Chúng tôi tạo ra những sản phẩm an toàn, hiệu quả, giúp làn da được
          chăm sóc nhẹ nhàng và luôn thoải mái.
        </p>

        {/* Nút Xem thêm: Nền đen, chữ trắng, rounded-full */}
        <Link
          href="/about-us"
          className="mt-5 inline-flex h-9 items-center gap-2 rounded-full bg-black px-5 text-xs font-medium text-white transition-transform hover:scale-105 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Xem thêm
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </div>

      {/* Khung ảnh bên phải */}
      <div className="group relative h-full max-h-[320px] overflow-hidden bg-muted sm:max-h-[380px] lg:max-h-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={aboutImageUrl}
          alt="Dành riêng cho làn da nhạy cảm"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"
        />
      </div>
    </section>
  );
}
