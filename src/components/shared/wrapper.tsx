import type { ReactNode } from "react";
import { cn } from "cn";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className={cn(
          "mx-0 px-4 sm:mx-6 sm:px-6 md:mx-12 md:px-20 lg:mx-[115px] lg:px-10 xl:px-5 [&>*]:py-10 sm:[&>*]:py-12 md:[&>*]:py-16 lg:[&>*]:py-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
