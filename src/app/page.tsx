import { HomeHero } from "@/features/home/components/home-hero";
import { HomeAbout } from "@/features/home/components/home-about";
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
  { id: "office-fashion", label: "Thời trang văn phòng", products },
  { id: "accessories", label: "Phụ kiện", products: [] },
] satisfies readonly ProductCollection[];

export default function Home() {
  return (
    <>
      <HomeHero />
      <Wrapper>
        <ProductList tabs={featuredProductTabs} />
        <PolicyList />
        <HomeAbout />
        <ProductList tabs={categoryProductTabs} />
      </Wrapper>
    </>
  );
}
