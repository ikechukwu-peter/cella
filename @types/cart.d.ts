export interface ICart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export type CartType = {
  cart: ICart[];
  // total: number;
  // quantity: number;
  isLoading: boolean;
  addToCart: (payload: ICart) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementCart: (id: number) => void;
  decrementCart: (id: number) => void;
};

export interface ICartDrawer {
  isOpen: boolean;
  onClose: any;
}
