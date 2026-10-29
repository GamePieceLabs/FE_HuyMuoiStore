import { products } from "@/components/shared/products/data";
import { ProductList } from "@/components/shared/products/product-list";
import { TiktokShowcase } from "@/components/shared/tiktok-showcase";
import { Wrapper } from "@/components/shared/wrapper";
import { ProductsBanner } from "@/features/products/components/products-banner";
import { ProductsFilter } from "@/features/products/components/products-filter";
import { ProductsSort } from "@/features/products/components/products-sort";

export default function ProductsPage() {
  return (
    <>
      <ProductsBanner />

      <div id="btn-scroll" className="w-full scroll-mt-24 sm:scroll-mt-32">
        <div className="mx-auto flex w-full max-w-[1410px] items-start">
          <ProductsFilter />

          <div className="min-w-0 flex-1">
            <Wrapper>
              <div>
                <div className="flex min-h-11 items-center justify-end">
                  <ProductsSort />
                </div>
                <div className="mt-6">
                  <ProductList
                    products={products}
                    titleId="products-list-title"
                    showViewAll={false}
                  />
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>

      <TiktokShowcase />
    </>
  );
}
