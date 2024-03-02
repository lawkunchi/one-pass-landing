import { FC } from "react";
import Header from "./components/navigation/Header";
import HomeBanner from "./components/banners/HomeBanner";
import { Box } from "@chakra-ui/react";
import TitleHeading from "./components/text/TitleHeading";
import PricingCard from "./components/cards/PricingCard";
import QuizCard from "./components/cards/QuizCard";
import Memberships from "./components/cards/Memberships";
import Faq from "./components/cards/Faq";
const App: FC = () => {
  return (
    <>
      <Header />
      <HomeBanner></HomeBanner>
      <Box bg="green2" minH="80vh" py="60px" id="links-vs-private">
        <TitleHeading
          text="THE ADVANTAGE"
          heading="Forget everything you know about traditional golf memberships."
        />
        <PricingCard />

        <QuizCard />
      </Box>

      <Box bg="green2" minH="80vh" py="60px" id="links-vs-private">
        <Memberships />
      </Box>

      <Box bg="#fff" minH="80vh" py="60px" id="links-vs-private">
        <TitleHeading
          theme="green"
          text="Now is the best time to join Links Golf Club!"
          heading="Choose your Links membership."
        />
        
        <Faq />
      </Box>
    </>
  );
};

export default App;
