"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const desktopBannerImage =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/collection_breadcrumb_bg_dk.jpg";
const mobileBannerImage =
  "https://cdn.hstatic.net/themes/200001170195/1001480974/14/collection_breadcrumb_bg_mb.jpg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProductsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax nền + mờ dần nội dung khi cuộn
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const productList = document.getElementById("btn-scroll");
    if (!productList) return;

    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const productListTop =
      productList.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(productListTop - headerHeight, 0),
      behavior: reduceMotion ? "instant" : "smooth",
    });

    window.history.replaceState(null, "", "#btn-scroll");
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="products-page-title"
      className="relative isolate h-80 w-full overflow-hidden sm:h-96"
    >
      {/* Nền: zoom-out nhẹ khi vào + parallax khi cuộn */}
      <motion.div
        style={reduceMotion ? undefined : { y: bgY }}
        className="absolute inset-x-0 -top-[20%] -z-20 h-[140%]"
      >
        <motion.div
          initial={{ scale: reduceMotion ? 1 : 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="relative size-full"
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileBannerImage} />
            <source media="(min-width: 768px)" srcSet={desktopBannerImage} />
            <Image
              src={desktopBannerImage}
              alt=""
              fill
              sizes="100vw"
              priority
              unoptimized
              className="object-cover"
            />
          </picture>
        </motion.div>
      </motion.div>

      {/* Overlay gradient: chữ dễ đọc hơn bg-black/35 phẳng */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/25 to-black/50"
      />

      <motion.div
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex w-full max-w-[1410px] flex-col items-center px-4 py-12 text-center text-white">
          <motion.h1
            id="products-page-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Tất cả sản phẩm
          </motion.h1>

          {/* Đường kẻ mảnh mở rộng từ giữa */}
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-5 block h-px w-16 origin-center bg-white/70"
          />

          {/* Nút cuộn */}
          <motion.a
            href="#btn-scroll"
            aria-label="Cuộn đến danh sách sản phẩm"
            onClick={handleScroll}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            whileTap={{ scale: 0.95 }}
            className="group mt-8 flex flex-col items-center gap-3 focus-visible:outline-none"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80 transition-colors group-hover:text-white">
              Khám phá
            </span>

            <span className="relative flex size-14 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-black group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black/50">
              {/* Một vòng ring lan tỏa duy nhất */}
              {!reduceMotion && (
                <motion.span
                  aria-hidden="true"
                  animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border border-white/70"
                />
              )}

              {/* Mũi tên nhún nhẹ */}
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown aria-hidden="true" className="size-6" />
              </motion.span>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
