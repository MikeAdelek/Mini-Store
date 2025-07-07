import { getProductBySlug } from "@/services/productService";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { Product } from "@/types/product";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const product = await getProductBySlug(params.slug);
    if (!product) {
      return {
        title: "Product not found",
        description: "The requested product could not be found"
      };
    }

    return {
      title: `${product.name} | Mini Store`,
      description: product.description,
      keywords: [product.name, product.category].filter(Boolean),
      openGraph: {
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 800,
            height: 600,
            alt: product.name
          }
        ],
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: product.name,
        description: product.description,
        images: [product.image]
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product | Mini Store",
      description: "View product details"
    };
  }
}

export default async function ProductPage({
  params
}: {
  params: { slug: string };
}) {
  let product: Product | null = null;

  try {
    product = await getProductBySlug(params.slug);
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) {
    <span>Not Found 404</span>;
  }

  return (
    <>
      <ProductDetailsClient product={product} />
    </>
  );
}
