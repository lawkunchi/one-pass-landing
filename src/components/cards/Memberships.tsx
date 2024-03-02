import TitleHeading from "../text/TitleHeading";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
const Memberships = () => {
  return (
    <Box width="80%" margin="0 auto">
      <TitleHeading
        text="EXPLORE MEMBERSHIP"
        heading="Unlock the best of golf."
      />

      <Grid mt="60px" templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem colSpan={4}>
          <ArticleCard
            imageSrc="https://framerusercontent.com/images/V9pUuGhF8ZOcMnw1H4HmWhDb6sg.jpg?scale-down-to=1024"
            title="Private Course Access"
            text="Experience what it's like to be a member of a private club with access to a network of over 400+ courses."
            link={{ text: "Learn more", url: "#" }}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ArticleCard
            imageSrc="https://framerusercontent.com/images/WTzjNeB35EFvhkpPm8BeX3VyI.webp?scale-down-to=1024"
            title="Exclusive Perks"
            text="Save on your favorite brands with member-only offers."
            link={{ text: "Learn more", url: "#" }}
          />
        </GridItem>
      </Grid>

      <Grid mt="60px"  mb="60px" templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem colSpan={2}>
          <ArticleCard
            imageSrc="https://framerusercontent.com/images/6ewTqa2ZBSDvyEtD0kF6j8Cnoo8.jpg?scale-down-to=1024"
            title="Community & Events"
            text="Join local groups and connect with like-minded golfers in your area."
            link={{ text: "Learn more", url: "#" }}
          />
        </GridItem>
        <GridItem colSpan={4}>
          <ArticleCard
            imageSrc="https://framerusercontent.com/images/tlOpTqOCaBJ7dryPvpM4yzmt8g.jpg?scale-down-to=2048"
            title="Links Leagues"
            text="We've developed a platform for members to compete against each other across the world on a level playing field."
            link={{ text: "Learn more", url: "#" }}
          />
        </GridItem>
      </Grid>

      <ArticleCard
        imageSrc="https://framerusercontent.com/images/V9pUuGhF8ZOcMnw1H4HmWhDb6sg.jpg?scale-down-to=1024"
        title="Spey Bay"
        text="With only 247 true-links golf courses in the world, we are blessed to call one of them our own in Spey Bay. "
        link={{ text: "Learn more", url: "#" }}
      />
    </Box>
  );
};

export default Memberships;
