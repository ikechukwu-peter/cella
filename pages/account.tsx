import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";

import { Heading, Box, Input, FormLabel } from "@chakra-ui/react";
import { Header } from "../infrastructure/navigation/header.navigation";
import { Footer } from "../infrastructure/navigation/footer.navigaton";

import { withAuth } from "../infrastructure/navigation/withauth.navigation";
import { IUser } from "../@types/user";

export const Account = () => {
  const [state, setState] = useState<IUser>();

  useEffect(() => {
    let resp = sessionStorage.getItem("user");

    if (resp) {
      const user: IUser = JSON.parse(resp);
      setState(user);
    }
  }, []);

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
                value={state?.firstName}
                isDisabled
              />
            </Box>
            <Box>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Last Name"
                value={state?.lastName}
                isDisabled
              />
            </Box>
            <Box my="1rem">
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="First Name"
                value={state?.email}
                isDisabled
              />{" "}
            </Box>

            <Box>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                placeholder="State"
                value={state?.state}
                isDisabled
              />
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
