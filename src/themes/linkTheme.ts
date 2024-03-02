import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  textDecoration: "none",
  fontWeight: "medium",
  fontFamily: "Nuckle Bold",
  textTransform: "uppercase",
  _hover: {
    color: "lightGreen",
  },
});

const menuItem = defineStyle({
  fontSize: "14px",
  color: "white",
});

const noTextDecoration = defineStyle({
  _hover: {
    textDecoration: "none",
  },
});

export const linkTheme = defineStyleConfig({
  baseStyle: baseStyle,
  variants: { menuItem, noTextDecoration },
});
