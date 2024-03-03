import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  background: "green",
  color: "#fff",
});

const outline = defineStyle({
  borderColor: "lightGreen",
  color: "lightGreen",
  border: "1px solid",
  _focus: {
    borderColor: "lightGreen",
  },
  _hover: {
    borderColor: "gray",
    color: "gray",
  },
});

const outlineLight = defineStyle({
  borderColor: "gray",
  color: "white",
  border: "1px solid",
  _focus: {
    borderColor: "gray",
  },
  _hover: {
    borderColor: "gray",
  },
});

const baseStyle = defineStyle({
  borderRadius: "3px",
  fontWeight: "semibold",
  fontSize: "14px",
  textTransform: "uppercase",
  fontFamily: "Nuckle Bold",
  _focus: {
    outline: "none",
  },
});

const xl = defineStyle({
  fontSize: "18px",
  h: "60px",
  padding: "20px 40px 18px",
  _hover: {
    border: "none",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle: baseStyle,
  sizes: { xl },
  variants: { outline, outlineLight, primary },
});
