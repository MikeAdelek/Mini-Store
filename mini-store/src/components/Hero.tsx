"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/store/zustandStore";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "products" }
];

const Hero: React.FC = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-serif text-white italic">
            Mini-Commerce
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-sm font-medium hover:text-teal-200 transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            aria-label={`Shopping cart with ${itemCount} items`}
            className="relative p-2 text-white hover:text-teal-200 transition-colors duration-200"
          >
            <FaShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-teal-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-teal-200 text-sm sm:text-base font-medium mb-4 tracking-wider uppercase">
            A Whole New Look
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            BEAUTY
            <br />
            PRONOUNCED
          </h2>

          <p className="text-teal-100 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <Link
            href="/products"
            className="border-2 border-white text-white px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-teal-800 transition-all duration-300 transform hover:scale-105"
          >
            View More
          </Link>
        </div>

        {/* Right Content - Model Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Placeholder for model image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 via-rose-100 to-teal-100 flex items-center justify-center">
                <div className="text-center text-teal-800">
                  <div className="w-24 h-24 mx-auto mb-4 bg-teal-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">
                      <Image
                        src="/aboutImg.jpg"
                        alt="Hero Image"
                        fill
                        // sizes="100vw"
                        className="object-cover"
                      />
                    </span>
                  </div>
                  {/* <p className="text-sm opacity-70">Model Image Placeholder</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed bottom-4 left-4 z-20">
        <button
          type="button"
          aria-label="Mobile-Navigation"
          className="bg-white text-teal-800 p-3 rounded-full shadow-lg"
        >
          <div className="w-5 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-teal-800"></span>
            <span className="w-full h-0.5 bg-teal-800"></span>
            <span className="w-full h-0.5 bg-teal-800"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
