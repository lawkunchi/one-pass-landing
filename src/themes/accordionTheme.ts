import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  root: {
    border: "none",
  },
  panel: {
    color: "green",
    border: "none",
    fontSize: "18px",
    fontFamily: "GT Alpina Regular",
    _focus: {
      border: "none",
    },
  },

  container: {
    color: "green", // change the backgroundColor of the container
    border: "none",
    _focus: {
      border: "0 !important",
    },
  },

  button: {
    color: "green",
    fontSize: "21px",
    border: "none",
    _expanded: {
      backgroundColor: "green",
      color: "#fff",
      border: "none"
    },

    _hover: {
      backgroundColor: "#fff",
    },
  },

  icon: {
    color: "green",
    fontSize: "22px",
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
