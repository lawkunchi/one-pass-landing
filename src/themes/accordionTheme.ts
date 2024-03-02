import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  root: {
    border: "1px solid #16331f",
  },
  panel: {
    color: "green",
    border: "none",
  },

  container: {
    color: "green", // change the backgroundColor of the container
    border: "none",
    _focus: {
        border: "none",
      },
  },

  button: {
    color: "green",
    border: "none",
    _focus: {
      border: "none",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
