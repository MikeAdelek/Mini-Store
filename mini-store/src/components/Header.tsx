import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/zustandStore";
import { FaShoppingCart } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  const itemCount = useCartStore((state) => state.getItemCount());

  // Generate default title
  const getDefaultTitle = () => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        return "Home";
      case "/products":
        return "Products";
      case "/cart":
        return "Shopping Cart";
      case "/checkout":
        return "CheckoutPage";
      default:
        return "Mini-Store";
    }
  };

  const displayTitle = title || getDefaultTitle();
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-16">
        <div className="flex items-center justify-between">
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
            <h1 className="text-lg font-semibold text-gray-900">
              {displayTitle}
            </h1>
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
      </nav>
    </div>
  );
};

export default Header;
