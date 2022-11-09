import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { ICurrency } from "../@types/currency";
import { currencyFormatter } from "../utilities/format-currency.utilities";

const CurrencyFormatter: FC<ICurrency> = (props: ICurrency) => {
  return (
    <Text color={props.color ? props.color : "brand.400"} display="inline">
      &#8358;{currencyFormatter(props.amount)}
    </Text>
  );
};

export default CurrencyFormatter;
