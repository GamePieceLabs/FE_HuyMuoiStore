import { HeaderTopbar } from "./header-topbar";
import { Navbar } from "./navbar";
import { HeaderUtilities } from "./header-utilities";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="border-b border-border bg-background text-foreground">
      <HeaderTopbar />
      <div className="sm:mx-13 flex items-center gap-2 px-3.75 py-3 md:gap-3 md:py-4 xl:h-16.25 xl:gap-0 xl:py-0">
        <MobileNavigation />
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </header>
  );
}
