import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { Header } from "../infrastructure/navigation/header.navigation";
import styles from "../styles/Home.module.css";
import { WarningCard } from "../component/warning-card";

const Warning = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || Login</title>
        <meta name="description" content="Cella || Login" />
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
          bg={"brand.500"}
          overflow="hidden"
        >
          <WarningCard />
        </Flex>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Warning;
