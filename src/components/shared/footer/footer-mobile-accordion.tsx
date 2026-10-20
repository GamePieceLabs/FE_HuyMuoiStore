import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FooterAbout } from "./footer-about";
import { FooterLinks } from "./footer-links";
import { FooterLinksSecondary } from "./footer-links-secondary";
import { FooterNewsletter } from "./footer-newsletter";

const accordionItems = [
  {
    value: "newsletter",
    label: "Đăng ký nhận bản tin",
    content: <FooterNewsletter compact />,
  },
  {
    value: "links",
    label: "Liên kết",
    content: <FooterLinks compact />,
  },
  {
    value: "links-secondary",
    label: "Liên kết 2",
    content: <FooterLinksSecondary compact />,
  },
  {
    value: "about",
    label: "Giới thiệu",
    content: <FooterAbout compact />,
  },
];

export function FooterMobileAccordion() {
  return (
    <Accordion multiple className="md:hidden">
      {accordionItems.map(({ value, label, content }) => (
        <AccordionItem
          key={value}
          value={value}
          className="p-5 [&>[data-slot=accordion-content]]:data-open:[animation-duration:300ms] [&>[data-slot=accordion-content]]:data-open:[animation-timing-function:cubic-bezier(0.16,1,0.3,1)] [&>[data-slot=accordion-content]]:data-closed:[animation-duration:200ms] [&>[data-slot=accordion-content]]:data-closed:[animation-timing-function:ease-in]"
        >
          <AccordionTrigger className="text-2xl leading-7 font-semibold tracking-tight hover:no-underline">
            {label}
          </AccordionTrigger>
          <AccordionContent className="[&_a]:no-underline [&_a]:hover:no-underline">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
