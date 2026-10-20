import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="m-0 px-[15px] sm:mx-[245px]">
        {children}
      </div>
    </div>
  );
}
