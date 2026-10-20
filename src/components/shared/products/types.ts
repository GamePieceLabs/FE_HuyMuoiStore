export interface Product {
  slug: string;
  name: string;
  image: string;
  secondaryImage?: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description?: string;
  colors?: readonly string[];
  additionalColors?: number;
  sizesLabel?: string;
  href?: string;
}

export interface ProductCollection {
  id: string;
  label: string;
  products: readonly Product[];
}
