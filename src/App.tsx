import { FC } from "react";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import HomeBanner from "./components/banners/HomeBanner";
import { Box, Text } from "@chakra-ui/react";
import TitleHeading from "./components/text/TitleHeading";
import PricingCard from "./components/cards/PricingCard";
import QuizCard from "./components/cards/QuizCard";

import Faq from "./components/cards/Faq";
const App: FC = () => {
  return (
    <>
      <Header />
      <HomeBanner></HomeBanner>
      <Box bg="green2" minH="80vh" py="60px" id="memberships">
        <TitleHeading
          text="MEMBERSHIPS BENEFITS"
          heading="Gain access to a diverse portfolio of partner courses around the globe with
          just one pass."
        />
        <PricingCard />
      </Box>

      <Box bg="#fff" py="60px" id="about-us">
        <TitleHeading theme="green" heading="One Pass" text="" />
        <TitleHeading theme="green" text="About Us" heading="" />
        <Box width="50%" margin="0 auto">
          <Text color="green" textAlign="center" mb="5">
            At OnePass Golf Club, we're dedicated to simplifying the way golfers
            access and enjoy the game they love. With just one pass, our members
            gain access to a network of top-tier golf courses and exclusive
            amenities, all with the ease and convenience of a single platform.
          </Text>
          <TitleHeading theme="green" text="Our Mission" heading="" />
          <Text color="green" textAlign="center">
            Our mission at OnePass Golf Club is to provide golfers of all levels
            with a seamless and enjoyable golfing experience. We aim to
            eliminate the hassle of navigating multiple memberships and booking
            processes, allowing our members to focus on what they love most –
            playing golf.
          </Text>
        </Box>
      </Box>

      <Box bg="green2" minH="80vh" py="60px" id="memberships">
        <QuizCard />
      </Box>

      <Box bg="#fff" py="60px" id="links-vs-private">
        <TitleHeading
          theme="green"
          text="What We Offer"
          heading="Join OnePass Golf Club Today "
        />

        <Faq />
      </Box>
      <Footer />

    </>
  );
};

export default App;
