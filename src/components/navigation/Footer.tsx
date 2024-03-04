import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  LinkProps,
  Flex
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box py="90px" marginInline="auto" bg="green2">
      <Box margin="0 auto" width="80%">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box maxW="300px">
            <Flex alignItems="center" gap={2}>
              <Link href="/">
                <Image w="100px" src={Logo} alt="OnePass Golf" />
              </Link>
            </Flex>
          </Box>
          <HStack
            spacing={4}
            justifyContent={{ sm: "space-between", md: "normal" }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink href="#memberships">Mamberships</CustomLink>
                <CustomLink href="#about-us">About Us</CustomLink>
                <CustomLink href="https://form.jotform.com/240624052150543">
                  Get Started
                </CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>

        <Divider my={4} />

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Text fontSize="md">© {year}</Text>
          <Stack spacing={2} direction={{ base: "column", md: "row" }}>
            <Button
              as={Link}
              variant="primary"
              href="https://form.jotform.com/240624052150543"
            >
              Join Now
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="" fontSize="sm" {...props}>
      {children}
    </Link>
  );
};

export default Footer;
