import "../styles/globals.css";
import { useEffect, useState, useContext } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { theme } from "../infrastructure/theme/theme";
import { AuthProvider } from "../context/auth.context";
import { CartProvider } from "../context/cart.context";
import { PageLoader } from "../infrastructure/loader/page.loader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    setPageLoad(false);
  }, []);

  useEffect(() => {
    const handleStart = (url: string) => {
      return url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url: string) => {
      // return url === router.asPath && setLoading(false);
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);
  return (
    <AuthProvider>
      <CartProvider>
        <ChakraProvider resetCSS theme={theme}>
          {pageLoad ? (
            <PageLoader />
          ) : (
            <>{loading ? <PageLoader /> : <Component {...pageProps} />}</>
          )}
        </ChakraProvider>
      </CartProvider>
    </AuthProvider>
  );
}
