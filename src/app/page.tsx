import { HomeHero } from "@/features/home/components/home-hero";
import { HomeAbout } from "@/features/home/components/home-about";
import { HomeInspiration } from "@/features/home/components/home-inspiration";
import { HomeReviewList } from "@/features/home/components/home-review-list";
import { HomeStyleShowcase } from "@/features/home/components/home-style-showcase";
import { PolicyList } from "@/components/shared/policies/policy-list";
import { products } from "@/components/shared/products/data";
import { ProductList } from "@/components/shared/products/product-list";
import type { ProductCollection } from "@/components/shared/products/types";
import { Wrapper } from "@/components/shared/wrapper";

const featuredProductTabs = [
  { id: "featured", label: "Nổi bật", products },
  { id: "best-selling", label: "Bán chạy", products },
  { id: "sale", label: "Khuyến mãi", products },
] satisfies readonly ProductCollection[];

const categoryProductTabs = [
  { id: "office-wear", label: "Thời trang văn phòng", products },
  { id: "accessories", label: "Phụ kiện", products },
] satisfies readonly ProductCollection[];

export default function Home() {
  return (
    <>
      <HomeHero />
      <Wrapper>
        <ProductList tabs={featuredProductTabs} />
        <PolicyList />
        <HomeAbout />
        <ProductList
          tabs={categoryProductTabs}
          titleId="home-category-products-title"
        />
        <HomeInspiration />
        <HomeStyleShowcase />
      </Wrapper>
      <HomeReviewList />
    </>
  );
}
