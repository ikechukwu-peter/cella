import React, { FC } from "react";
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
  Image,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IHead } from "../../@types/header";

export const MobileNav: FC<IHead> = ({ isOpen, onClose, pages }) => {
  const token = null;
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
                    // onClick={onOpen}
                  >
                    Search Here
                  </Button>

                  {token ? (
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
    </>
  );
};
