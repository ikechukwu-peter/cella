import { useState, createContext, FC, useEffect } from "react";
import { Props } from "../@types/react";
import { CartType, ICart } from "../@types/cart";

export const CartContext = createContext<CartType | null>(null);

export const CartProvider: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ICart[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

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
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex === null) return;
    cart[itemIndex].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    getTotals(cart);
    setCart(cart);
  };
  const decrementCart = (id: number) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex === null) return;
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      getTotals(cart);
      setCart(cart);
    }
  };

  const getTotals = (cart: ICart[]) => {
    const { total, quantity } = cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );

    setCartTotal(total);
  };

  useEffect(() => {
    if (!!cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    getTotals(cart);
  }, [cart]);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    if (!!data) {
      const items = JSON.parse(data);
      setCart(items);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        getTotals,
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
