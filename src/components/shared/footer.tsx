import {
  FacebookOutlined,
  InstagramOutlined,
  TiktokOutlined,
  YoutubeOutlined,
} from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FooterAbout } from "./footer/footer-about";
import { FooterLinks } from "./footer/footer-links";
import { FooterLinksSecondary } from "./footer/footer-links-secondary";
import { FooterNewsletter } from "./footer/footer-newsletter";

export function Footer() {
  return (
    <footer className="grid min-h-[500px] grid-rows-[1fr_auto]">
      <div className="hidden grid-cols-12 gap-8 md:grid">
        <div className="col-span-5">
          <FooterNewsletter />
        </div>
        <div className="col-span-2">
          <FooterLinks />
        </div>
        <div className="col-span-2">
          <FooterLinksSecondary />
        </div>
        <div className="col-span-3">
          <FooterAbout />
        </div>
      </div>

      <Accordion multiple className="md:hidden">
        <AccordionItem value="newsletter">
          <AccordionTrigger className="text-lg leading-7 font-semibold tracking-tight">
            Đăng ký nhận bản tin
          </AccordionTrigger>
          <AccordionContent>
            <FooterNewsletter compact />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="links">
          <AccordionTrigger className="text-lg leading-7 font-semibold tracking-tight">
            Liên kết
          </AccordionTrigger>
          <AccordionContent>
            <FooterLinks compact />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="links-secondary">
          <AccordionTrigger className="text-lg leading-7 font-semibold tracking-tight">
            Liên kết 2
          </AccordionTrigger>
          <AccordionContent>
            <FooterLinksSecondary compact />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="about">
          <AccordionTrigger className="text-lg leading-7 font-semibold tracking-tight">
            Giới thiệu
          </AccordionTrigger>
          <AccordionContent>
            <FooterAbout compact />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
