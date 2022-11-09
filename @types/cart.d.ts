export interface ICart {
  itemId: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

export type CartType = {
  cart: ICart[];
  //   total: number;
  //   quantity: number;
  isLoading: boolean;
  addToCart: (payload: ICart) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  incrementCart: (id: string) => void;
  decrementCart: (id: string) => void;
};
