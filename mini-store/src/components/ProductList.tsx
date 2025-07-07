"use client";

import React from "react";
import { useProducts, useProductById } from "@/hooks/useProduct";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "./SupportComponents";

const ProductList: React.FC = () => {
  const { data: products, isLoading, error, refetch } = useProducts();

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section Skeleton */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="h-6 bg-gray-200 rounded-md mx-auto mb-4 w-48 animate-pulse" />
            <div className="h-10 bg-gray-200 rounded-md mx-auto mb-4 w-80 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-md mx-auto w-64 animate-pulse" />
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <ProductGridSkeleton />
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">
            Error loading products: {error.message}
          </p>
          <button
            type="button"
            aria-label="Retry loading products"
            onClick={() => refetch()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty State
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">
            BEAUTY PRONOUNCED
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ADD A FLAVOR TO BEING A GIRL
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          aria-label="Product grid"
        >
          {products?.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
