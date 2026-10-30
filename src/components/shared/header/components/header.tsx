"use client";

import { useState, useEffect, useRef } from "react";
import { HeaderTopbar } from "./header-topbar";
import { Navbar } from "./navbar";
import { HeaderUtilities } from "./header-utilities";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

type Phase = "idle" | "hiding" | "done";

const SCROLL_THRESHOLD = 10;
const SHOW_DELAY = 100;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const phaseRef = useRef<Phase>("idle");
  const lastScrollYRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const clearHideTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleScroll = () => {
      const y = window.scrollY;
      const isScrollingDown = y > lastScrollYRef.current;
      lastScrollYRef.current = y;

      setIsScrolled(y > SCROLL_THRESHOLD);

      if (y <= SCROLL_THRESHOLD) {
        clearHideTimer();
        setIsHidden(false);
        phaseRef.current = "idle";
        return;
      }

      if (phaseRef.current === "done") return;

      if (phaseRef.current === "idle") {
        if (!isScrollingDown) return;
        phaseRef.current = "hiding";
        setIsHidden(true);
      }

      clearHideTimer();
      timeoutRef.current = setTimeout(() => {
        setIsHidden(false);
        phaseRef.current = "done";
      }, SHOW_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearHideTimer();
    };
  }, []);

  return (
    <div
      data-site-header
      className={`sticky top-0 z-50 bg-white transition-transform duration-500 ease-in-out ${
        /* 
          - duration-700: Thời gian trượt lên/xuống kéo dài 0.7 giây (giúp chuyển động chậm và mượt hơn). 
            Nếu vẫn còn nhanh, bạn có thể đổi thành duration-1000 (1 giây).
          - ease-in-out: Giúp hiệu ứng có gia tốc (bắt đầu chậm, nhanh ở giữa và chậm dần khi dừng).
        */
        isScrolled ? "shadow-2xl" : "shadow-none"
      } ${
        isHidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <HeaderTopbar />
      <div className="mx-auto flex w-full max-w-[1770px] items-center gap-2 px-[15px] py-3 sm:gap-4 sm:py-4 lg:gap-8 lg:py-5">
        <MobileNavigation />
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </div>
  );
}
