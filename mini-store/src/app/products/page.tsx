import { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Products | Mini Store",
  description: "Browse our collection of premium beauty and lifestyle products",
  keywords: [
    "products",
    "shop",
    "mini store",
    "ecommerce",
    "beauty",
    "cosmetics"
  ],
  openGraph: {
    title: "Products | Mini Store",
    description:
      "Browse our collection of premium beauty and lifestyle products",
    type: "website"
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}
