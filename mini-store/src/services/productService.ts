import { Product } from "../types/product";
import { mockProducts } from "@/data/mockProduct";

const PRODUCTS_KEY = "@/data/product.json";

// Main product service functions
export const getProducts = async (): Promise<Product[]> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check localStorage first
    const stored = localStorage.getItem(PRODUCTS_KEY);
    if (stored) {
      try {
        const parsedProducts = JSON.parse(stored);
        if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
          console.log("Loaded products from localStorage");
          return parsedProducts;
        }
      } catch (error) {
        console.warn("Invalid localStorage data, clearing:", error);
        localStorage.removeItem(PRODUCTS_KEY);
      }
    }

    // Try to fetch from JSON file
    const products = await fetchProductsFromJSON();

    // Store successful fetch in localStorage
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));

    return products;
  } catch (error) {
    console.error("Error in getProducts:", error);
    return mockProducts; // Fallback to mock data
  }
};

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const products = await getProducts();
    return products.find((p) => p.id === id) || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  try {
    const products = await getProducts();
    return products.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};

// FUnction to fetch products from JSON
const fetchProductsFromJSON = async (): Promise<Product[]> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch("/product.json");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    // return response.json();
    const data = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    // Fallback to mock data if fetch fails
    return mockProducts;
  }
};
// Function to fetch products from JSON
export const productService = {
  getProducts,
  getProductById,
  getProductBySlug
};
