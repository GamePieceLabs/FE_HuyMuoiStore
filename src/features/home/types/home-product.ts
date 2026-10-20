export interface HomeProduct {
  slug: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  href?: string;
}

export interface HomeProductCollection {
  id: string;
  label: string;
  products: readonly HomeProduct[];
}
