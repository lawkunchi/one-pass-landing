import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  thead: {
    th: {
      borderColor: "rgba(252, 248, 243, 0.1) !important",

      "span:first-of-type": {
        fontSize: "22px",
        fontFamily: "GT Alpina Bold",
        display:"block",
        paddingBottom: "20px",
        textTransform: "capitalize",
      },
      "span:last-child": {
        fontSize: "16px",
        marginTop: "100px",
        fontFamily: "GT Alpina Regular",
        textTransform: "math-auto",
      },
    },
    "th:last-child": {
      background: "green",
      borderTopRadius: "10px",
      paddingTop: "40px",
    },
  },

  tr: {
    height: "70px",
    "td:first-of-type": {
      textTransform: "uppercase",
      fontFamily: "Nuckle Bold",
      fontWeight: "bold",
    },
    "td:last-child": {
      background: "green",
    },
  },
  tbody: {
    td: {
      color: "white",
      fontSize: "16px",
      borderColor: "rgba(252, 248, 243, 0.1) !important",
      fontFamily: "GT Alpina Regular",
    },
    "tr:last-child": {
      td: {
        border: "none",
      },
      "td:last-child": {
        paddingBottom: "20px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      },
    },
  },
});

export const tableTheme = defineMultiStyleConfig({ baseStyle });
