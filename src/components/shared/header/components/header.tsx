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
      <div className="w-full mx-auto px-[15px] max-w-[1770px] flex items-center h-[66.5px]">
        <MobileNavigation />
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </ScrollBorderHeader>
  );
}
