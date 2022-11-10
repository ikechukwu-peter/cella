import { useContext, useEffect } from "react";
import {
  Stack,
  Text,
  Button,
  Image,
  Flex,
  Box,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CartType } from "../@types/cart";
import { CartContext } from "../context/cart.context";
import CurrencyFormatter from "./currency-formatter";
import { useRouter } from "next/router";

export const WarningCard = () => {
  const { cart, cartTotal } = useContext(CartContext) as CartType;

  const { pathname } = useRouter();

  const VAT = cartTotal * 0.015;
  // const DELIVERY_FEE = cartTotal * 0.5;
  const DELIVERY_FEE = 1500;

  localStorage.setItem("total", `${cartTotal + VAT + DELIVERY_FEE}`);

  return (
    <Stack
      align="left"
      shadow="xl"
      boxSizing="border-box"
      p="1.2rem"
      rounded="xl"
      w={{ base: "90%", md: "50%" }}
      my="2rem"
    >
      <Text
        textTransform="uppercase"
        textAlign="center"
        color="brand.100"
        fontWeight={700}
      >
        Warning
      </Text>

      <Text textAlign="center" color="brand.400" fontWeight={500} py="1rem">
        {
          "Children and young people are advised not to drink alcohol before the age of 18. Alcohol usage in young children have been linked to developmental disabilities"
        }
      </Text>

      <NextLink passHref href="/">
        <Button
          w="100%"
          textTransform="uppercase"
          color="brand.200"
          bg="brand.300"
          _hover={{
            bg: "brand.400",
            color: " brand.500",
          }}
        >
          Go Back
        </Button>
      </NextLink>
    </Stack>
  );
};
