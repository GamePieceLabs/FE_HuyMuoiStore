import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-20 lg:px-10 xl:px-12">
        {children}
      </div>
    </div>
  );
}
