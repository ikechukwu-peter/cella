import { Flex } from "@chakra-ui/react";
import styles from "./page.module.css";

export const PageLoader = () => {
  return (
    <Flex
      direction={"column"}
      align="center"
      justify="center"
      gap="2rem"
      minW="100vw"
      minH="100vh"
      pointerEvents="none"
      cursor="not-allowed"
      overflow="hidden"
      bg="brand.300"
    >
      <div className={styles.loader}>
        <div className={styles.face}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.face}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </Flex>
  );
};
