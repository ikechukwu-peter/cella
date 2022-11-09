import { useState, createContext, FC, useEffect } from "react";
import { useRouter } from "next/router";
import { Props } from "../@types/react";
import { CartType, ICart } from "../@types/cart";

export const AuthContext = createContext<CartType | null>(null);

export const CartProvider: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState<ICart[]>([
    {
      itemId: "",
      title: "",
      price: 0,
      quantity: 0,
      description: "",
      image: "",
    },
  ]);

  const addToCart = async (payload: ICart) => {
    console.log(payload);
  };

  const removeFromCart = (id: string) => {
    console.log(id);
  };
  const clearCart = () => {
    console.log("CLEAR_CART");
  };

  const incrementCart = (id: string) => {
    console.log(id);
  };
  const decrementCart = (id: string) => {
    console.log(id);
  };

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  );
};
