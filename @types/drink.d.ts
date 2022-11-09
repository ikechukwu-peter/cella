export interface IDrink {
  id: number;
  type: string;
  title: string;
  price: number;
  image: string;
}

export interface DrinkType {
  drinks: IDrink[];
}
