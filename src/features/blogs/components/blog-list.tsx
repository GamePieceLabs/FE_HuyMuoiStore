import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const articleCategories = [
  { label: "Trang chủ", href: "/" },
  { label: "Thời trang", href: "/products?category=fashion" },
  { label: "Phụ kiện", href: "/products?category=accessories" },
  { label: "Giới thiệu", href: "/about-us" },
  { label: "Blog thời trang", href: "/blogs" },
] as const;

const policyLinks = [
  { label: "Điều khoản dịch vụ", href: "/policies#terms-of-service" },
  { label: "Chính sách đổi trả", href: "/policies#returns" },
  { label: "Chính sách bảo mật", href: "/policies#privacy" },
] as const;

const remainingCategories = [
  { label: "Cửa hàng", href: "/stores" },
  { label: "Liên hệ", href: "/about-us#contact" },
] as const;

const blogPosts = [
  {
    title: "Gợi ý loạt item thời trang hàng hiệu ngân sách vừa phải",
    excerpt:
      "Phối đồ với boot nam nên mặc với áo gì? Boot đã có nhưng kết hợp với áo gì cũng khiến các anh chàng có gu thêm phần băn khoăn. Kiểu áo cũng là một yếu...",
    image:
      "https://cdn.hstatic.net/files/200001170195/article/blog4_3c36a03d71c54245b5b6a960a518baa9_1024x1024.jpg",
    href: "/blogs/news/goi-y-loat-item-thoi-trang-hang-hieu-ngan-sach-vua-phai",
  },
  {
    title: "Mẫu chân váy dạ mùa đông xinh xắn cho những ngày đông",
    excerpt:
      "Bật mí tip phối đồ nam mùa đông chuẩn stylist hiện nay. Thời nay, biết cách ăn mặc là điều vô cùng quan trọng đối với bất cứ ai, dù là nam hay nữ. Nó sẽ...",
    image:
      "https://cdn.hstatic.net/files/200001170195/article/blog3_26b5a467e8bc4be8858b7e4af7e833d5_grande.jpg",
    href: "/blogs/news/mau-chan-vay-da-mua-dong-xinh-xan-cho-nhung-ngay-dong",
  },
  {
    title: "Tips phối đồ với boots thêm lịch lãm, fashion",
    excerpt:
      "Phối đồ với boot nam nên mặc với áo gì? Boot đã có nhưng kết hợp với áo gì cũng khiến các anh chàng có gu thêm phần băn khoăn. Kiểu áo cũng là một yếu...",
    image:
      "https://cdn.hstatic.net/files/200001170195/article/blog2_05882d9201514b0abfd5950ac2c730da_grande.jpg",
    href: "/blogs/news/tips-phoi-do-voi-boots-them-lich-lam-fashion",
  },
  {
    title: "Cách phối đồ nam mùa đông cực thời trang và trendy",
    excerpt:
      "Bật mí tip phối đồ nam mùa đông chuẩn stylist hiện nay. Thời nay, biết cách ăn mặc là điều vô cùng quan trọng đối với bất cứ ai, dù là nam hay nữ. Nó sẽ...",
    image:
      "https://cdn.hstatic.net/files/200001170195/article/blog1_9f3c9cc8c84242a6b7c99356c9b3a479_grande.jpg",
    href: "/blogs/news/cach-phoi-do-nam-mua-dong-cuc-thoi-trang-va-trendy",
  },
] as const;

type BlogPost = (typeof blogPosts)[number];

interface BlogArticleProps {
  post: BlogPost;
  priority?: boolean;
}

function BlogArticle({ post, priority = false }: BlogArticleProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-card text-card-foreground">
      <Link
        href={post.href}
        className="relative block aspect-video overflow-hidden bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label={`Đọc bài: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-lg leading-snug font-semibold">
          <Link
            href={post.href}
            className="outline-none transition-colors hover:text-primary/70 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground sm:text-base">
          {post.excerpt}
        </p>

        <footer className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-3 text-sm text-muted-foreground">
          <span>Bởi Dressly</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-05-07">07 Tháng 05, 2026</time>
        </footer>
      </div>
    </article>
  );
}

function LatestPosts() {
  return (
    <Accordion
      defaultValue={["latest-posts"]}
      className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
    >
      <AccordionItem value="latest-posts" className="border-0">
        <AccordionTrigger className="min-h-12 items-center rounded-none border-0 px-4 py-2.5! text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:hidden">
          <span>Bài viết mới nhất</span>
          <ChevronDown
            aria-hidden="true"
            className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180"
          />
        </AccordionTrigger>

        <AccordionContent className="border-t border-border px-4 py-0! [&_a]:no-underline [&_a]:hover:no-underline">
          <ol>
            {blogPosts.map((post) => (
              <li
                key={post.href}
                className="border-b border-dashed border-border last:border-b-0"
              >
                <Link
                  href={post.href}
                  className="group/latest-post flex items-center gap-3 py-3 outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="relative ml-2 aspect-[16/10] w-24 shrink-0 overflow-visible sm:w-28">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="line-clamp-2 text-sm leading-5 font-medium text-foreground transition-colors group-hover/latest-post:text-primary sm:text-base sm:leading-5">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                      <span className="text-foreground">Tin tức</span>
                      <span aria-hidden="true"> · </span>
                      <time dateTime="2026-05-07">07.05.2026</time>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function BlogCategories() {
  return (
    <section aria-label="Danh mục bài viết">
      <Accordion
        defaultValue={["article-categories"]}
        className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
      >
        <AccordionItem value="article-categories" className="border-0">
          <AccordionTrigger className="min-h-12 items-center rounded-none border-0 px-4 py-2.5! text-base font-semibold hover:no-underline focus-visible:border-0 **:data-[slot=accordion-trigger-icon]:hidden">
            <span>Danh mục bài viết</span>
            <ChevronDown
              aria-hidden="true"
              className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>

          <AccordionContent className="border-t border-border px-4 py-0! [&_a]:no-underline [&_a]:hover:no-underline">
            <nav aria-label="Liên kết danh mục bài viết">
              <ul>
                {articleCategories.map((category) => (
                  <li
                    key={category.href}
                    className="border-b border-dashed border-border"
                  >
                    <Link
                      href={category.href}
                      className="flex min-h-11 items-center py-2 text-base font-medium text-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}

                <li className="border-b border-dashed border-border">
                  <Accordion defaultValue={["policies"]}>
                    <AccordionItem value="policies" className="border-0">
                      <AccordionTrigger className="min-h-11 items-center rounded-none border-0 py-2! text-base font-semibold hover:no-underline focus-visible:border-0 aria-expanded:text-primary **:data-[slot=accordion-trigger-icon]:text-current">
                        Chính sách
                      </AccordionTrigger>
                      <AccordionContent className="pb-0! pl-3 [&_a]:no-underline [&_a]:hover:no-underline">
                        <ul>
                          {policyLinks.map((policy) => (
                            <li key={policy.href}>
                              <Link
                                href={policy.href}
                                className="flex min-h-10 items-center py-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              >
                                {policy.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>

                {remainingCategories.map((category, index) => (
                  <li
                    key={category.href}
                    className={
                      index === remainingCategories.length - 1
                        ? undefined
                        : "border-b border-dashed border-border"
                    }
                  >
                    <Link
                      href={category.href}
                      className="flex min-h-11 items-center py-2 text-base font-medium text-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function BlogSidebar() {
  return (
    <aside
      aria-label="Thông tin bổ sung về bài viết"
      className="sticky top-10 space-y-4"
    >
      <LatestPosts />
      <BlogCategories />
    </aside>
  );
}

export function BlogList() {
  return (
    <section
      aria-labelledby="blogs-title"
      className="items-start grid gap-10 lg:grid-cols-3 lg:gap-8"
    >
      <div className="lg:col-span-2">
        <header className="pb-5">
          <h1
            id="blogs-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Tin tức
          </h1>
        </header>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
          {blogPosts.map((post, index) => (
            <BlogArticle key={post.href} post={post} priority={index === 0} />
          ))}
        </div>
      </div>

      <BlogSidebar />
    </section>
  );
}
