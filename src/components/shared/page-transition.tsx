"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion !== false) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    void controls.start({
      opacity: [0, 1],
      y: [24, 0],
      transition: { delay: 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    });

    return () => controls.stop();
  }, [pathname, controls, shouldReduceMotion]);

  return (
    <motion.div initial={false} animate={controls} className={className}>
      {children}
    </motion.div>
  );
}
