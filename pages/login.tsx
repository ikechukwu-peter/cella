import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";
import {
  Stack,
  Box,
  Link,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Input,
  FormControl,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import { Footer } from "../infrastructure/navigation/footer.navigaton";
import { Header } from "../infrastructure/navigation/header.navigation";
import styles from "../styles/Home.module.css";
import { useData } from "../hooks/user.hooks";

const Login = () => {
  const { loading, signIn } = useData();

  const [state, setState] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleState = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn(state);
  };
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
            <Image src="/adminsign.svg" alt="Sign in SVG" w="100%" h="100%" />
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
                color="brand.200"
              >
                Welcome back
              </Heading>
              <Text
                fontSize={{ base: "1rem", md: "1.3rem" }}
                color={"brand.300"}
              >
                Sign in to your account ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={"brand.700"} boxShadow={"lg"} p={8}>
              <form onSubmit={onSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      autoComplete="false"
                      value={state.password}
                      onChange={handleState}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      value={state.password}
                      onChange={handleState}
                      autoComplete="false"
                    />
                  </FormControl>

                  <Stack spacing={10}>
                    <NextLink passHref href="/forgot/password">
                      <Link color={"brand.750"}>Forgot password?</Link>
                    </NextLink>

                    <Button
                      type="submit"
                      loadingText="Submitting"
                      variant="outline"
                      color="brand.100"
                      bg="brand.300"
                      _hover={{
                        bg: "brand.400",
                        color: " brand.500",
                      }}
                      disabled={loading || !state.email || !state.password}
                    >
                      {loading ? (
                        <Spinner
                          thickness="4px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="brand.300"
                          size="md"
                        />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Stack>
                </Stack>
              </form>
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

export default Login;
