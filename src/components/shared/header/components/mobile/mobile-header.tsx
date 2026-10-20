import { HeaderUtilities } from "../header-utilities";
import { Logo } from "../logo";
import { MobileNavigation } from "./mobile-navigation";

export function MobileHeader() {
  return (
    <div className="flex items-center gap-2 px-3.75 py-3 md:gap-3 md:px-6 md:py-4 xl:hidden">
      <MobileNavigation />
      <Logo />
      <HeaderUtilities showLanguage={false} />
    </div>
  );
}
