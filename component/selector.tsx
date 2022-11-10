import { FC } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { SearchAction } from "../@types/search.dt";
import { DRINK_TYPES } from "../utilities/drink-types.utilities";

export const Selector: FC<SearchAction> = ({ onChange }) => {
  return (
    <Box bg="brand.300" as="header" role="contentinfo" py=".4rem" w="100%">
      <Flex
        align="center"
        justify={{ base: "null", md: "space-around" }}
        w="100%"
        px="1em"
        overflow="auto"
        gap="2rem"
      >
        {DRINK_TYPES.map((type, index) => (
          <Text
            position="relative"
            key={index}
            fontWeight={700}
            cursor="pointer"
            _hover={{
              color: "brand.500",
              bg: "null",
            }}
            border="none"
            bg="null"
            onClick={(e) => onChange(e.target)}
          >
            {type}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};
