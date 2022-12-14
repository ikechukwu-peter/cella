import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    colorScheme: "#ee2761",
    700: "#FF0000",
    600: "#121212",
    500: "rgba(255, 255, 255, 0.7)",
    400: "#935E08",
    300: "#DDA74F",
    200: "#181B22",
    100: "#272A31",
    50: "#F5F5F5",
  },
};

export const theme = extendTheme({
  colors,
  config,
});
