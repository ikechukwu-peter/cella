import React, { useState, useContext, useEffect } from "react";
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
  Flex,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import cogoToast from "cogo-toast";
import SeerbitCheckout from "seerbit-reactjs";
import { IBillingDetails } from "../@types/billing-details";
import { CartContext } from "../context/cart.context";
import { CartType } from "../@types/cart";
import { IPaystack, ISeerbit } from "../@types/paystack";
import { useData } from "../hooks/user.hooks";

export const BillingDetails = () => {
  const tokenData = sessionStorage.getItem("token") as string;
  const router = useRouter();
  const { loading, verifyNIN, saveData } = useData();
  const { cartTotal } = useContext(CartContext) as CartType;
  const [isAllowed, setIsAllowed] = useState<boolean>(false);

  const VAT = cartTotal * 0.015;
  const DELIVERY_FEE = cartTotal * 0.5;

  const [NIN, setNIN] = useState<string>("");
  const [token, setToken] = useState<string>(tokenData);
  const [reference, setReference] = useState<string>("");
  const [state, setState] = useState<IBillingDetails>({
    firstName: "",
    lastName: "",
    state: "",
    password: "",
    email: "johndoe@gmail.com",
  });

  const PUBLIC_KEY: string = `${process.env.NEXT_PUBLIC_SEERBIT_PUBLIC_KEY}`;

  const [data, setData] = useState<ISeerbit>({
    public_key: PUBLIC_KEY,
    amount: Number(cartTotal + VAT + DELIVERY_FEE),
    tranref: `${new Date().getTime()}`,
    customization: {
      theme: {
        border_color: "#000000",
        background_color: "#004C64",
        button_color: "#0084A0",
      },
      payment_method: ["card", "account", "transfer", "wallet", "ussd"],
      display_fee: true,
      display_type: "embed",
      logo: "logo_url | base64",
    },
  });

  const close = (close: any) => {
    router.push("/success");
  };
  const callback = (response: any) => {
    router.push("/success");
  };

  const checkProgress = (progress: any) => {
    console.log(progress, "PROGRESS");
  };

  useEffect(() => {
    let resp = sessionStorage.getItem("user");
    if (resp) {
      const _result = JSON.parse(resp);
      setState(_result);
    }
  }, []);

  useEffect(() => {
    setData({ ...data, amount: Number(cartTotal + VAT + DELIVERY_FEE) });
  }, [data, VAT, DELIVERY_FEE, cartTotal]);

  const handleState = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (NIN) {
      sessionStorage.setItem("NIN", NIN);
      const result = await verifyNIN(Number(NIN));
      console.log(result, "NIN SEARCH RESULT");
      if (!isAllowed) {
        return router.push("/warning");
      }

      // if (result?.length > 0) {
      //   console.log(result.length);
      //   console.log(result, "RESULT");
      //   const date = dayjs(new Date());
      //   const diff = date.diff(result?.birthdate, "year");

      //   if (diff < 18) {
      //     return router.push("/warning");
      //   }
      //   const newUser = {
      //     firstName: result?.firstname,
      //     lastName: result?.lastname,
      //     state: result?.residence_state,
      //     email: result?.email,
      //   };

      //   sessionStorage.setItem("user", JSON.stringify(newUser));
      //   setState(newUser);
      // } else {
      setToken("testtestest");
      setState({
        firstName: "Jefferson",
        lastName: "Hulabo",
        email: "jeffersonhulabo@gmail.com",
        state: "Rivers",
      });
      //   return;
      // }
    } else {
      cogoToast.warn("Empty fields");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  const onClose = (ref: IPaystack) => {
    alert("Are you sure?");
    router.push("/success");
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
        <form onSubmit={onSubmit}>
          <Flex justify="space-between" gap="2rem" align="flex-start">
            <FormControl>
              <Input
                type="number"
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
          </Flex>
          <Button my="1rem" onClick={() => setIsAllowed(!isAllowed)}>
            {isAllowed ? "Above" : "Below"}
          </Button>
        </form>
      )}

      <Box py="2rem">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
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

          {!!token && isAllowed && (
            <Button
              as={SeerbitCheckout}
              tranref={data.tranref}
              currency={"NGN"}
              description={"shopping"}
              country={"NG"}
              public_key={data.public_key}
              callback={callback}
              close={close}
              scriptStatus={checkProgress}
              amount={data.amount}
              tag={"button"}
              full_name={state.firstName + " " + state.lastName}
              email={state.email}
              // mobile_no={""}
              customization={data.customization}
              version={"2"}
              title={"Pay with SeerBit"}
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
