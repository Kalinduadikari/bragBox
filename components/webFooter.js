import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box mt={8} py={4} textAlign="center" borderTop="none" color="gray.600">
      <Text fontSize="sm" opacity={0.8}>
        &copy; {currentYear} Kalindu Adikari. All Rights Reserved.
      </Text>
      <Flex justifyContent="center" mt={2}>
        <Link
          href="/w9rks"
          color="gray.500"
          fontWeight="medium"
          _hover={{ color: 'gray.600' }}
          mx={2}
        >
          Portfolio
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
