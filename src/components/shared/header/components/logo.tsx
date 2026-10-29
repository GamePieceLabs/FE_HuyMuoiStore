import Link from "next/link";

export function Logo() {
  return (
    <Link
      aria-label="Về trang chủ HM Store"
      className="flex min-w-0 flex-1 items-center rounded-sm outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none sm:flex-none"
      href="/"
    >
      <span className="text-base font-semibold leading-tight tracking-wide sm:whitespace-nowrap sm:text-lg lg:text-xl xl:text-2xl">
        Huy Mười Store
      </span>
    </Link>
  );
}
