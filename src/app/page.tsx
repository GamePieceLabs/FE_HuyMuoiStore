import { HomeHero } from "@/features/home/components/home-hero";
import { HomeAbout } from "@/features/home/components/home-about";
import { PolicyList } from "@/components/shared/policies/policy-list";
import { ProductList } from "@/components/shared/products/product-list";
import { Wrapper } from "@/components/shared/wrapper";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Wrapper>
        <ProductList />
      </Wrapper>
      <Wrapper>
        <PolicyList />
      </Wrapper>
      <Wrapper>
        <HomeAbout />
      </Wrapper>
    </>
  );
}
