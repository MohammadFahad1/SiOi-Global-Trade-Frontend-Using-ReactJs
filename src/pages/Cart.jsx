import React, { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const {
    cart,
    createOrGetCart,
    updateCartItemQuantity,
    loading,
    deleteCartItem,
  } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const copyOfLocalCart = { ...localCart };

    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: prevLocalCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      ),
    }));

    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.error("Error updating cart item quantity:", error.message);
      setLocalCart(copyOfLocalCart);
    }
  };

  const handleRemoveItem = async (itemId) => {
    const updatedItems = localCart.items.filter((item) => item.id !== itemId);

    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: updatedItems,
    }));

    try {
      // Remove the item from the cart
      await deleteCartItem(itemId);
    } catch (error) {
      // Handle error
      console.error("Error removing item from cart:", error.message);
    }
  };

  if (loading || !localCart) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6 lg:py-10">
      <nav className="mb-8 md:mb-12">
        <Link
          className="group inline-flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium bg-white px-4 md:px-6 py-2 md:py-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md text-sm md:text-base"
          to="/products"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 group-hover:-translate-x-1 transition-transform duration-300"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Continue Shopping
        </Link>
      </nav>
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white h-5 w-5"
              >
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Shopping Cart
                <span className="text-blue-600 ml-2">
                  ({localCart.items.length})
                </span>
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Review your items and checkout
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-emerald-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-medium">Secure</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-blue-500"
              >
                <path d="M10 17h4V5H2v12h3" />
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                <path d="M14 17h1" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
              <span className="font-medium">Fast Ship</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-blue-500"
              >
                <circle cx={12} cy={8} r={6} />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <span className="font-medium">Quality</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="xl:col-span-2 space-y-4">
          {/* Cart Items */}
          <CartItem
            handleUpdateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
            items={localCart.items}
          />
        </div>
        <div className="space-y-4">
          <div
            className="bg-white rounded-lg border border-gray-200 shadow-md sticky top-4 overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-linear-to-r from-blue-500/5 to-blue-600/5 border-b border-gray-200 p-3">
              <h3 className="font-bold text-base text-gray-900 flex items-center">
                <div className="p-1.5 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <rect width={16} height={20} x={4} y={2} rx={2} />
                    <line x1={8} x2={16} y1={6} y2={6} />
                    <line x1={16} x2={16} y1={14} y2={18} />
                    <path d="M16 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M8 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M8 14h.01" />
                    <path d="M12 18h.01" />
                    <path d="M8 18h.01" />
                  </svg>
                </div>
                Order Summary
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between text-base md:text-lg text-gray-700">
                  <span className="font-medium">
                    Subtotal ({localCart.items.length} items)
                  </span>
                  <span className="font-bold text-lg md:text-xl">
                    ৳{localCart.total_price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base md:text-lg text-gray-700">
                  <span className="font-medium">Shipping</span>
                  <span className="font-bold">
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 md:h-4 md:w-4"
                      >
                        <path d="M10 17h4V5H2v12h3" />
                        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                        <path d="M14 17h1" />
                        <circle cx="7.5" cy="17.5" r="2.5" />
                        <circle cx="17.5" cy="17.5" r="2.5" />
                      </svg>
                      120.00
                    </span>
                  </span>
                </div>
                <div className="flex justify-between text-base md:text-lg text-gray-700">
                  <span className="font-medium">Tax</span>
                  <span className="font-bold">৳0.00</span>
                </div>
                <div className="border-t-2 border-gray-300 pt-4 md:pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-gray-900">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">
                        ৳{(localCart.total_price + 120).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="group w-full mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-base md:text-md  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <rect width={20} height={14} x={2} y={5} rx={2} />
                  <line x1={2} x2={22} y1={10} y2={10} />
                </svg>
                <span>Checkout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="py-8 md:py-12 bg-gray-50 mt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Why Choose{" "}
              <span className="text-blue-600">SiOi Global Trade?</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Genuine Japanese automotive parts with comprehensive service
              guarantee
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-4 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                <div className="scale-75 md:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx={12} cy={8} r={6} />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                Authentic Parts
              </h3>
              <p className="text-xs text-gray-600 leading-snug">
                Genuine Japanese auto parts
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-4 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                <div className="scale-75 md:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                Warranty
              </h3>
              <p className="text-xs text-gray-600 leading-snug">
                Comprehensive coverage
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-4 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                <div className="scale-75 md:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                Fast Delivery
              </h3>
              <p className="text-xs text-gray-600 leading-snug">
                Quick shipping nationwide
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-4 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                <div className="scale-75 md:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                Secure Payment
              </h3>
              <p className="text-xs text-gray-600 leading-snug">
                SSL encrypted checkout
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-emerald-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  500,000+ Parts
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-emerald-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  98% Satisfaction
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-emerald-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
