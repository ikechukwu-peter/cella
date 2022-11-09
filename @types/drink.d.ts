export interface IDrink {
  type: string;
  title: string;
  price: number;
  image: string;
}

export interface DrinkType {
  drinks: IDrink[];
}
