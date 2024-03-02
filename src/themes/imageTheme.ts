import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const homeBannerLeftImage = defineStyle({
  position: "absolute",
  left: 0,
  top: "20%",
  transform: "perspective(1200px) rotate(-11deg)",
});

const homeBannerRightImage = defineStyle({
  position: "absolute",
  right: 0,
  bottom: "20%",
  transform: "perspective(1200px) rotate(9deg)",
});

const baseStyle = defineStyle({
  borderRadius: "10px",
});

export const imageTheme = defineStyleConfig({
  baseStyle: baseStyle,
  variants: { homeBannerLeftImage, homeBannerRightImage },
});
