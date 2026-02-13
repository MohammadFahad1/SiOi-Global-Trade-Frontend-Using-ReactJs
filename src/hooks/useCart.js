import React, { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [authToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens"))?.access,
  );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [trigger, setTrigger] = useState(false);

  // Create a new cart
  const createOrGetCart = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg("");
      const res = await authApiClient.post("/carts/");
      setCart(res.data);
      if (!cartId) {
        localStorage.setItem("cartId", res.data.id);
        setCartId(res.data.id);
      }

      return {
        success: true,
        data: cart,
      };
    } catch (error) {
      setErrorMsg(error.message);
      return {
        success: false,
        message: error.message,
      };
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken, cartId]);

  //   Add Items to the cart
  const addCartItems = useCallback(
    async (product_id, quantity) => {
      if (!cartId) await createOrGetCart();
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await authApiClient.post(`/carts/${cartId}/items/`, {
          product_id,
          quantity,
        });

        setTrigger(true);

        return {
          success: true,
          data: res.data,
        };
      } catch (error) {
        setErrorMsg(error.message);
        return {
          success: false,
          message: error.message,
        };
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authToken, cartId],
  );

  // Update item quantity
  const updateCartItemQuantity = useCallback(
    async (item_id, quantity) => {
      if (!cartId) await createOrGetCart();
      setErrorMsg("");
      try {
        const res = await authApiClient.patch(
          `/carts/${cartId}/items/${item_id}/`,
          {
            quantity,
          },
        );
        return {
          success: true,
          data: res.data,
        };
      } catch (error) {
        setErrorMsg(error.message);
        return {
          success: false,
          message: error.message,
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartId, authToken],
  );

  // Delete cart items
  const deleteCartItem = useCallback(async (itemId) => {
    try {
      await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const initializeCart = async () => {
      setLoading(true);
      await createOrGetCart();
      setLoading(false);
      setTrigger(false);
    };
    initializeCart();
  }, [trigger, createOrGetCart]);

  return {
    createOrGetCart,
    addCartItems,
    cart,
    loading,
    errorMsg,
    cartId,
    updateCartItemQuantity,
    deleteCartItem,
    setTrigger,
  };
};

export default useCart;
