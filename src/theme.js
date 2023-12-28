import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
 colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
 },
 styles: {
  global: {
    "html, body": {
      minHeight: "auto",
      minWidth: "1440px",
    },
  },
 }
});

export default theme;