import { useState, useContext } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoMdBasket } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Search } from "../../component/search";
import { CartDrawer } from "../../component/cart-drawer";
import { CartType } from "../../@types/cart";
import { CartContext } from "../../context/cart.context";
import { MobileNav } from "./mobile-header.navigation";

const PAGE_LINKS = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "Blog", to: "/blog" },
  { name: "About", to: "/about" },
];

export const Header = () => {
  const token = sessionStorage.getItem("token") as string;

  const { cart } = useContext(CartContext) as CartType;
  const [state, setState] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  //tablet for button size [not working with chakra-ui props]
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  return (
    <Box
      minW="100%"
      bg="brand.400"
      as="header"
      role="contentinfo"
      py=".6rem"
      w="100%"
      maxW="100%"
      zIndex="999"
      top="0"
      pos="sticky"
      overflow="hidden"
    >
      {isMobile ? (
        <>
          <Flex align="center" justify="space-between" minW="100%" p=".6rem">
            <Box
              onClick={onMenuOpen}
              aria-label="open menu"
              color="brand.500"
              fontWeight={600}
              fontSize={"2rem"}
            >
              <FiMenu />
            </Box>

            <Box w="auto">
              <NextLink passHref href="/">
                <Button w="100%" rounded="xl">
                  Cella
                </Button>
              </NextLink>
            </Box>

            <Button
              size="sm"
              leftIcon={<IoMdBasket />}
              color="brand.500"
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
              onClick={onCartOpen}
            >
              <sup>{cart.length}</sup>
            </Button>
          </Flex>
          <MobileNav
            isOpen={isMenuOpen}
            onClose={onMenuClose}
            pages={PAGE_LINKS}
          />
        </>
      ) : (
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
                  color="brand.500"
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
              color="brand.500"
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
              color="brand.500"
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
              onClick={onCartOpen}
            >
              <sup>{cart.length}</sup>
            </Button>

            {token ? (
              <NextLink passHref href="/account">
                <Button
                  leftIcon={<CiUser />}
                  variant="ghost"
                  color="brand.500"
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
              </NextLink>
            ) : (
              <NextLink passHref href="/login">
                <Button
                  leftIcon={<CiUser />}
                  color="brand.500"
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
                  Login
                </Button>
              </NextLink>
            )}
          </Flex>
        </Box>
      )}
      <Search
        isOpen={isOpen}
        onClose={onClose}
        searchTerm={state}
        setSearchTerm={setState}
      />
      {/* CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} onClose={onCartClose} />
    </Box>
  );
};
