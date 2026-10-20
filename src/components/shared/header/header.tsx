import { HeaderTopbar } from "./header-topbar";
import { HeaderUtilities } from "./header-utilities";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="border-b border-border bg-background text-foreground">
      <HeaderTopbar />

      <div className="mx-13 flex flex-wrap items-center gap-x-6 gap-y-4 px-3.75 py-4 xl:h-16.25 xl:flex-nowrap xl:gap-0 xl:py-0">
        <Logo />
        <Navbar />
        <HeaderUtilities />
      </div>
    </header>
  );
}
