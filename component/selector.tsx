import { FC } from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { SearchAction } from "../@types/search.dt";
import { DRINK_TYPES } from "../utilities/drink-types.utilities";

export const Selector: FC<SearchAction> = ({ onChange }) => {
  return (
    <Box bg="brand.300" as="header" role="contentinfo" py=".4rem">
      <Flex mx="3rem" align="center" justify="space-around" maxW="container.xl">
        {DRINK_TYPES.map((type, index) => (
          <Button
            as="p"
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
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
