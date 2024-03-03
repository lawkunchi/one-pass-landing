import { FC } from "react";
import { Box, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { MdOutlineWatchLater } from "react-icons/md";

const QuizCard: FC = () => {
  return (
    <Box
      border="2px solid #fff"
      borderRadius="10px"
      minH="300px"
      maxWidth="80%"
      margin="0 auto"
      pt="60px"
      mt="180px"
      px={10}
      position="relative"
      pb="60px"
    >
      <Box maxW="60%">
        <Heading mb="20px" color="#fff">
          Join OnePass Golf Club Today
        </Heading>
        <Text mb="20px" color="#fff" lineHeight={8}>
          Join us today and unlock a world of golfing possibilities with just
          one pass. Welcome to the club. Welcome to OnePass Golf Club.
        </Text>
        <Text
          mb="20px"
          color="#fff"
          style={{
            display: "inline-flex",
            gap: "10px",
          }}
        >
          <MdOutlineWatchLater
            style={{
              color: "#C4FF40",
            }}
          />{" "}
          Takes less than 1 minute
        </Text>
        <br />
        <Button
          variant="primary"
          size="xl"
          mb="20px"
          as={Link}
          href="https://form.jotform.com/240624052150543"
        >
          Get Started
        </Button>
      </Box>
      <Image
        position="absolute"
        right="0"
        bottom="-60px"
        width="550px"
        src="https://framerusercontent.com/images/o54IV1m4KR7ZUffjGWPXJpg1w0Q.png"
      />
    </Box>
  );
};

export default QuizCard;
