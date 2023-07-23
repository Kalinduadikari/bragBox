import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button, Image } from '@chakra-ui/react';


const NotFound = () => {
  return (
    <Container>
     
      
      <Heading as="h1" textAlign="center" my={4}>
        Oops! Page not found.
      </Heading>

     
      <Text textAlign="center" fontSize="xl" my={4}>
        The page you are looking for seems to be missing or has been moved.
      </Text>

      
      <Text textAlign="center" my={4}>
        You can try going back to the previous page or visit our homepage for more exciting content.
      </Text>

      
      <Divider my={6} />

      
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal" size="lg">
          Return to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
