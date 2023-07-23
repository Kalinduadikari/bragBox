import React, { useContext } from 'react';
import NextLink from 'next/link';
import { Heading, Box, Image, Link as ChakraUILink, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';


const CustomLink = styled(ChakraUILink)`
  text-decoration: none;
  color: #C04970;
  cursor: pointer;
`;

const WorksContext = React.createContext();

const useWorksData = () => {
  const context = useContext(WorksContext);
  if (!context) {
    throw new Error('useWorksData must be used within a WorksProvider');
  }
  return context;
};

const WorksProvider = ({ children, worksData }) => (
  <WorksContext.Provider value={worksData}>
    {children}
  </WorksContext.Provider>
);

const Title = () => {
  const worksData = useWorksData();

  return (
    <Box>
      <CustomLink as={NextLink} href="/w9rks">
        Works
      </CustomLink>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {worksData.title}
      </Heading>
    </Box>
  );
};

const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

export { Title, WorkImage, Meta, WorksProvider, useWorksData };
