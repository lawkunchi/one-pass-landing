import { FC } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

type TitleHeadingProps = {
  text: string;
  heading: string;
  theme?: string;
};
const TitleHeading: FC<TitleHeadingProps> = ({ text, heading, theme }) => {
  return (
    <Box textAlign="center" maxWidth="70%" margin="0 auto" py={5}>
      <Text
        variant={theme === "green" ? "titleHeadingGreen" : "titleHeading"}
        mb="20px"
      >
        {text}
      </Text>
      <Heading
        as="h2"
        variant={theme === "green" ? "titleSubHeadingGreen" : "titleSubHeading"}
      >
        {heading}
      </Heading>
    </Box>
  );
};

export default TitleHeading;
