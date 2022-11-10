import Head from "next/head";
import NextLink from "next/link";
import { Stack, Box, Link, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { Header } from "../infrastructure/navigation/header.navigation";
import styles from "../styles/Home.module.css";

export const Success = () => {
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
          <Box
            alignItems="center"
            display={{
              md: "none",
              base: "none",
              lg: "block",
            }}
            width="50%"
            height="100vh"
            mt="4rem"
            pl="1rem"
            py={12}
          >
            <Image
              src="/adminsign.svg"
              w="100%"
              h="100%"
              alt="Just a picture"
            />
          </Box>
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
            <Stack align={"center"}>
              <Heading
                fontSize={{ base: "1.5rem", md: "2rem" }}
                color="brand.750"
              >
                Welcome back
              </Heading>
              <Text
                fontSize={{ base: "1rem", md: "1.3rem" }}
                color={"gray.600"}
              >
                Sign in to your account ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={"brand.700"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <Stack spacing={10}>
                  <NextLink passHref href="/forgot/password">
                    <Link color={"brand.750"}>Forgot password?</Link>
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
