import { FC } from "react";
import {
  Flex,
  Box,
  Image,
  Heading,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsArrowDownCircle } from "react-icons/bs";
import Banner from "../../assets/images/banner.webp";
import BannerRight from "../../assets/images/banner-right.webp";
const HomeBanner: FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="85vh"
      bg="#fff"
      overflow="hidden"
    >
      <Box position="relative" width="200px" height="100%">
        <Image
          borderRadius="10px"
          position="absolute"
          left="-30px"
          top="20%"
          transform="perspective(1200px) rotate(-11deg)"
          width="200px"
          src={Banner}
        />
      </Box>
      <Box textAlign="center" maxWidth="800px">
        <Text variant="italic" mb="20px" color="green">
          Welcome to OnePass Golf Club
        </Text>
        <Heading variant="display" mb="20px" lineHeight={1} color="green">
          Experience Prestigious Golf Clubs Worldwide with OnePass
        </Heading>
        <Text mb="20px" color="green">
          Your Gateway to Seamless Golfing Experiences
        </Text>
        <Button
          variant="primary"
          size="xl"
          mb="20px"
          as={Link}
          href="https://form.jotform.com/240624052150543"
        >
          Join Now
        </Button>
        <br />
        <br />
        <Link
          color="green"
          href="#memberships"
          variant="noTextDecoration"
          style={{
            display: "inline-flex",
            gap: "10px",
          }}
        >
          <span>Learn More</span>{" "}
          <BsArrowDownCircle
            style={{
              display: "inline-block",
              color: "#16331f",
              width: "20px",
              height: "20px",
            }}
          />
        </Link>
      </Box>
      <Box position="relative" width="200px" height="100%">
        <Image
          borderRadius="10px"
          position="absolute"
          right="-30px"
          bottom="20%"
          width="200px"
          transform="perspective(1200px) rotate(9deg)"
          src={BannerRight}
        />
      </Box>
    </Flex>
  );
};

export default HomeBanner;
