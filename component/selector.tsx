import { Flex, Text, Box } from "@chakra-ui/react";
import { DRINK_TYPES } from "../utilities/drink-types.utilities";

export const Selector = () => {
  return (
    <Box bg="brand.300" as="header" role="contentinfo" py=".4rem">
      <Flex mx="3rem" align="center" justify="space-around" maxW="container.xl">
        {DRINK_TYPES.map((type, index) => (
          <Text
            key={index}
            fontWeight={700}
            cursor="pointer"
            _hover={{
              color: "brand.500",
            }}
          >
            {type}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};
