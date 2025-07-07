import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-serif text-teal-800 italic mb-4">
              Mini-Store
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Your destination for premium beauty and lifestyle products. We
              curate the finest selection to help you express your unique style.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.876-1.366-2.027-1.366-3.324s.49-2.448 1.297-3.323c.876-.876 2.027-1.366 3.324-1.366s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Mini-Store. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-teal-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-teal-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
