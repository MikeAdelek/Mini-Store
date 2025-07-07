"use client";

import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/store/zustandStore";
import ProductList from "@/components/ProductList";
import Footer from "./Footer";

const ProductsClient: React.FC = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back to Home + Logo */}
            <div className="flex items-center space-x-4">
              <div className="h-6 w-px bg-gray-300" />
              <Link
                href="/"
                className="text-xl font-serif text-teal-800 italic hover:text-teal-600 transition-colors duration-200"
              >
                Mini-Store
              </Link>
            </div>

            {/* Center: Page Title */}
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-gray-900">Products</h1>
            </div>

            {/* Right: Cart */}
            <div className="flex items-center">
              <Link
                href="/cart"
                aria-label={`Shopping cart with ${itemCount} items`}
                className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors duration-200"
              >
                <FaShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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
        </div>
      </div>

      {/* Main Content */}
      <main>
        <ProductList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsClient;
