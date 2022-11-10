import React from "react";
export interface ICart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}

export type CartType = {
  cart: ICart[];
  cartTotal: number;
  isLoading: boolean;
  addToCart: (payload: ICart) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementCart: (id: number) => void;
  decrementCart: (id: number) => void;
  getTotals: (payload: ICart[]) => void;
};

export interface ICartDrawer {
  isOpen: boolean;
  onClose: any;
}
