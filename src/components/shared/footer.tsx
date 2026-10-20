import {
  FacebookOutlined,
  InstagramOutlined,
  TiktokOutlined,
  YoutubeOutlined,
} from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { FooterAbout } from "./footer/footer-about";
import { FooterLinks } from "./footer/footer-links";
import { FooterLinksSecondary } from "./footer/footer-links-secondary";
import { FooterNewsletter } from "./footer/footer-newsletter";

export function Footer() {
  return (
    <footer className="flex h-[500px] flex-col">
      <div className="flex flex-row justify-center gap-8 ">
        <FooterNewsletter />
        <FooterLinks />
        <FooterLinksSecondary />
        <FooterAbout />
      </div>
      <div className="mt-auto flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2026 Huy Muoi. Powered by NextJS</p>
        <div className="flex items-center gap-4" aria-label="Mạng xã hội">
          <Lineicons icon={FacebookOutlined} size={20} aria-label="Facebook" />
          <Lineicons
            icon={InstagramOutlined}
            size={20}
            aria-label="Instagram"
          />
          <Lineicons icon={TiktokOutlined} size={20} aria-label="TikTok" />
          <Lineicons icon={YoutubeOutlined} size={20} aria-label="YouTube" />
        </div>
      </div>
    </footer>
  );
}
