import { FC } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
const Faq: FC = () => {
  const faqs = [
    {
      heading: "One Pass Access",
      text: "Gain access to a diverse portfolio of partner courses around the globe with just one pass.",
    },

    {
      heading: "Virtual Clubhouse",
      text: "Connect with fellow golfers, share tips and experiences, and stay updated on club events in our vibrant virtual clubhouse.",
    },

    {
      heading: " Premium Amenities",
      text: " Enjoy exclusive perks and services, including personalized coaching, recommendations for golf getaways, and expert advice from ourdedicated support team..",
    },
  ];
  return (
    <Box width="50%" margin="0 auto" mt="20px">
      <Accordion>
        {faqs.map((item) => (
          <AccordionItem key={item.heading}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.heading}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="22px" />
                    ) : (
                      <AddIcon fontSize="22px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.text}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faq;
