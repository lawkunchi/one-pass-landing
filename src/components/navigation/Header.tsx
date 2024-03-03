import { FC } from "react";
import {
  Flex,
  Box,
  Button,
  ButtonGroup,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.jpg";

const Header: FC = () => {
  return (
    <Box bg="#fff" minH="80px" borderBottom="1px solid green">
      <Flex justifyContent="space-between" padding="20px" alignItems="center">
        <Box>
          <Flex alignItems="center">
            <Link href="/">
              <Image w="100px" src={Logo} alt="One Pass" />
            </Link>
            <Text color="green" fontSize="22px"> One Pass Golf</Text>
          </Flex>
        </Box>

        <Box>
          <Flex gap={4} alignItems="center">
            <Link variant="menuItem" href="#about-us">
              About Us
            </Link>
            <Link variant="menuItem" href="#memberships">
              Memberships
            </Link>
            <ButtonGroup gap="4">
              <Button
                variant="primary"
                as={Link}
                href="https://form.jotform.com/240624052150543"
              >
                Get Started
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
