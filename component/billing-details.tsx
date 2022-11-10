import React, { useState, useContext } from "react";
import { PaystackButton } from "react-paystack";
import {
  Stack,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { IBillingDetails } from "../@types/billing-details";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";

export const BillingDetails = () => {
  const { cartTotal } = useContext(CartContext) as CartType;

  const VAT = cartTotal * 0.015;
  const DELIVERY_FEE = cartTotal * 0.5;

  const [NIN, setNIN] = useState<string>("");
  const [state, setState] = useState<IBillingDetails>({
    firstName: "",
    lastName: "",
    state: "",
    password: "",
    email: "johndoe@gmail.com",
  });

  const handleState = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(NIN);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  const loading = false;

  const onSuccess = (ref: object) => {
    console.log(ref);
  };
  const onClose = (ref: object) => {
    alert("Are you sure?");
  };

  const PUBLIC_KEY: string = `${process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY}`;

  const componentProps: any = {
    email: state.email,
    amount: (cartTotal + VAT + DELIVERY_FEE) * 1000,

    metadata: {
      state: state.state,
      firstName: state.firstName,
      lastName: state.lastName,
    },
    publicKey: PUBLIC_KEY,
    text: "Pay Now",
    onSuccess: onSuccess,
    onClose: onClose,
  };

  return (
    <Stack align="left" p="1.2rem" justify="space-between" w="100%">
      <Text
        textTransform="uppercase"
        textAlign="center"
        color="brand.100"
        fontWeight={700}
      >
        Billing Details
      </Text>

      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <FormControl>
          <Input
            border="2px solid #DDA74F"
            _focus={{
              border: "2px solid #DDA74F",
            }}
            placeholder="Enter NIN to continue"
            value={NIN}
            onChange={(e) => setNIN(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          loadingText="Submitting"
          variant="outline"
          color="brand.100"
          bg="brand.300"
          _hover={{
            bg: "brand.400",
            color: " brand.500",
          }}
        >
          Verify ID
        </Button>
      </form>

      <Box py="2rem">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email Addres</FormLabel>
            <Input
              type={"text"}
              border="2px solid #DDA74F"
              _focus={{
                border: "2px solid #DDA74F",
              }}
              placeholder="John"
              name="email"
              value={state.email}
              onChange={handleState}
              isDisabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type={"text"}
              border="2px solid #DDA74F"
              _focus={{
                border: "2px solid #DDA74F",
              }}
              placeholder="John"
              name="firstName"
              value={state.firstName}
              onChange={handleState}
              isDisabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type={"text"}
              placeholder="Doe"
              border="2px solid #DDA74F"
              _focus={{
                border: "2px solid #DDA74F",
              }}
              name="lastName"
              value={state.lastName}
              onChange={handleState}
              isDisabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>State of residence</FormLabel>
            <Input
              type={"text"}
              border="2px solid #DDA74F"
              _focus={{
                border: "2px solid #DDA74F",
              }}
              placeholder="Lagos"
              name="state"
              value={state.state}
              onChange={handleState}
              isDisabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              border="2px solid #DDA74F"
              _focus={{
                border: "2px solid #DDA74F",
              }}
              placeholder="******************"
              name="password"
              value={state.password}
              onChange={handleState}
            />
            <FormHelperText>
              Please keep safe, you will be required to log in with this
              password.
            </FormHelperText>
          </FormControl>
          <Button
            as={PaystackButton}
            {...componentProps}
            bg="brand.300"
            my="2rem"
            color="brand.850"
            textTransform="uppercase"
            p="1rem"
            letterSpacing="0.1rem"
            fontWeight={600}
            fontSize=".7rem"
            _hover={{
              bg: "brand.450",
            }}
            _focus={{
              outline: "none",
            }}
          ></Button>
        </form>
      </Box>
    </Stack>
  );
};
