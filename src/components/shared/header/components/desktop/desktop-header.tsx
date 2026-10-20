import { HeaderTopbar } from "./header-topbar";
import { Navbar } from "./navbar";
import { HeaderUtilities } from "../header-utilities";
import { Logo } from "../logo";

export function DesktopHeader() {
  return (
    <div className="hidden xl:block">
      <HeaderTopbar />
      <div className="mx-13 flex h-16.25 items-center px-3.75">
        <Logo />
        <div className="basis-7/10 shrink-0 grow-0">
          <Navbar />
        </div>
        <HeaderUtilities />
      </div>
    </div>
  );
}
