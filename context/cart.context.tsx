import { useState, createContext, FC, useEffect } from "react";
import { useRouter } from "next/router";
import { Props } from "../@types/react";
import { CartType, ICart } from "../@types/cart";

export const CartContext = createContext<CartType | null>(null);

export const CartProvider: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (payload: ICart) => {
    if (payload.quantity < 1) return;
    const itemIndex = cart.findIndex((item) => item.id === payload.id);
    if (itemIndex !== -1) return;
    setCart([...cart, payload]);
  };

  const removeFromCart = (id: number) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };
  const clearCart = () => {
    setCart([]);
  };

  const incrementCart = (id: number) => {
    console.log(id);
  };
  const decrementCart = (id: number) => {
    console.log(id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementCart,
        decrementCart,
        clearCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
