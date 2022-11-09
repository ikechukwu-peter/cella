import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IDrink } from "../../@types/drink";
import { DRINKS } from "../../utilities/drinks.utilities";

const Product = () => {
  const { id } = useRouter().query;
  const [product, setProduct] = useState<IDrink>({
    type: "",
    title: "",
    price: 0,
    image: "",
    id: 0,
  });

  useEffect(() => {
    const items = DRINKS.filter((drink) => drink.id === Number(id));
    setProduct(items[0]);
  }, [id]);

  return null;
};

export default Product;
