import Head from "next/head";
import { useState, useEffect } from "react";

import { Heading, Box, Input, FormLabel } from "@chakra-ui/react";
import { withAuthAdmin } from "../../infrastructure/admin/auth.admin";

export const Account = () => {
  //   const [state, setState] = useState<IUser>();

  //   useEffect(() => {
  //     let resp = sessionStorage.getItem("user");

  //     if (resp) {
  //       const user: IUser = JSON.parse(resp);
  //       setState(user);
  //     }
  //   }, []);

  return (
    <>
      <Head>
        <title>Cella || Admin</title>
        <meta name="description" content="Checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxW="container.xl" m="1rem">
          <Heading
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
            my="3rem"
          >
            Account
          </Heading>
          <Box w={{ base: "100%", md: "50%" }}></Box>
        </Box>
      </main>
    </>
  );
};

export default withAuthAdmin(Account);
