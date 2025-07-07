import { StringLiteral } from "typescript";
import { create } from "zustand";

interface SearchState {
  searchQuery: String;
  selectedCategory: string;
  priceRange: { min: number; max: number };
  sortBy: "default" | "name" | "price-low" | "price-high" | "newest";
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (min: number, max: number) => void;
  setSortBy: (sort: SearchState["sortBy"]) => void;
  clearFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  selectedCategory: "all",
  priceRange: { min: 0, max: Infinity },
  sortBy: "default",

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setPriceRange: (min, max) => set({ priceRange: { min, max } }),
  setSortBy: (sort) => set({ sortBy: sort }),

  clearFilters: () =>
    set({
      searchQuery: "",
      selectedCategory: "all",
      priceRange: { min: 0, max: Infinity },
      sortBy: "default"
    })
}));
