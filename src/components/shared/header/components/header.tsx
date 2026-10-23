import { HeaderTopbar } from "./header-topbar";
import { Navbar } from "./navbar";
import { HeaderUtilities } from "./header-utilities";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";
import { ScrollBorderHeader } from "./scroll-border-header";

export function Header() {
  return (
    <ScrollBorderHeader>
      <HeaderTopbar />
      <div className="mx-auto flex w-full max-w-[1770px] items-center gap-2 px-[15px] py-3 sm:gap-4 sm:py-4 lg:gap-8 lg:py-5">
        <MobileNavigation />
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </ScrollBorderHeader>
  );
}
