import { Wrapper } from "@/components/shared/wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Nguyễn Minh Anh",
    position: "Nhân viên văn phòng",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_1_banner.jpg?v=321",
    quote:
      "Sản phẩm rất tốt và bền, tôi đã sử dụng hơn 3 tháng và vẫn thích sử dụng hằng ngày, phù hợp đi làm lẫn đi chơi.",
  },
  {
    name: "Trần Ngọc Linh",
    position: "Marketing Executive",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_2_banner.jpg?v=321",
    quote:
      "Sản phẩm đẹp, giao hàng nhanh, bao bì cẩn thận, có thể dùng làm quà tặng cũng được.",
  },
  {
    name: "Lê Hoài Thương",
    position: "Freelancer",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_3_banner.jpg?v=321",
    quote:
      "Giao hàng quá nhanh, mình đặt hơn 1 ngày là nhận được hàng liền. Hộp đựng quá đẹp, không ngờ mua giá này mà đẹp vậy.",
  },
  {
    name: "Phạm Khánh Vy",
    position: "Sinh viên",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_4_banner.jpg?v=321",
    quote:
      "Sản phẩm rất tốt và bền, tôi đã sử dụng hơn 3 tháng và vẫn thích sử dụng hằng ngày, phù hợp đi làm lẫn đi chơi.",
  },
  {
    name: "Đặng Thu Trang",
    position: "Giáo viên",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_5_banner.jpg?v=321",
    quote:
      "Sản phẩm đẹp, giao hàng nhanh, bao bì cẩn thận, có thể dùng làm quà tặng cũng được.",
  },
  {
    name: "Võ Bảo Ngọc",
    position: "Nhân viên ngân hàng",
    image:
      "https://cdn.hstatic.net/themes/200001170195/1001480974/14/loomline_index_review_6_banner.jpg?v=321",
    quote:
      "Sản phẩm rất tốt và bền, tôi đã sử dụng hơn 3 tháng và vẫn thích sử dụng hằng ngày, phù hợp đi làm lẫn đi chơi.",
  },
] as const;

export function HomeReviewList() {
  return (
    <section
      aria-labelledby="home-review-list-title"
      className="w-full bg-[#F3EEEA]"
    >
      <Wrapper>
        <Carousel
          aria-label="Đánh giá từ khách hàng"
          className="mt-8 w-full sm:mt-10"
          opts={{ align: "start", loop: true }}
        >
          <div
            id="home-review-list-title"
            className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between [&>p]:max-w-[20ch] [&>p]:text-2xl [&>p]:leading-tight sm:[&>p]:max-w-none sm:[&>p]:text-3xl"
          >
            <p className="text-[30px] font-bold">Hơn 2000 đánh giá tích cực</p>
            <div className="flex shrink-0 gap-2 self-start sm:self-auto">
              <CarouselPrevious
                aria-label="Xem đánh giá trước"
                className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
              />
              <CarouselNext
                aria-label="Xem đánh giá tiếp theo"
                className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
              />
            </div>
          </div>

          <CarouselContent className="-ml-3 sm:-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="basis-[88%] pl-3 sm:basis-[72%] sm:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/10]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.image}
                      alt={`Ảnh của ${review.name}`}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                    />
                  </div>
                  <div className="item-content flex flex-1 flex-col p-4 sm:p-5">
                    <div className="content-top">
                      <div className="heading flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="name font-heading text-lg font-bold text-foreground">
                          {review.name}
                        </span>
                        <span className="position text-xs tracking-wide text-muted-foreground uppercase">
                          {review.position}
                        </span>
                      </div>
                      <p className="desc mt-3 text-sm leading-6 text-muted-foreground">
                        {review.quote}
                      </p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Wrapper>
    </section>
  );
}
