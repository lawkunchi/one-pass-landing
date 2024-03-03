import { FC } from "react";
import { Flex, Box, Button, ButtonGroup, Link, Image } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";

const Header: FC = () => {
  return (
    <Box bg="#fff" minH="80px" borderBottom="1px solid green">
      <Flex justifyContent="space-between" padding="20px" alignItems="center">
        <Box>
          <Flex gap={4}>
            <Link variant="menuItem" href="/">
              Home
            </Link>
            <Link variant="menuItem" href="#about-us">
              About Us
            </Link>
            <Link variant="menuItem" href="#memberships">
              Memberships
            </Link>
          </Flex>
        </Box>

        <Box>
          <Image w="150px" src={Logo} alt="One Pass" />
        </Box>
        <Box>
          <ButtonGroup gap="4">
            <Button
              variant="primary"
              as={Link}
              href="https://form.jotform.com/240624052150543"
            >
              Get Started
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
