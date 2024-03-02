import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "gray",
  fontSize: "24px",
  fontFamily: "GT Alpina Bold",
});

const display = defineStyle({
  fontSize: "96px",
  lineHeight: "1 !important",
  color: "#fff",
});

const titleSubHeading = defineStyle({
  color: "#fff",
});

const titleSubHeadingGreen = defineStyle({
  color: "green",
  fontSize: "64px",
});

export const headingTheme = defineStyleConfig({
  baseStyle: baseStyle,
  variants: { display, titleSubHeading, titleSubHeadingGreen },
});
