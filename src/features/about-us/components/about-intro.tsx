import Image from "next/image";

import { Wrapper } from "@/components/shared/wrapper";

export function AboutIntro() {
  return (
    <>
      <Wrapper>
        <section className="flex justify-center text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Chào Mừng Đến Với Dressly
            </h1>
            <p className="mt-6 text-justify text-base leading-8 text-muted-foreground [text-align-last:center] sm:text-lg">
              Chúng tôi là một thương hiệu thời trang có trụ sở tại Hồ Chí Minh,
              được xây dựng dựa trên các nguyên tắc về sự sang trọng tinh tế và
              sự thoải mái hàng ngày. Chúng tôi tập trung vào việc tạo ra những
              sản phẩm trường tồn theo thời gian – được làm thủ công tỉ mỉ, vô
              cùng đa năng và toát lên vẻ tự tin thầm lặng. Chúng tôi tin rằng
              trang phục tuyệt vời không cần phải phô trương; nó chỉ cần tạo cảm
              giác thoải mái, vừa vặn và giúp bạn tự tin suốt cả ngày với phong
              cách riêng.
            </p>
          </div>
        </section>
      </Wrapper>

      <div className="w-full overflow-hidden">
        <Image
          src="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_about_1_img.jpg"
          alt="Không gian cửa hàng thời trang Dressly"
          width={1920}
          height={800}
          sizes="(max-width: 1410px) 100vw, 1410px"
          unoptimized
          className="h-auto w-full object-cover"
        />
      </div>

      <Wrapper>
        <section className="my-8 flex justify-center px-4 text-center sm:my-12 sm:px-6 md:px-8">
          <div className="w-full max-w-3xl lg:max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm">
              Vẻ đẹp đến từ sự tinh giản
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:mt-4 sm:text-2xl md:text-3xl">
              Mỗi sản phẩm đều được thiết kế tỉ mỉ cho bạn sự thoải mái
            </h2>
            <p className="mt-4 text-justify text-sm leading-7 text-muted-foreground [text-align-last:center] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Mang lại cảm giác thoải mái và tự nhiên ngay từ khi bạn mặc vào.
              Chúng tôi lựa chọn chất liệu không chỉ dựa trên vẻ ngoài và cảm
              giác mà còn dựa trên khả năng giữ được vẻ đẹp theo thời gian.
              Những chất liệu mềm mại hơn khi sử dụng, giữ được phom dáng và duy
              trì độ bền là cốt lõi trong những gì chúng tôi tạo ra. Sự chú
              trọng đến độ bền này có nghĩa là bạn có thể tin tưởng vào tủ quần
              áo của mình, nó sẽ luôn đồng hành cùng bạn qua từng mùa.
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
