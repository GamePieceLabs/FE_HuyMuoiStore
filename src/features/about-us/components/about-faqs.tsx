import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aboutFaqs = [
  {
    id: "shipping-time",
    question: "Thời gian giao hàng thế nào?",
    answer:
      "Thời gian giao hàng thường từ 2–5 ngày làm việc tùy khu vực. Với đơn hàng nội thành, thời gian có thể nhanh hơn.",
  },
  {
    id: "packaging",
    question: "Sản phẩm có được đóng gói cẩn thận không?",
    answer:
      "Tất cả sản phẩm đều được đóng gói kỹ lưỡng, đảm bảo an toàn trong quá trình vận chuyển và giữ nguyên chất lượng khi đến tay bạn.",
  },
  {
    id: "international-shipping",
    question: "Có giao hàng quốc tế không?",
    answer:
      "Có, chúng tôi hỗ trợ giao hàng quốc tế đến nhiều quốc gia. Thời gian và chi phí vận chuyển sẽ tùy thuộc vào địa điểm nhận hàng.",
  },
  {
    id: "payment-methods",
    question: "Có những phương thức thanh toán nào?",
    answer:
      "Chúng tôi hỗ trợ nhiều hình thức thanh toán như: thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng, ví điện tử và thẻ tín dụng.",
  },
] as const;

export function AboutFaqs() {
  return (
    <section
      aria-labelledby="about-faqs-title"
      className="grid w-full items-stretch border-y border-border bg-background lg:grid-cols-2"
    >
      <div className="relative min-h-80 overflow-hidden bg-muted sm:min-h-112 lg:min-h-160">
        <Image
          src="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_faqs_img.jpg"
          alt="Tư vấn và giải đáp câu hỏi thường gặp của Dressly"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="w-full max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Câu hỏi thường gặp
          </p>
          <h2
            id="about-faqs-title"
            className="mt-3 max-w-xl font-heading text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Bạn có câu hỏi khác? Chúng tôi sẵn sàng tư vấn qua hotline: 1900 630
            000
          </h2>

          <Accordion
            aria-label="Câu hỏi thường gặp"
            defaultValue={["shipping-time"]}
            className="mt-8 border-t border-border sm:mt-10"
          >
            {aboutFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-border"
              >
                <AccordionTrigger className="min-h-16 items-center rounded-none border-0 py-4 text-base leading-6 font-semibold hover:no-underline focus-visible:border-0 sm:min-h-18 sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground sm:pr-8 sm:text-base sm:leading-7">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
