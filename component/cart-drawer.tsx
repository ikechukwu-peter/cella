import { FC, useContext } from "react";
import {
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CartContext } from "../context/cart.context";
import { CartType, ICartDrawer } from "../@types/cart";
import CurrencyFormatter from "./currency-formatter";

export const CartDrawer: FC<ICartDrawer> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, removeFromCart } = useContext(
    CartContext
  ) as CartType;

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader
            borderBottomWidth="1px"
            color="brand.750"
            fontSize={{ base: "1rem", md: "1.3rem" }}
            mb="2rem"
          >
            Shopping Cart
          </DrawerHeader>
          <DrawerBody>
            {cart && cart.length > 0 ? (
              cart.map((item: any, index: number) => {
                return (
                  <Box key={index}>
                    <VStack spacing={10} align="center">
                      {index === 0 ? null : <Divider />}

                      <SimpleGrid
                        columns={2}
                        spacing={4}
                        m="auto"
                        w={{ base: "100%" }}
                      >
                        <Box>
                          <Image
                            src={item.image}
                            objectFit="cover"
                            h={{ base: "auto", md: "240" }}
                            w={{ base: "100%", md: "100%" }}
                            rounded="xl"
                            alt={item.title}
                          />
                        </Box>
                        <Flex flexDir={"column"}>
                          <Heading
                            fontSize={[".8rem", ".9rem", "1rem", "1rem"]}
                            mb="1rem"
                          >
                            {item.title}
                          </Heading>

                          <Text mb=".6rem" fontWeight={"600"}>
                            <CurrencyFormatter amount={item?.price} />
                          </Text>

                          <HStack>
                            {/* <UpdateCartQuantity
                              incrementQuantity={incrementQuantity}
                              decrementQuantity={decrementQuantity}
                              data={item}
                            /> */}
                            <Button
                              bg="brand.300"
                              color="brand.750"
                              fontSize={["1rem"]}
                              size="sm"
                              w="1%"
                              onClick={() => handleRemoveFromCart(item.id)}
                              borderTopRadius="50%"
                              borderBottomRadius="50%"
                              _hover={{
                                color: "brand.200",
                                borderColor: "brand.700",
                                cursor: "pointer",
                              }}
                            >
                              &times;
                            </Button>
                          </HStack>
                        </Flex>
                      </SimpleGrid>
                      <Divider />
                    </VStack>

                    {cart.length - 1 !== index ? null : (
                      <Box w="100%">
                        <Flex my="2rem" justifyContent={"space-between"}>
                          <Text>Sub Total:</Text>
                          <Text fontSize="1rem" fontWeight={"700"}>
                            <CurrencyFormatter amount={cartTotal} />
                          </Text>
                        </Flex>
                        <HStack my="2rem" justifyContent={"space-between"}>
                          <Text>Total:</Text>
                          <Text fontSize="1rem" fontWeight={"700"}>
                            <CurrencyFormatter amount={cartTotal} />
                          </Text>
                        </HStack>
                        <Divider />
                      </Box>
                    )}
                  </Box>
                );
              })
            ) : (
              <>
                <VStack
                  spacing={1}
                  // align='stretch'
                >
                  <Box
                    textAlign={"center"}
                    border="1px solid brand.200"
                    my={{ base: "2rem", md: "2rem" }}
                    height="100%"
                  >
                    <Heading
                      textTransform={"uppercase"}
                      fontSize={{ base: ".8rem", md: "1.1rem" }}
                    >
                      Your Cart is currently empty
                    </Heading>
                    <Text
                      fontWeight="400"
                      color="brand.100"
                      my={{ base: "1rem", md: "1.2rem" }}
                      fontSize={{ base: "1rem", md: "1rem" }}
                    >
                      Return to our amazing shop and start filling it with
                      products. Click the button below to get started.
                    </Text>
                  </Box>
                </VStack>
              </>
            )}
          </DrawerBody>

          {cart && cart.length > 0 ? (
            <>
              <DrawerFooter borderTopWidth="1px">
                <NextLink passHref href="/cart">
                  <Button
                    size="md"
                    fontSize={{ base: ".8rem", md: "1rem" }}
                    bg="brand.300"
                    color="brand.750"
                    onClick={onClose}
                    _hover={{
                      color: "brand.200",
                      borderColor: "brand.700",
                      cursor: "pointer",
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
                  >
                    View Cart
                  </Button>
                </NextLink>
                <NextLink passHref href="/checkout">
                  <Button
                    size="md"
                    fontSize={{ base: ".8rem", md: "1rem" }}
                    bg="brand.300"
                    color="brand.750"
                    onClick={onClose}
                    _hover={{
                      color: "brand.200",
                      borderColor: "brand.700",
                      cursor: "pointer",
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
                  >
                    Check Out
                  </Button>
                </NextLink>
              </DrawerFooter>
            </>
          ) : (
            <>
              <DrawerFooter borderTopWidth="1px">
                <Button
                  w="100%"
                  size="md"
                  fontSize={{ base: ".8rem", md: "1rem" }}
                  bg="brand.300"
                  color="brand.750"
                  onClick={onClose}
                  _hover={{
                    color: "brand.200",
                    borderColor: "brand.700",
                    cursor: "pointer",
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
                  Return to Shop
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
