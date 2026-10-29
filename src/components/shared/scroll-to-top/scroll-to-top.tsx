"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 400;
const COMPLETE_THRESHOLD = 0.99;
const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const visible = window.scrollY > SCROLL_THRESHOLD;

      setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);
      setIsVisible(visible);

      // Đã cuộn về đầu trang -> reset để lần sau hiện lại bình thường
      if (!visible) setIsClicked(false);

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isClicked) return;

    event.currentTarget.blur();
    setIsClicked(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const isHidden = !isVisible || isClicked;
  const isComplete = progress >= COMPLETE_THRESHOLD;

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            aria-hidden={isHidden}
            aria-label="Cuộn lên đầu trang"
            className={cn(
              "group fixed bottom-5 right-4 z-40 size-12 rounded-full border-0 p-0 shadow-lg shadow-black/10 backdrop-blur-md",
              "transition-[opacity,transform,background-color,color,box-shadow] duration-300 ease-out",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "active:scale-95 sm:bottom-7 sm:right-7 motion-reduce:transition-none",
              // Màu nền / chữ: đầy trang -> đen + trắng
              isComplete
                ? "bg-black text-white hover:bg-black/85 hover:text-white hover:shadow-xl dark:bg-black dark:hover:bg-black/85"
                : "bg-background/95 text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/25",
              // Hiện / ẩn
              isClicked
                ? "pointer-events-none scale-0 opacity-0"
                : isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none translate-y-3 scale-95 opacity-0",
            )}
            onClick={scrollToTop}
            size="icon"
            tabIndex={isHidden ? -1 : 0}
            type="button"
            variant="outline"
          />
        }
      >
        {/* Sóng lan tỏa khi cuộn tới cuối trang */}
        {isComplete && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-black/40 motion-safe:animate-ping"
          />
        )}

        {/* Vòng tiến độ cuộn trang: mờ dần và biến mất khi đầy */}
        <svg
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 size-full -rotate-90 transition-opacity duration-300 motion-reduce:transition-none",
            isComplete ? "opacity-0" : "opacity-100",
          )}
          viewBox="0 0 48 48"
        >
          <circle
            className="stroke-border"
            cx="24"
            cy="24"
            fill="none"
            r={RING_RADIUS}
            strokeWidth="2"
          />
          <circle
            className="stroke-primary transition-[stroke-dashoffset] duration-150 ease-linear motion-reduce:transition-none"
            cx="24"
            cy="24"
            fill="none"
            r={RING_RADIUS}
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>

        <ArrowUp
          aria-hidden="true"
          className={cn(
            "relative size-5 transition-transform duration-300 ease-out motion-reduce:transition-none",
            isComplete
              ? "motion-safe:animate-bounce"
              : "group-hover:-translate-y-0.5",
          )}
          strokeWidth={2}
        />
      </TooltipTrigger>
      <TooltipContent side="left" sideOffset={10}>
        Lên đầu trang
      </TooltipContent>
    </Tooltip>
  );
}
