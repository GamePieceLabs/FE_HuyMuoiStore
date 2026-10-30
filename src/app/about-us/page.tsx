import { TiktokShowcase } from "@/components/shared/tiktok-showcase";
import { AboutFaqs } from "@/features/about-us/components/about-faqs";
import { AboutIntro } from "@/features/about-us/components/about-intro";
import { AboutValues } from "@/features/about-us/components/about-values";

export default function AboutUsPage() {
  return (
    <>
      <AboutIntro />
      <AboutValues />
      <AboutFaqs />
      <TiktokShowcase />
    </>
  );
}
