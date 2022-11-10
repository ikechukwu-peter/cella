import NextLink from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Header } from "../infrastructure/navigation/header.navigation";
import { Footer } from "../infrastructure/navigation/footer.navigaton";

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || Blog</title>
        <meta name="description" content="Cella || Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Box
          textAlign="center"
          py={10}
          px={6}
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
          minW={"100vw"}
          minH={"100vh"}
        >
          <Text color={"gray.500"} mb={6}>
            Coming Soon!
          </Text>
          <NextLink passHref href="/">
            <Button
              as={Link}
              _hover={{
                textDecoration: "none",
              }}
              bg={"brand.300"}
              color="brand.200"
              variant="solid"
            >
              Go to Home
            </Button>
          </NextLink>
        </Box>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
