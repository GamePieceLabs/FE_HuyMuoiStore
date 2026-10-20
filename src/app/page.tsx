import { HomeHero } from "@/features/home/components/home-hero";
import { ProductList } from "@/components/shared/products/product-list";
import { Wrapper } from "@/components/shared/wrapper";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </>
  );
}
