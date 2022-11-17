import React, { FC, ReactNode } from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { GiBeerBottle } from "react-icons/gi";
import NextLink from "next/link";
import { IconType } from "react-icons/lib";
import { useRouter } from "next/router";

type routeType = {
  name: string;
  icon: IconType;
  to: string;
};

const routes: routeType[] = [
  {
    name: "Account",
    icon: AiOutlineUser,
    to: "/admin/account",
  },

  { name: "Add Drink", icon: GiBeerBottle, to: "/admin/upload" },
  { name: "Drinks", icon: FaBeer, to: "/admin/drinks" },

  { name: "Settings", icon: FiSettings, to: "/admin/setting" },
];

export function AdminSidebar({ onClose, ...rest }) {
  const role = sessionStorage.getItem("role");
  return (
    <Box
      transition="3s ease"
      bg="brand.400"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 20 }}
      pos="fixed"
      overflowY={"auto"}
      overflowX="hidden"
      h="full"
      boxShadow="inset 0 -2px 0 rgba(0, 0, 0, 0.1)"
      border="0 none"
      // scrollbarWidth="none"
      {...rest}
    >
      <Flex
        h="10"
        py="2rem"
        alignItems="center"
        mx="4"
        justifyContent="space-between"
      >
        <Button>Cella</Button>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {routes.map(({ name, icon, to }, index) => (
        <NavItem
          key={name + index}
          icon={icon}
          to={to}
          _activeLink="brand.100"
          onClick={onClose}
        >
          {/* {name} */}
        </NavItem>
      ))}
    </Box>
  );
}

const NavItem: FC<any> = ({ icon, to, children, ...rest }) => {
  const pathname = useRouter().pathname;

  return (
    <>
      <NextLink
        href={to}
        style={{ textDecoration: "none" }}
        // _focus={{ boxShadow: "none" }}
      >
        <Flex
          my=".6rem"
          bg={pathname === to && "brand.300"}
          color={pathname === to && "brand.400"}
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "brand.300",
            color: "brand.400",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "brand.400",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </NextLink>
    </>
  );
};
