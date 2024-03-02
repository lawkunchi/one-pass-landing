import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "gray",
  fontSize: "20px",
  fontFamily: "GT Alpina Regular",
  lineHeight: "1",
});

const italic = defineStyle({
  borderColor: "white",
  fontStyle: "italic",
  fontFamily: "GT Alpina Regular Italic",
  fontSize: "20px",
});

const lightGreen = defineStyle({
  color: "lightGreen",
});

const menuButton = defineStyle({
  fontWeight: "medium",
  color: "white",
  fontSize: "14px",
  fontFamily: "Nuckle Bold",
  lineHeight: "unset",
  _hover: {
    color: "lightGreen",
  },
});

const titleHeading = defineStyle({
  color: "lightGreen",
  fontFamily: "Nuckle Bold",
  fontSize: "18px",
});

const titleHeadingGreen = defineStyle({
  color: "green",
  fontFamily: "Nuckle Bold",
  fontSize: "18px",
});

export const textTheme = defineStyleConfig({
  baseStyle: baseStyle,
  variants: { italic, menuButton, lightGreen, titleHeading, titleHeadingGreen },
});
