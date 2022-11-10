import Head from "next/head";
import { useState } from "react";
import { Flex, Button, Input, FormControl, Center } from "@chakra-ui/react";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { Header } from "../infrastructure/navigation/header.navigation";
import styles from "../styles/Home.module.css";
import { Drinks } from "../component/drinks";
import DRINKS from "../infrastructure/data/wines.json";
import { IDrink } from "../@types/drink";

const Shop = () => {
  const [state, setState] = useState<string>("");
  const [data, setData] = useState<IDrink[]>(DRINKS);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const items = DRINKS.filter(
      (drink) =>
        drink.title.toLowerCase().includes(state.toLowerCase()) ||
        drink.type.toLowerCase().includes(state.toLowerCase()) ||
        state === ""
    );

    setData(items);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || Shop</title>
        <meta name="description" content="Cella || Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Center m="2rem">
          <form onSubmit={handleSubmit}>
            <Flex align="center" gap="2rem">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter text to begin search"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                bg="brand.300"
                color="brand.200"
                _hover={{
                  bg: "brand.400",
                  color: "brand.500",
                }}
              >
                Search
              </Button>
            </Flex>
          </form>
        </Center>
        <Drinks drinks={data} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Shop;
