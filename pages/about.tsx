import NextLink from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Header } from "../infrastructure/navigation/header.navigation";
import { Footer } from "../infrastructure/navigation/footer.navigaton";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || About</title>
        <meta name="description" content="Cella || About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Box mx="2rem" mt="2rem">
          <Text fontStyle="bold" fontSize="1.2rem" fontWeight="800">
            About
          </Text>
          <Text color={"gray.500"} mb={6} my="1rem">
            Cella is an online market for beer, spirit, wine and other varieties
            of alcohol drinks in Nigeria. We offer the safest and easiest way to
            shop for your desired drinks. We save our customer’s time, by
            helping them avoid long queues and crowded stores.
          </Text>
          <Text color={"gray.500"} mb={6}>
            At Cella, we prioritize our customers’ convenience and identity
            security by offering them confidentiality, Id verification as well
            as easy payment features to purchase on our platform.
          </Text>
          <Text fontStyle="bold" fontSize="1.1rem">
            Cella does not support sales to anyone less than 18 as our target
            users are men and women of legal drinking age.
          </Text>
        </Box>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
