"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/zustandStore";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Header from "./Header";

interface ProductDetailsClientProps {
  product: Product;
}

const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({
  product
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  const { addItem } = useCartStore();

  // move the  null check to the top before ant property access

  if (!product) {
    return <LoadingSpinner />;
  }
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  const handleAddToCart = async (product: Product) => {
    setIsAddingToCart(true);
    try {
      // Add item to cart with selected quantity
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className="min-h-screen bg-gray-200">
        <Header title="Product Page" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-gray-500 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-4 w-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-4 text-sm text-gray-500">Products</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-white rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Zoom Icon */}
                <button
                  type="button"
                  aria-label="Zoom"
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <FaMagnifyingGlass className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <Link
                  href={`/products?slug=${product.slug}`}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  {product.category}
                </Link>
              </div>

              {/* Product Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name.toUpperCase()}
                </h1>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    £{product.price.toFixed(2)}
                  </span>
                  {/* <span className="text-sm text-gray-500">+ Free Shipping</span> */}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lobortis imperdiet, excepteur accusamsan deserunt, dicta reprehenderit vestibulum, vero aspernatur pede duis tempus taciti, senectus, neque possimus ratione laborum aliqua."}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-900"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center text-gray-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-900"
                      disabled={isOutOfStock || quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isAddingToCart || isOutOfStock}
                    className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAddingToCart ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Adding...
                      </span>
                    ) : isOutOfStock ? (
                      "OUT OF STOCK"
                    ) : (
                      "ADD TO CART"
                    )}
                  </button>
                </div>

                {/* Stock Status */}
                {isLowStock && !isOutOfStock && (
                  <p className="text-orange-500 text-sm font-medium">
                    Only {product.stock} left in stock!
                  </p>
                )}
              </div>

              {/* Category Link */}
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Category:{" "}
                  <Link
                    href={`/products?category=${product.category}`}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    {product.category}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-0 right-0 h-0.5 bg-black/20 border-none mt-2"></div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductDetailsClient;
