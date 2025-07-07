"use client";

import { Suspense } from "react";
import Hero from "../components/Hero";
import ProductList from "@/components/ProductList";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <section aria-label="Hero section">
        <Hero />
      </section>
      <main>
        <section>
          {/* Product List with Error Boundary and Suspense */}
          <ErrorBoundary
            fallback={
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Something went wrong
                </h2>
                <p className="text-gray-600 mb-6">
                  We're having trouble loading our products. Please try
                  refreshing the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Refresh Page
                </button>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="flex justify-center items-center py-12">
                  <LoadingSpinner size="lg" />
                  <span className="ml-3 text-lg text-gray-600">
                    Loading amazing products...
                  </span>
                </div>
              }
            >
              <ProductList />
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>
      <Footer />
    </div>
  );
}
