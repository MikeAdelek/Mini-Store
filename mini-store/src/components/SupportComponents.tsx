"use client";

import React from "react";
import { useSearchStore } from "@/store/searchStore";

// Supporting Components

const ProductGridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
      >
        <div className="aspect-square bg-gray-200 animate-pulse" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

const SortDropdown: React.FC = () => {
  const { sortBy, setSortBy } = useSearchStore();

  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as any)}
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      aria-label="Sort products"
    >
      <option value="default">Sort by</option>
      <option value="name">Name (A-Z)</option>
      <option value="price-low">Price (Low to High)</option>
      <option value="price-high">Price (High to Low)</option>
      <option value="newest">Newest First</option>
    </select>
  );
};

export default {
  ProductGridSkeleton,
  SortDropdown
};
// Exporting components for use in other parts of the application
export { ProductGridSkeleton, SortDropdown };
