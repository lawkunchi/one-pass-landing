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
    <TableContainer maxWidth="80%" margin="0 auto" py="60px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>
              <span>Traditional Private Club</span>
              <span>Expensive and exclusive.</span>
            </Th>
            <Th>
              <span>Links Golf Club</span>
              <span>Affordable and accessible.</span>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>APPLICATION PROCESS</Td>
            <Td><CloseIcon mr="2" color="limeGreen"/> Waitlist + Referrals</Td>
            <Td>
              <CheckIcon color="lightGreen" mr="2" />
              Join Today
            </Td>
          </Tr>
          <Tr>
            <Td>INITIATION FEES</Td>
            <Td><CloseIcon mr="2" color="limeGreen"/> $10,000 - $100,000+</Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> $99 to $1499/year</Td>
          </Tr>
          <Tr>
            <Td>MONTHLY DUES</Td>
            <Td><CloseIcon mr="2" color="limeGreen"/> $500 - $1500/month</Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> Pay as you play</Td>
          </Tr>
          <Tr>
            <Td>EXCLUSIVE DEALS</Td>
            <Td><CloseIcon mr="2" color="limeGreen"/> None</Td>
            <Td><CheckIcon color="lightGreen" mr="2" /> 70+ offers from the best brands in golf</Td>
          </Tr>
          <Tr>
            <Td>COURSE ACCESS</Td>
            <Td><CloseIcon mr="2" color="limeGreen"/> Access to 1 course</Td>
            <Td><CheckIcon color="lightGreen" mr="2" />Access to 400+ courses</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PricingCard;
