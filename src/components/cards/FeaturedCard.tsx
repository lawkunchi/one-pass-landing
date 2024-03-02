import { FC } from "react";
import { Box, Flex, Grid, Image, GridItem, Text } from "@chakra-ui/react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Featured from "../../assets/images/featured/featured.svg";

const MotionBox = motion(Image);

const FeaturedCard: FC = () => {
  const featureImages = [
    Featured,
    "https://framerusercontent.com/images/c6ekyYWahKBl8OxmtaNBAx6SU.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/gGY8gUUZusgEhxcM07uHlAMQ04.jpg?scale-down-to=1024",
  ];

  const x = useMotionValue(0);
  const images = [...featureImages, ...featureImages]; // duplicate the list

  const variants = {
    animate: {
      x: "-50%",
      transition: {
        x: {
          duration: images.length / 2, // adjust timing as needed
          repeat: Infinity,
          ease: "linear", // add this line
        },
      },
    },
  };

  const childVariants = {
    animate: {
      x: useTransform(
        x,
        [0, -window.innerWidth * images.length],
        [0, window.innerWidth * images.length]
      ),
    },
  };
  return (
    <Box bg="green" h="150px">
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        width="80%"
        margin="0 auto"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Text>
            Featured In <span>|</span>
          </Text>
        </GridItem>
        <GridItem colSpan={4} style={{ overflow: "hidden" }}>
          <motion.div style={{ x }} variants={variants} animate="animate">
            <Flex gap="64px" style={{ overflow: "hidden" }}>
              {images.map((image, index) => (
                <MotionBox
                  key={index}
                  src={image}
                  variants={childVariants}
                  width="140px"
                  height="140px"
                />
              ))}
            </Flex>
          </motion.div>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FeaturedCard;
