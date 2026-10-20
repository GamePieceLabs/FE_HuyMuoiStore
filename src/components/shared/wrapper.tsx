import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="py-[80px]">
      <div className="mx-[245px] px-[15px]">{children}</div>
    </div>
  );
}
