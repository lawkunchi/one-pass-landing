import { FC } from "react";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  ButtonGroup,
  Text,
  Link,
} from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <Box bg="green" height="80px" borderBottom="1px solid gray">
      <Flex justifyContent="space-between" padding="20px" alignItems="center">
        <Flex gap={4}>
          <Menu>
            <MenuButton as={Text} variant="menuButton">
              EXPLORE MEMBERSHIP
            </MenuButton>
            <MenuList>
              <MenuItem>Course Access</MenuItem>
              <MenuItem>Option 2</MenuItem>
            </MenuList>
          </Menu>
          <Link variant="menuItem">EXPLORE MEMBERSHIP</Link>
        </Flex>

        <Link fontSize="20px">One Pass</Link>

        <ButtonGroup gap="4">
          <Button variant="outlineLight">Login</Button>
          <Button variant="outline">Get Started</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Header;
