import React, { FC, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IHead } from "../../@types/header";
import { Search } from "../../component/search";

export const MobileNav: FC<IHead> = ({ isOpen, onClose, pages }) => {
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();
  const [state, setState] = useState<string>("");

  const handleSearchOpen = () => {
    onClose();
    onSearchOpen();
  };

  const token = false;
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.400">
          <DrawerCloseButton color="brand.650" onClick={onClose} />
          <DrawerHeader borderBottomWidth="1px">
            <Flex
              fontWeight="700"
              justifyContent="flex-start"
              alignItems="center"
              onClick={onClose}
            >
              <Box w="100%">
                <NextLink passHref href="/">
                  <Button rounded="xl">Cella</Button>
                </NextLink>
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody mt="4rem">
            <Flex align={"center"} gap={3} direction="column">
              {pages !== undefined &&
                pages.length > 0 &&
                pages.map(({ to, name }) => (
                  <NextLink key={name} passHref href={to}>
                    <Button
                      w="100%"
                      color="brand.750"
                      bg="brand.300"
                      _hover={{
                        bg: "null",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "brand.100",
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
                      mr={3}
                      onClick={onClose}
                    >
                      {name}
                    </Button>
                  </NextLink>
                ))}
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <>
              <Flex align={"center"} gap={3}>
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
                    onClick={handleSearchOpen}
                  >
                    Search Here
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
              </Flex>
            </>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Search
        isOpen={isSearchOpen}
        onClose={onSearchClose}
        searchTerm={state}
        setSearchTerm={setState}
      />
    </>
  );
};
