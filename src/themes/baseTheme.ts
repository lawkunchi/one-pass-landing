import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";
import { colors } from "./colors";
import { menuTheme } from "./menuTheme";
import { linkTheme } from "./linkTheme";
import { textTheme } from "./textTheme";
import { fontSizes } from "./fontSizes";
import { imageTheme } from "./imageTheme";
import { tableTheme } from "./tableTheme";
import { headingTheme } from "./headingTheme";
import { accordionTheme } from "./accordionTheme";

const fonts = {
  fonts: { heading: "GT Alpina Bold", body: "GT Alpina Regular" },
};

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes: fontSizes,
  components: {
    Button: buttonTheme,
    Menu: menuTheme,
    Link: linkTheme,
    Text: textTheme,
    Image: imageTheme,
    Table: tableTheme,
    Heading: headingTheme,
    Accordion: accordionTheme,
  },
});
