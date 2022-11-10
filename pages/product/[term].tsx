import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { IDrink } from "../../@types/drink";
import DRINKS from "../../infrastructure/data/wines.json";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { Header } from "../../infrastructure/navigation/header.navigation";
import { Footer } from "../../infrastructure/navigation/footer.navigaton";
import { Selector } from "../../component/selector";
import { Drinks } from "../../component/drinks";

const Search = () => {
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
        drink.type.toLowerCase().includes((term as string).toLowerCase()) ||
        term === ""
    );

    setProducts(items);
  }, [term]);

  const handleSearch = (e: any) => {
    let term = e && e.innerText.toLowerCase();
    const item = DRINKS.filter((drinks) => drinks.type === term);
    // setData(item);
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
