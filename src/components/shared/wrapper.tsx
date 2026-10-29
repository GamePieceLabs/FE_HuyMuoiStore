import type { ReactNode } from "react";
import { cn } from "cn";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className="max-w-[1410px] mx-auto">
      <div
        className={cn(
          "px-[15px] [&>*]:py-10 sm:[&>*]:py-12 md:[&>*]:py-16 lg:[&>*]:py-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
