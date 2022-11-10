import NextLink from "next/link";
import { FC } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { Props } from "../../@types/react";

export const Footer = () => {
  return (
    <Box minW="100%" bg="brand.400" role="contentinfo" px="1rem" w="100%">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        py="1.3rem"
        direction={{ base: "column", md: "row" }}
        gap="1rem"
      >
        <Box>
          <Button size="md" rounded="xl">
            Cella
          </Button>
        </Box>

        <Flex gap="1rem" color="brand.500" fontWeight={500}>
          <NextLink passHref href="/">
            <Text fontSize="0.75rem">Terms of Service</Text>
          </NextLink>
          <NextLink passHref href="/">
            <Text fontSize="0.75rem">Privacy Policy</Text>
          </NextLink>
          <NextLink passHref href="/">
            <Text fontSize="0.75rem">Liqour License</Text>
          </NextLink>
        </Flex>

        <Flex justify="space-between" align="center" gap="1.2rem">
          <SocialButton label="LinkedIn" color="brand.500">
            <BsLinkedin />
          </SocialButton>
          <SocialButton label="Twitter" color="brand.500">
            <BsTwitter />
          </SocialButton>
          <SocialButton label="Facebook" color="brand.500">
            <BsFacebook />
          </SocialButton>
        </Flex>
      </Flex>
    </Box>
  );
};

const SocialButton: FC<Props> = ({ children, label, href, bg, color }) => {
  return (
    <chakra.button
      bg={bg ? bg : "brand.100"}
      color={color ? color : "brand.500"}
      rounded={"full"}
      w={4}
      h={4}
      cursor={"pointer"}
      as={"a"}
      fontSize={{ base: "1rem", md: "1rem", lg: "1.4rem" }}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "brand.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
