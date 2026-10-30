import Image from "next/image";

import { MarqueeBar } from "@/components/shared/marquee-bar";
import { Wrapper } from "@/components/shared/wrapper";

type AboutValueSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

function AboutValueSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
}: AboutValueSectionProps) {
  const imageBlock = (
    <div className="col-span-12 lg:col-span-6">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );

  const contentBlock = (
    <div className="col-span-12 m-15 lg:col-span-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          {eyebrow}
        </p>
        <h2 className="text-2xl leading-tight font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="pt-2 text-base leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <Wrapper>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
            {imagePosition === "left" ? (
              <>
                {imageBlock}
                {contentBlock}
              </>
            ) : (
              <>
                {contentBlock}
                {imageBlock}
              </>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export function AboutValues() {
  return (
    <>
      <AboutValueSection
        eyebrow="CHÚNG TÔI LUÔN TẠO NÊN XU HƯỚNG MỚI"
        title="Chúng tôi tập trung vào chất lượng hơn số lượng"
        description="Mỗi sản phẩm may mặc đều được chế tác có chủ đích—không có gì bị lãng phí, không có gì thừa thãi. Cam kết của chúng tôi đối với thiết kế chu đáo có nghĩa là ưu tiên những đường nét tinh tế, kiểu dáng đa năng và những chi tiết nhẹ nhàng giúp tôn lên vẻ đẹp mà không làm lu mờ chúng. Đây là những món đồ bạn sẽ mặc đi mặc lại nhiều lần vì chúng đơn giản là hiệu quả."
        image="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_about_3_img.jpg"
        imageAlt="Chúng tôi tập trung vào chất lượng hơn số lượng"
        imagePosition="left"
      />

      <MarqueeBar />

      <AboutValueSection
        eyebrow="DRESSLY MANG LẠI"
        title="Sự tự tin, giá trị và tính cách của bạn"
        description="Trang phục của chúng tôi được tạo ra để hòa nhập vào cuộc sống của bạn một cách liền mạch – dù bạn đang dạo bước trên đường phố, gặp gỡ bạn bè hay chỉ đơn giản là tận hưởng những khoảnh khắc yên tĩnh ở nhà."
        image="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_about_4_img.jpg"
        imageAlt="Chúng tôi tập trung vào chất lượng hơn số lượng"
        imagePosition="right"
      />
    </>
  );
}
