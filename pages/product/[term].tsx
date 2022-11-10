import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import cogoToast from "cogo-toast";
import { IDrink } from "../../@types/drink";
import DRINKS from "../../infrastructure/data/wines.json";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { Header } from "../../infrastructure/navigation/header.navigation";
import { Footer } from "../../infrastructure/navigation/footer.navigaton";
import CurrencyFormatter from "../../component/currency-formatter";
import { Selector } from "../../component/selector";
import { Drinks } from "../../component/drinks";
import { CartContext } from "../../context/cart.context";
import { CartType } from "../../@types/cart";

const Search = () => {
  const { addToCart } = useContext(CartContext) as CartType;

  const { term } = useRouter().query;
  const [state, setState] = useState<number>(1);
  const [products, setProducts] = useState<IDrink[]>([
    {
      type: "",
      title: "",
      price: 0,
      image: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    if (!term) return;
    const items = DRINKS.filter(
      (drink) =>
        drink.title.toLowerCase().includes((term as string).toLowerCase()) ||
        drink.type.toLowerCase().includes((term as string).toLowerCase())
    );

    setProducts(items);
  }, [term]);

  const handleSearch = (e: any) => {
    let term = e && e.innerText.toLowerCase();
    const item = DRINKS.filter((drinks) => drinks.type === term);
    // setData(item);
  };

  const handleIncrement = () => {
    setState((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (state > 1) {
      setState((prev) => prev - 1);
    } else {
      cogoToast.warn("Quantity cannot be less than 1");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || {term}</title>
        <meta name="description" content="A product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Selector onChange={handleSearch} />

        <Box textTransform="capitalize" color="brand.200" ml="1rem" my="2rem">
          <Heading fontSize={"1rem"}>Searched for: {term}</Heading>
          <Drinks drinks={products} />
        </Box>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Search;
