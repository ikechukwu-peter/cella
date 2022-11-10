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

export const CartCard = () => {
  const { cart, cartTotal } = useContext(CartContext) as CartType;

  const { pathname } = useRouter();

  const VAT = cartTotal * 0.015;
  const DELIVERY_FEE = cartTotal * 0.5;

  localStorage.setItem("total", `${cartTotal + VAT + DELIVERY_FEE}`);

  return (
    <Stack
      align="left"
      shadow="xl"
      boxSizing="border-box"
      p="1.2rem"
      rounded="xl"
      w="100%"
    >
      <Text
        textTransform="uppercase"
        textAlign="center"
        color="brand.100"
        fontWeight={700}
      >
        Order Summary
      </Text>
      {!!cart.length &&
        cart.map((item) => (
          <Flex
            key={item.id}
            align="flex-start"
            justify={"space-between"}
            gap="5"
          >
            <Flex>
              <Image
                w="80px"
                h="80px"
                src={item.image}
                alt={"Picture of " + item.title}
              />
              <Box>
                <Text>{item.title}</Text>
                <Text fontSize={{ base: ".7rem", md: ".7rem", lg: ".7rem" }}>
                  Quantity: {item.quantity}
                </Text>
              </Box>
            </Flex>

            <CurrencyFormatter amount={item.price} />
          </Flex>
        ))}

      <Divider bg="brand.400" />

      <Flex justify="space-between" align="center">
        <Text fontSize=".75rem">SubTotal</Text>
        <Text as="strong" fontWeight={600}>
          <CurrencyFormatter amount={cartTotal} />
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text fontSize=".75rem"> VAT (1.5% Fee)</Text>
        <Text as="strong" fontWeight={600}>
          <CurrencyFormatter amount={VAT} />
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text fontSize=".75rem">Delivery Fee</Text>
        <Text as="strong" fontWeight={600}>
          <CurrencyFormatter amount={DELIVERY_FEE} />
        </Text>
      </Flex>

      <Divider bg="brand.400" />

      <Flex justify="space-between" align="center">
        <Text fontSize=".75rem">Total</Text>
        <Text as="strong" fontWeight={600}>
          <CurrencyFormatter
            amount={cartTotal + VAT + DELIVERY_FEE}
            color="brand.300"
          />
        </Text>
      </Flex>
      {pathname !== "/checkout" && (
        <NextLink passHref href="/checkout">
          <Button
            textTransform="uppercase"
            color="brand.200"
            bg="brand.300"
            _hover={{
              bg: "brand.400",
              color: " brand.500",
            }}
          >
            Proceed to Checkout
          </Button>
        </NextLink>
      )}
    </Stack>
  );
};
