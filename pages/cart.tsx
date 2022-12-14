import styles from "../styles/Home.module.css";
import Head from "next/head";
import NextLink from "next/link";
import { useContext } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

import { Heading, Text, Box, Flex, Center, HStack } from "@chakra-ui/react";
import { Header } from "../infrastructure/navigation/header.navigation";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { CartCard } from "../component/cart-card";
import { CartTable } from "../component/cart-table";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";

export const Cart = () => {
  const { cart } = useContext(CartContext) as CartType;
  return (
    <div className={styles.container}>
      <Head>
        <title>Cella</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <Box maxW="container.xl" m="1rem">
          <Heading
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
            my="3rem"
          >
            My Cart
          </Heading>
          {!!cart.length ? (
            <>
              <Flex
                mt="4rem"
                align="center"
                gap={3}
                direction={{ base: "column", md: "row" }}
              >
                <CartTable />
                <CartCard />
              </Flex>

              <NextLink passHref href="/">
                <HStack color="brand.300" fontWeight={600}>
                  <BiLeftArrowAlt />
                  <Text>Continue Shopping</Text>
                </HStack>
              </NextLink>
            </>
          ) : (
            <Center my="4rem">
              <Heading color="brand.300" fontSize={"1.2rem"}>
                No item found in cart
              </Heading>
            </Center>
          )}
        </Box>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
