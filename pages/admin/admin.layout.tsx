import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Icon,
  Image,
  Link,
  Button,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  Input,
  Heading,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { AdminSidebar } from "../../infrastructure/admin/sidebar.layout";
import { BsSearch } from "react-icons/bs";
// import { AuthenticationContext } from "../../context/auth.context";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="brand.500">
      <AdminSidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <AdminSidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 10 }} p=".3">
        {children}
      </Box>
    </Box>
  );
}

const MobileNav = ({ onOpen, ...rest }) => {
  //   const { user, onLogout, loading } = useContext(AuthenticationContext);

  const handleLogout = () => {
    // onLogout();
  };

  return (
    <Flex
      ml={{ base: 0, md: 20 }}
      px={{ base: 4, md: 4 }}
      py="2rem"
      height="10"
      alignItems="center"
      bg="brand.500"
      borderBottomWidth="1.6px"
      borderBottomColor="brand.50"
      justifyContent={{ base: "space-between", md: "space-between" }}
      pos="sticky"
      top="0"
      zIndex="999"
      boxShadow="md"
      gap={{ base: "1rem", md: "null" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Heading
        color="brand.100"
        fontWeight="600"
        lineHeight="24px"
        fontSize="1.5rem"
        display={{ base: "none", md: "flex" }}
      >
        Dashboard
      </Heading>

      <Stack gap={{ base: "0", md: "4" }} direction="row">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Text
            as="span"
            position="absolute"
            left="0.625rem"
            color="brand.400"
            zIndex={1}
          >
            <BsSearch />
          </Text>
          <Input
            bg="brand.50"
            color="brand.400"
            placeholder="What are you looking for?"
            _placeholder={{
              color: "brand.400",
            }}
            w="100%"
            pl="2.5rem"
            border="none"
            outline="none"
            _focus={{
              border: "none",
              outline: "none",
            }}
            _hover={{
              border: "1px solid #F5F5F5",
              outline: "none",
            }}
            _active={{
              border: "none",
              outline: "none",
            }}
            fontSize={{
              base: ".625rem",
              md: ".8rem",
            }}
          />
        </Box>
        <Flex alignItems={"center"}>
          <HStack>
            <Text display={{ base: "none", md: "flex" }} color="brand.100">
              admin
            </Text>
            <Avatar size="sm" />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            ></VStack>
          </HStack>
        </Flex>
      </Stack>
    </Flex>
  );
};
