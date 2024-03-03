import { FC } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
const PricingCard: FC = () => {
  return (
    <TableContainer maxWidth="50%" margin="0 auto" py="60px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>
              {/* <span>Traditional Private Club</span> */}
              {/* <span>Expensive and exclusive.</span> */}
            </Th>
            <Th>
              <span>One Pass Golf Club</span>
              <span>Affordable and accessible.</span>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td>
              <CheckIcon color="lightGreen" mr="2" />
              Access to top-tier golf courses worldwide
            </Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> Exclusive member-only events and tournaments</Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> Personalized coaching and support</Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>
              {/* <CloseIcon mr="2" color="limeGreen"/> None */}
              </Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> Convenient booking and reservation system</Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td><CheckIcon color="lightGreen" mr="2" />Vibrant community of like-minded golf enthusiasts</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PricingCard;
