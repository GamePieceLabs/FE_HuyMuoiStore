import Image from "next/image";

import { Wrapper } from "@/components/shared/wrapper";
import { MarqueeBar } from "@/components/shared/marquee-bar";

export default function AboutUsPage() {
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
        <section className="my-8 px-4 sm:my-12 sm:px-6 md:px-8 flex justify-center text-center">
          <div className="w-full max-w-3xl lg:max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
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

      <Wrapper>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              {/* Cột hình ảnh */}
              <div className="lg:col-span-6 col-span-12">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_about_3_img.jpg"
                    alt="Chúng tôi tập trung vào chất lượng hơn số lượng"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Cột nội dung */}
              <div className="lg:col-span-6 col-span-12 m-15">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {/* Tiêu đề phụ */}
                    <div className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      CHÚNG TÔI LUÔN TẠO NÊN XU HƯỚNG MỚI
                    </div>

                    {/* Tiêu đề chính */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      Chúng tôi tập trung vào chất lượng hơn số lượng
                    </h2>

                    {/* Đoạn mô tả */}
                    <p className="text-base text-gray-600 leading-relaxed pt-2">
                      Mỗi sản phẩm may mặc đều được chế tác có chủ đích—không có
                      gì bị lãng phí, không có gì thừa thãi. Cam kết của chúng
                      tôi đối với thiết kế chu đáo có nghĩa là ưu tiên những
                      đường nét tinh tế, kiểu dáng đa năng và những chi tiết nhẹ
                      nhàng giúp tôn lên vẻ đẹp mà không làm lu mờ chúng. Đây là
                      những món đồ bạn sẽ mặc đi mặc lại nhiều lần vì chúng đơn
                      giản là hiệu quả.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <MarqueeBar />
      <Wrapper>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              {/* Cột nội dung */}
              <div className="lg:col-span-6 col-span-12 m-15">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {/* Tiêu đề phụ */}
                    <div className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      DRESSLY MANG LẠI
                    </div>

                    {/* Tiêu đề chính */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      Sự tự tin, giá trị và tính cách của bạn
                    </h2>

                    {/* Đoạn mô tả */}
                    <p className="text-base text-gray-600 leading-relaxed pt-2">
                      Trang phục của chúng tôi được tạo ra để hòa nhập vào cuộc
                      sống của bạn một cách liền mạch – dù bạn đang dạo bước
                      trên đường phố, gặp gỡ bạn bè hay chỉ đơn giản là tận
                      hưởng những khoảnh khắc yên tĩnh ở nhà.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cột hình ảnh */}
              <div className="lg:col-span-6 col-span-12">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_about_us_about_4_img.jpg"
                    alt="Chúng tôi tập trung vào chất lượng hơn số lượng"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
