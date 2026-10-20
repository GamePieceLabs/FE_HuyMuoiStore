import { HeaderTopbar } from "./header-topbar";
import { Navbar } from "./navbar";
import { HeaderUtilities } from "./header-utilities";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="border-b border-border bg-background text-foreground">
      <HeaderTopbar />
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-2 px-4 py-3 sm:px-6 md:gap-3 md:px-20 md:py-4 lg:px-10 xl:mx-13 xl:w-auto xl:max-w-none xl:px-3.75 xl:h-16.25 xl:gap-0 xl:py-0">
        <MobileNavigation />
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </header>
  );
}
