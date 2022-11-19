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
        <Box mx="2rem" mt="2rem">
          <Text fontStyle="bold" fontSize="1.2rem" fontWeight="800">
            Blog
          </Text>

          <Heading
            fontSize={{ base: ".8rem", md: "1rem" }}
            my="1rem"
            textTransform="uppercase"
          >
            {"~ Underaged drinking: Protecting Nigeria’s future"}
          </Heading>
          <Text color={"gray.500"} mb={6}>
            {
              "Many underaged citizens drink and have access to alcohol, whether it’s out of curiosity, ignorance, peer pressure or other reasons. Which is a major public health problem."
            }
          </Text>
          <Text color={"gray.500"} mb={6}>
            {
              "There’s very little control over the sale and distribution of alcohol on E-commerce platforms in Nigeria, and for this reason, the proton team embarked on this project to solve the prevalent alcohol abuse among Minors in Nigeria."
            }
          </Text>
          <Heading fontSize={{ base: ".8rem", md: "1rem" }}>
            ~ THE FEAR OF CYBER-IDENTITY THEFT AND IMPERSONATION
          </Heading>
          <Text color={"gray.500"} mb={6} my="1rem">
            Technology has influenced every aspect of our life, making it
            simpler but not necessarily better.
          </Text>
          <Text color={"gray.500"} mb={6}>
            This is demonstrated by the way the Internet is used daily by
            millions of people to communicate, to sell, advertise, retrieve, and
            share information. As good has the Internet is, it has provided new
            ways of conducting existing criminal activities, extend the
            geographic reach of criminal activities or create new types of
            criminal activity. One type of cyber-criminal activity is
            cyber-identity theft and impersonation. Due to the ease of data
            acquisition, the Internet has enabled the means for conducting
            fraudulent activities with stolen identity on e-platforms.
          </Text>
          <Text fontStyle="bold" fontSize="1.1rem" fontWeight="600">
            It is to this effect, that the Proton Team have embarked on an
            ambitious project of building a feature that will curb
            Cyber-Identity theft and impersonation in business.
          </Text>
        </Box>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
