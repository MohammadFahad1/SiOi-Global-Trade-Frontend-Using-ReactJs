import React, { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { cart, loading, createOrGetCart } = useCartContext();

  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  return (
    <div>
      <h1>This is cart page {loading ? "loading..." : JSON.stringify(cart)}</h1>
    </div>
  );
};

export default Cart;
