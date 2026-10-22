import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="w-full">
      <div className="mx-0 px-4 sm:mx-6 sm:px-6 md:mx-12 md:px-20 lg:mx-[115px] lg:px-10 xl:px-5 [&>*]:py-10 sm:[&>*]:py-12 md:[&>*]:py-16 lg:[&>*]:py-10">
        {children}
      </div>
    </div>
  );
}
