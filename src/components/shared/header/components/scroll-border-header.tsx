"use client";

import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ScrollBorderHeaderProps {
  children: ReactNode;
}

export function ScrollBorderHeader({ children }: ScrollBorderHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background text-foreground transition-colors",
        isScrolled ? "border-border" : "border-transparent",
      )}
    >
      {children}
    </header>
  );
}
