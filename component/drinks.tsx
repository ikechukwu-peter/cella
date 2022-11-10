import { FC } from "react";
import NextLink from "next/link";
import { Flex, Text, Heading, Image, Center } from "@chakra-ui/react";
import { DrinkType } from "../@types/drink";
import CurrencyFormatter from "./currency-formatter";

export const Drinks: FC<DrinkType> = ({ drinks }) => {
  return (
    <Flex p="2rem" align="center" gap="2rem" wrap="wrap" justify="center">
      {!!drinks?.length ? (
        drinks.map(({ id, title, type, image, price }, index: number) => (
          <NextLink passHref href={"/shop/" + id} key={index + title}>
            <Flex
              align="center"
              justify="center"
              direction="column"
              cursor="pointer"
              _hover={{
                shadow: "md",
              }}
            >
              <Image
                src={image}
                alt={"A picture of " + title}
                w="200px"
                h="200px"
              />

              <Text color="brand.100" fontSize="0.75rem">
                {type}
              </Text>
              <Heading color="brand.200" fontSize=".9rem" lineHeight={"24px"}>
                {title}
              </Heading>
              <Text color="brand.300" fontSize="1rem" fontWeight="500">
                <CurrencyFormatter amount={price} color="brand.300" />
              </Text>
            </Flex>
          </NextLink>
        ))
      ) : (
        <Center>
          <Text color="brand.400">No Item found</Text>
        </Center>
      )}
    </Flex>
  );
};
