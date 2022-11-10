import styles from "../styles/Home.module.css";
import Head from "next/head";
import NextLink from "next/link";
import { useContext } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

import {
  Heading,
  Text,
  Box,
  Flex,
  Center,
  HStack,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { Header } from "../infrastructure/navigation/header.navigation";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { CartCard } from "../component/cart-card";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";
import { BillingDetails } from "../component/billing-details";
import { WarningCard } from "../component/warning-card";
import { withAuth } from "../infrastructure/navigation/withauth.navigation";

export const Account = () => {
  const { cart } = useContext(CartContext) as CartType;

  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || Checkout</title>
        <meta name="description" content="Checkout" />
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
            Account
          </Heading>
          <Box w={{ base: "100%", md: "50%" }}>
            <Box my="1rem">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="First Name"
                value="John"
                isDisabled
              />
            </Box>
            <Box>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Last Name"
                value="Doe"
                isDisabled
              />
            </Box>
            <Box my="1rem">
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="First Name"
                value="johndoe@yahoo.com"
                isDisabled
              />{" "}
            </Box>

            <Box>
              <FormLabel>State</FormLabel>
              <Input type="text" placeholder="State" value="Lagos" isDisabled />
            </Box>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default withAuth(Account);
