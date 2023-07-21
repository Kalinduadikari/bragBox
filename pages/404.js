// Import necessary modules and components
import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button, Image } from '@chakra-ui/react';

// Custom 404 page component
const NotFound = () => {
  return (
    <Container>
     
      {/* Heading */}
      <Heading as="h1" textAlign="center" my={4}>
        Oops! Page not found.
      </Heading>

      {/* Description */}
      <Text textAlign="center" fontSize="xl" my={4}>
        The page you are looking for seems to be missing or has been moved.
      </Text>

      {/* Suggestion */}
      <Text textAlign="center" my={4}>
        You can try going back to the previous page or visit our homepage for more exciting content.
      </Text>

      {/* Divider */}
      <Divider my={6} />

      {/* Button */}
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal" size="lg">
          Return to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
