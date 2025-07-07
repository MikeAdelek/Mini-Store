import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/zustandStore";
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, items } = useCartStore();
  const [isAddingCart, setIsAddingCart] = React.useState(false);

  //check if the product is already in the cart
  const isInCart = items.some((item) => item.product.id === product.id);
  const cartQuantity =
    items.find((item) => item.product.id === product.id)?.quantity || 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Nav when clicking add to cart
    e.stopPropagation();
    setIsAddingCart(true);

    try {
      addItem(product);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      // slight delay for better UX
      setTimeout(() => setIsAddingCart(false), 500);
    }
  };

  return (
    <article
      className="group relative bg-white rounded-lg shadow-sm border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
      role="article"
      aria-labelledby={`product-${product.id}`}
    >
      <Link
        href={`product/${product.slug}`}
        className="block"
        arial-label={`View details for ${product.name}`}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="100vw"
            priority={false}
          />

          {/* Stock Badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <div>Only {product.stock} left</div>
          )}
          {product.stock === 0 && <div>Out of Stock</div>}

          {/* quick overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-25 transition-opacity duration-200 flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0 || isAddingCart}
              className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200"
              aria-label={`Quick add ${product.name} to cart`}
            >
              {isAddingCart ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  <span>Adding...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <FaShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          {/* Product name */}
          <h3
            className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transform-cpu duration-200"
            id={`product-${product.id}-title`}
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {isInCart && (
              <span className="text-xs text-gray-500">
                In Cart ({cartQuantity})
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isAddingCart}
            className={`w-full py-2 px-4 text-sm font-semibold text-white rounded-lg transition-colors duration-200 ${
              product.stock === 0
                ? "bg-teal-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAddingCart ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                <span>Adding...</span>
              </div>
            ) : product.stock === 0 ? (
              "Out of Stock"
            ) : isInCart ? (
              <div className="flex items-center justify-center space-x-2">
                <FaShoppingCart className="h-4 w-4" />
                <span>Add More</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <FaShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </div>
            )}
          </button>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
