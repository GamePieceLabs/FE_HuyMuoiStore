import { products } from "@/components/shared/products/data";
import { ProductList } from "@/components/shared/products/product-list";
import { TiktokShowcase } from "@/components/shared/tiktok-showcase";
import { ProductsBanner } from "@/features/products/components/products-banner";
import { ProductsFilter } from "@/features/products/components/products-filter";
import { ProductsSort } from "@/features/products/components/products-sort";

export default function ProductsPage() {
  return (
    <>
      <ProductsBanner />

      <section
        id="btn-scroll"
        aria-label="Danh sách sản phẩm"
        className="w-full"
      >
        <div className="mx-auto flex w-full max-w-[1410px] items-start">
          <ProductsFilter />

          <div className="min-w-0 flex-1 space-y-6 px-[15px] py-10 sm:py-12 md:py-16 lg:py-10">
            <header className="flex min-h-11 items-center justify-end">
              <ProductsSort />
            </header>
            <ProductList
              products={products}
              titleId="products-list-title"
              showViewAll={false}
            />
          </div>
        </div>
      </section>

      <TiktokShowcase />
    </>
  );
}
