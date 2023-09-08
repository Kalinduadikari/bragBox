import NextLink from 'next/link';
import { Text, LinkBox, LinkOverlay, Heading, Box } from '@chakra-ui/react';
import Para from './paragraph';

export const ContentTemp = ({ children, id, title, lng, descr }) => (
  <LinkBox as="div">
    <NextLink href={`/w9rks/${id}`} scroll={false}>
      <LinkOverlay as="div">
      <Heading fontFamily="inter" fontSize='8px' letterSpacing='2.6px'>
          {lng}
        </Heading>
        <Heading fontFamily="inter" fontSize='55px' variant="section-title" ml='-25px' textShadow='none'>
          {title}
        </Heading>
        <Box ml="14px" fontFamily='inter' fontWeight='500' fontSize='12px' opacity='0.7'> 
         <Para style={{ textIndent: '0' }}>{descr}</Para>
        </Box>
      </LinkOverlay>
    </NextLink>
    <div>
      <Text fontSize={14}>{children}</Text>
    </div>
  </LinkBox>
);
