import { FC } from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { FormInterface } from "../@types/formfield";

const FormField: FC<FormInterface> = ({
  readonly,
  required,
  helper,
  error,
  label,
  children,
}) => {
  return (
    <Box my=".6rem">
      <FormControl
        isInvalid={!!error}
        isRequired={required}
        isReadOnly={readonly}
      >
        {label && (
          <FormLabel
            color="brand.400"
            fontSize={{ base: ".675rem", md: ".8rem" }}
          >
            {label}
          </FormLabel>
        )}
        {children}
        {helper && <FormHelperText color="brand.400">{helper}</FormHelperText>}
        {!!error && (
          <FormErrorMessage color="brand.700">{error}</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
};

export default FormField;
