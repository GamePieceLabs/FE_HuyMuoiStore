"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const SHOW_DELAY = 400;

interface StickyHeaderProps {
  children: ReactNode;
}

export function StickyHeader({ children }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(true);
  const lastScrollY = useRef(0);
  const showTimeout = useRef<number | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      if (currentScrollY <= 0) {
        if (showTimeout.current) {
          window.clearTimeout(showTimeout.current);
          showTimeout.current = null;
        }

        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } else if (isScrollingDown) {
        if (showTimeout.current) {
          window.clearTimeout(showTimeout.current);
          showTimeout.current = null;
        }

        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }
      } else if (isScrollingUp && !isVisibleRef.current && !showTimeout.current) {
        showTimeout.current = window.setTimeout(() => {
          isVisibleRef.current = true;
          setIsVisible(true);
          showTimeout.current = null;
        }, SHOW_DELAY);
      }

      lastScrollY.current = currentScrollY;
      animationFrame.current = null;
    };

    const handleScroll = () => {
      if (animationFrame.current === null) {
        animationFrame.current = window.requestAnimationFrame(updateVisibility);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (showTimeout.current) {
        window.clearTimeout(showTimeout.current);
      }

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transform border-b border-border bg-background text-foreground transition-transform duration-300 ease-out will-change-transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </div>
  );
}
