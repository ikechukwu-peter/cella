import React, { useState, useContext, useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import cogoToast from "cogo-toast";
import { IBillingDetails } from "../@types/billing-details";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";
import { IPaystack } from "../@types/paystack";
import { useData } from "../hooks/user.hooks";

export const BillingDetails = () => {
  const token = sessionStorage.getItem("token") as string;
  const router = useRouter();
  const { loading, verifyNIN, saveData } = useData();
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

  useEffect(() => {
    let resp = sessionStorage.getItem("user");
    if (resp) {
      const _result = JSON.parse(resp);
      setState(_result);
    }
  }, []);

  const handleState = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (NIN) {
      sessionStorage.setItem("NIN", NIN);
      const result = await verifyNIN(Number(NIN));
      console.log("RESULT", result);
    } else {
      cogoToast.warn("Empty fields");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  const onSuccess = async (ref: IPaystack) => {
    let _items = localStorage.getItem("cart");

    if (_items) {
      const items = JSON.parse(_items);
      const payload = {
        reference: ref.reference,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        state: state.state,
        password: state.password,
        items,
      };

      await saveData(payload);
      router.push("/success");
    }
  };
  const onClose = (ref: IPaystack) => {
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

      {!token && (
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            alignItems: "flex-start",
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
            <FormHelperText>
              Your NIN will be used to verify your ability to buy the stated
              drinks based on the country law.
            </FormHelperText>
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
            disabled={loading || !NIN}
          >
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="brand.300"
                size="md"
              />
            ) : (
              "Verify"
            )}
          </Button>
        </form>
      )}

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
          {!!token && (
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
            />
          )}
        </form>
      </Box>
    </Stack>
  );
};
