"use client";

import React, { useState } from "react";
import { useSearchStore } from "@/store/searchStore";

interface ProductFilterProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  mobileOpen = false,
  onMobileClose
}) => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    clearFilters
  } = useSearchStore();

  const [tempPriceRange, setTempPriceRange] = useState(priceRange);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "electronics", label: "Electronics" },
    { value: "wearables", label: "Wearables" },
    { value: "accessories", label: "Accessories" },
    { value: "beauty", label: "Beauty" },
    { value: "home", label: "Home & Garden" },
    { value: "sports", label: "Sports & Outdoors" },
    { value: "books", label: "Books" },
    { value: "toys", label: "Toys & Games" }
  ];

  const priceRanges = [
    { min: 0, max: 50, label: "Under $50" },
    { min: 50, max: 100, label: "$50 - $100" },
    { min: 100, max: 250, label: "$100 - $250" },
    { min: 250, max: 500, label: "$250 - $500" },
    { min: 500, max: 1000, label: "$500 - $1000" },
    { min: 1000, max: Infinity, label: "Over $1000" }
  ];

  const handlePriceRangeChange = (min: number, max: number) => {
    const newRange = { min, max };
    setTempPriceRange(newRange);
    setPriceRange(newRange.min, newRange.max);
  };

  const handleCustomPriceChange = () => {
    setPriceRange(tempPriceRange.min, tempPriceRange.max);
  };

  const handleClearFilters = () => {
    clearFilters();
    setTempPriceRange({ min: 0, max: Infinity });
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={
                  priceRange.min === range.min && priceRange.max === range.max
                }
                onChange={() => handlePriceRangeChange(range.min, range.max)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>

        {/* Custom Price Range */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Custom Range
          </h4>
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor="minPrice" className="sr-only">
                Minimum price
              </label>
              <input
                type="number"
                id="minPrice"
                placeholder="Min"
                value={tempPriceRange.min === 0 ? "" : tempPriceRange.min}
                onChange={(e) =>
                  setTempPriceRange({
                    ...tempPriceRange,
                    min: Number(e.target.value) || 0
                  })
                }
                onBlur={handleCustomPriceChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <span className="text-gray-500">-</span>
            <div className="flex-1">
              <label htmlFor="maxPrice" className="sr-only">
                Maximum price
              </label>
              <input
                type="number"
                id="maxPrice"
                placeholder="Max"
                value={
                  tempPriceRange.max === Infinity ? "" : tempPriceRange.max
                }
                onChange={(e) =>
                  setTempPriceRange({
                    ...tempPriceRange,
                    max: Number(e.target.value) || Infinity
                  })
                }
                onBlur={handleCustomPriceChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={handleClearFilters}
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );

  // Mobile Filter Modal
  if (mobileOpen) {
    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={onMobileClose}
        />

        {/* Modal */}
        <div className="fixed inset-y-0 right-0 flex max-w-xs w-full">
          <div className="flex flex-col w-full bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={onMobileClose}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close filters</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {filterContent}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Filter Sidebar
  return (
    <div className="hidden sm:block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Filters</h2>
        {filterContent}
      </div>
    </div>
  );
};

export default ProductFilter;
