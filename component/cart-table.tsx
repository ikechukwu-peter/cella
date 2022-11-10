import { useContext, FC, useState, useEffect } from "react";
import {
  Stack,
  Text,
  Button,
  Image,
  Flex,
  Box,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";
import { CartContext } from "../context/cart.context";
import { CartType, ICart } from "../@types/cart";
import CurrencyFormatter from "./currency-formatter";

export const CartTable = () => {
  const { cart } = useContext(CartContext) as CartType;
  return (
    <Stack align="left" p="1.2rem" justify="space-between" w="100%">
      <Text
        textTransform="uppercase"
        textAlign="center"
        color="brand.400"
        fontWeight={700}
      >
        Order Details
      </Text>
      <Divider bg="brand.400" />

      {!!cart.length && (
        <>
          <TableContainer>
            <Table size="lg">
              <Thead>
                <Tr display={{ base: "none", md: "table-row" }}>
                  <Th
                    fontWeight="500"
                    color="brand.200"
                    fontSize="1.1rem"
                    textTransform="capitalize"
                  >
                    Product Name
                  </Th>
                  <Th
                    fontWeight="500"
                    color="brand.200"
                    fontSize="1.1rem"
                    textTransform="capitalize"
                  >
                    Price
                  </Th>

                  <Th
                    fontWeight="500"
                    color="brand.200"
                    fontSize="1.1rem"
                    textTransform="capitalize"
                  >
                    Quantity
                  </Th>

                  <Th
                    fontWeight="500"
                    color="brand.200"
                    fontSize="1.1rem"
                    textTransform="capitalize"
                  >
                    Total
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.map((item, index) => (
                  <Items key={index} {...item} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </Stack>
  );
};

const Items: FC<ICart> = ({ price, image, title, id, quantity, type }) => {
  const [state, setState] = useState<number>(quantity);
  const { cart, incrementCart, decrementCart, removeFromCart } = useContext(
    CartContext
  ) as CartType;

  const handleState = (x: number) => {
    setState(x);
  };
  const handleIncrement = (id: number) => {
    setState((prev) => prev + 1);
    incrementCart(id);
  };

  const handleDecrement = (id: number) => {
    if (state > 1) {
      setState((prev) => prev - 1);
      decrementCart(id);
    }
  };

  return (
    <Tr
      display={{ base: "flex", md: "table-row" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Td display="flex" flexDir={"column"} justifyContent="center">
        <HStack>
          <Button
            bg="brand.300"
            color="brand.750"
            fontSize={["1rem"]}
            size="sm"
            mb={{ base: "1rem", md: "0" }}
            w="1%"
            borderTopRadius="50%"
            borderBottomRadius="50%"
            _hover={{
              color: "brand.200",
              borderColor: "brand.700",
              cursor: "pointer",
            }}
            onClick={() => removeFromCart(id)}
          >
            &times;
          </Button>
          <HStack
            mb={{ base: "1rem", md: "0" }}
            w={["40%", "40%", "30%", "30%"]}
            _hover={{
              opacity: "0.9",
            }}
          >
            <Image
              m="auto"
              rounded="xl"
              src={image}
              alt={"Picture of " + title}
            />

            <Box>
              <Text color="brand.100" fontWeight={600}>
                {title}
              </Text>
              <Text fontSize={".76rem"} color="brand.400">
                {type}
              </Text>
            </Box>
          </HStack>
        </HStack>
      </Td>
      <Td
        display={{ base: "flex", md: "table-cell" }}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontWeight="700" color="brand.600" mb={{ base: "1rem", md: "0" }}>
          <CurrencyFormatter amount={Number(price)} />
        </Text>
      </Td>
      <Td
        display={{ base: "flex", md: "table-cell" }}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontWeight="700" color="brand.200" mb={{ base: "2rem", md: "0" }}>
          <HStack>
            <Button
              rounded="xl"
              size="sm"
              border="2px solid #000"
              bg="null"
              onClick={() => handleDecrement(id)}
            >
              -
            </Button>
            <Input
              type="number"
              value={state}
              onChange={(e) => {
                handleState(Number(e.target.value));
              }}
              w="100%"
              isReadOnly
            />
            <Button
              rounded="xl"
              size="sm"
              border="2px solid #000"
              bg="null"
              onClick={() => handleIncrement(id)}
            >
              +
            </Button>
          </HStack>
        </Text>
      </Td>

      <Td
        display={{ base: "flex", md: "table-cell" }}
        alignItems={"center"}
        justifyContent="center"
      >
        <CurrencyFormatter amount={state * price} />
      </Td>
    </Tr>
  );
};
