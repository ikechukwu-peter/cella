import NextLink from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cella || Cella Page Not Found</title>
        <meta name="description" content="Cella || Cella Page Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, brand.800, brand.300)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          {"The page you're looking for does not seem to exist"}
        </Text>
        <NextLink passHref href="/">
          <Button
            as={Link}
            _hover={{
              textDecoration: "none",
            }}
            color="white"
            bg="black"
            // bgGradient="linear(to-r, brand.800, brand.300, brand.650)"
            // bg={"brand.300"}
            // color="brand.750"
            variant="solid"
          >
            Go to Home
          </Button>
        </NextLink>
      </Box>
    </>
  );
};

export default NotFound;
