import { FC } from "react";
import { useRadio, Box } from "@chakra-ui/react";
import { Props } from "../@types/react";

export const RadioCard: FC<any> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" pos={"relative"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color={"brand.200"}
        border="none"
        borderRadius={"0rem"}
        fontWeight="600"
        py=".4rem"
        px="2rem"
        _hover={{
          backgroundColor: "brand.400",
          color: "brand.500",
        }}
        _focus={{
          backgroundColor: "brand.300",
        }}
        _active={{
          backgroundColor: "brand.300",
        }}
        borderWidth="1px"
        // borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "brand.400",
          color: "brand.500",
          borderColor: "brand.300",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
