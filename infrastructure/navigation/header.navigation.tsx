import { useState } from "react";
import { Box, Flex, useDisclosure, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoMdBasket } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Search } from "../../component/search";

const PAGE_LINKS = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "Blog", to: "/blog" },
  { name: "About", to: "/about" },
];

export const Header = () => {
  const [state, setState] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minW="100%"
      bg="brand.400"
      as="header"
      role="contentinfo"
      py=".4rem"
      w="100%"
      maxW="100%"
      zIndex="999"
      top="0"
      pos="sticky"
      overflow="hidden"
    >
      <Box
        display={"flex"}
        alignItems="center"
        maxW="container.xl"
        mx="1.4rem"
        justifyContent={"space-evenly"}
      >
        <Box w="100%">
          <NextLink passHref href="/">
            <Button rounded="xl">Cella</Button>
          </NextLink>
        </Box>

        <Flex align={"center"} gap={4} w="100%">
          {PAGE_LINKS.map(({ to, name }) => (
            <NextLink passHref href={to} key={name}>
              <Box
                color="brand.100"
                fontWeight={700}
                _hover={{
                  bg: "null",
                  cursor: "pointer",
                  color: "brand.500",
                  textDecoration: "none",
                }}
                _focus={{
                  bg: "null",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                _active={{
                  bg: "null",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {name}
              </Box>
            </NextLink>
          ))}
        </Flex>
        <Flex align={"center"} w="100%">
          <Button
            leftIcon={<BsSearch />}
            variant="ghost"
            _hover={{
              bg: "null",
              color: "brand.500",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _focus={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _active={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            onClick={onOpen}
          >
            Search Here
          </Button>

          <Button
            leftIcon={<IoMdBasket />}
            variant="ghost"
            _hover={{
              bg: "null",
              color: "brand.500",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _focus={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _active={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            My Cart
          </Button>

          <Button
            leftIcon={<CiUser />}
            variant="ghost"
            _hover={{
              bg: "null",
              color: "brand.500",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _focus={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            _active={{
              bg: "null",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            My Account
          </Button>
        </Flex>
      </Box>
      <Search
        isOpen={isOpen}
        onClose={onClose}
        searchTerm={state}
        setSearchTerm={setState}
      />
    </Box>
  );
};
