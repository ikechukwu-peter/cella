import Image from "next/image";
import { FC } from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { DrinkType, IDrink } from "../@types/drink";
import CurrencyFormatter from "./currency-formatter";

export const Drinks: FC<DrinkType> = ({ drinks }) => {
  return (
    <Flex p="2rem" align="center" gap="2rem">
      {!!drinks?.length &&
        drinks.map(({ title, type, image, price }, index: number) => (
          <Flex
            key={index + title}
            align="center"
            justify="center"
            direction="column"
          >
            <Image
              layout="responsive"
              placeholder="empty"
              src={image}
              alt="A picture of a drink"
              width={100}
              height={100}
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
        ))}
    </Flex>
  );
};
