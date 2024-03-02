import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  button: {
    fontWeight: "medium",
    color: "black",
    fontFamily: "Nuckle Bold",
    _hover: {
      color: "lightGreen",
    },
  },

  list: {
    bg: "green",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: "white",
    border: "none",
    borderRadius: "none",
    fontFamily: "Nuckle Bold",
    _focus: {
      border: "none",
      borderRadius: "none",
    },
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
