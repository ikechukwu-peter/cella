import { FC } from "react";
import { Props } from "../@types/react";
import { Footer } from "./navigation/footer.navigaton";
import { Header } from "./navigation/header.navigation";
import styles from "../styles/Home.module.css";

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
