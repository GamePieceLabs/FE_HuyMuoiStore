import { DesktopHeader } from "./desktop/desktop-header";
import { MobileHeader } from "./mobile/mobile-header";

export function Header() {
  return (
    <header className="border-b border-border bg-background text-foreground">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
