import { ArrowUpRight } from "lucide-react";

import { Wrapper } from "@/components/shared/wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tiktokVideos = Array.from({ length: 5 }, (_, index) => {
  const number = index + 1;

  return {
    id: number,
    src: `https://cdn.hstatic.net/files/200001170195/file/clip0${number}.mp4`,
    poster: `https://cdn.hstatic.net/themes/200001170195/1001490675/14/loomline_index_tiktok_${number}_img.jpg?v=476`,
  };
});

export function TiktokShowcase() {
  return (
    <section aria-labelledby="tiktok-showcase-title">
      <Wrapper>
        <Carousel
          aria-label="Video TikTok của Dressly"
          className="w-full min-w-0"
          opts={{ align: "start", loop: true }}
        >
          <div className="relative mb-6 flex flex-col items-center gap-5 sm:mb-8">
            <div className="text-center">
              <h2
                id="tiktok-showcase-title"
                className="font-heading text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Theo dõi TikTok của chúng tôi
              </h2>
              <a
                href="https://www.tiktok.com/@dressly"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-1 border-b border-foreground px-1 text-sm font-medium text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Theo dõi ngay @Dressly
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:absolute sm:right-0 sm:bottom-0">
              <CarouselPrevious
                aria-label="Xem video TikTok trước"
                className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
              />
              <CarouselNext
                aria-label="Xem video TikTok tiếp theo"
                className="static my-0 size-11 translate-y-0 border-border/80 bg-background text-foreground shadow-sm hover:bg-muted"
              />
            </div>
          </div>

          <CarouselContent className="-ml-3 sm:-ml-4">
            {tiktokVideos.map((video) => (
              <CarouselItem
                key={video.id}
                className="basis-[82%] pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="overflow-hidden rounded-2xl bg-muted">
                  <video
                    aria-label={`Video TikTok Dressly ${video.id}`}
                    autoPlay
                    className="aspect-[9/16] h-auto w-full object-cover"
                    loop
                    muted
                    playsInline
                    poster={video.poster}
                    preload="none"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Wrapper>
    </section>
  );
}
