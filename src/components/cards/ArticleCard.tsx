import { FC } from "react";
import { Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import { TiArrowRight } from "react-icons/ti";

type ArticleCardProps = {
  imageSrc: string;
  title: string;
  text: string;
  link: {
    text?: string;
    url?: string;
  };
};
const ArticleCard: FC<ArticleCardProps> = ({ imageSrc, title, text, link }) => {
  return (
    <Box>
      <Image
        width="100%"
        height="300px"
        src={imageSrc}
        objectFit={"cover"}
        borderRadius="10px"	
      />
      <Heading mb="20px" mt="20px" fontSize="28px" color="#fff">
        {title}
      </Heading>
      <Text mb="20px" color="#fff">
        {text}
      </Text>

      <Link
        variant="noTextDecoration"
        color="lightGreen"
        style={{
          display: "inline-flex",
          gap: "10px",
        }}
      >
        <span>{link.text}</span>
        <TiArrowRight
          style={{
            display: "inline-block",
            color: "#C4FF40",
            width: "20px",
            height: "20px",
          }}
        />
      </Link>
    </Box>
  );
};

export default ArticleCard;
