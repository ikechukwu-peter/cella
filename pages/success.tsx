import Head from "next/head";
import NextLink from "next/link";
import { Stack, Box, Link, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { Header } from "../infrastructure/navigation/header.navigation";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";
import { useEffect } from "react";

const Success = () => {
  const { clearCart } = useContext(CartContext) as CartType;

  useEffect(() => {
    clearCart();
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || Payment Successful</title>
        <meta name="description" content="Cella || Payment Successful" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"brand.250"}
          overflow="hidden"
        >
          <Stack
            spacing={8}
            mx={"auto"}
            maxW={"lg"}
            py={12}
            px={6}
            height="100vh"
            w="100%"
            flex="1"
          >
            <Box rounded={"lg"} bg={"brand.500"} boxShadow={"lg"} p={12}>
              <Stack spacing={4}>
                <Text
                  fontSize={{ base: "1rem", md: "1.3rem" }}
                  color={"gray.600"}
                >
                  Order Placed successfully✌️
                </Text>
                <Stack spacing={10} align="center">
                  <NextLink passHref href="/">
                    <Link color={"brand.300"}>Home</Link>
                  </NextLink>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Success;
