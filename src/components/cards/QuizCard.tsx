import { FC } from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { MdOutlineWatchLater } from "react-icons/md";

const QuizCard = () => {
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
          Wondering if Links Golf Club is for you?
        </Heading>
        <Text mb="20px" color="#fff">
          By sharing just a little information, we’ll create a customized offer
          that shows you which courses are available near you and how the
          membership works
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
        <Button variant="primary" size="xl" mb="20px">
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
