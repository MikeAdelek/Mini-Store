import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductById,
  getProductBySlug
} from "../services/productService";
import { Product } from "../types/product";

// Hook to get all products
export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  });
};

// Hook to get a single product by ID
export const useProductById = (id: string) => {
  return useQuery<Product | null, Error>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });
};

// Hook to get a single product by slug
export const useProductBySlug = (slug: string) => {
  return useQuery<Product | null, Error>({
    queryKey: ["product", "slug", slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });
};
