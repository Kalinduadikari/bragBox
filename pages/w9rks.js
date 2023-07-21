import { Box, Button, Container, Heading, Link, } from "@chakra-ui/react";
import Section from "../components/section";
import Para from "../components/para";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Layout from "../components/layouts/SwishyPg";
import { WorkGridItem } from "../components/redirect";


const Works = () => {
  return (
    <Layout title="w9rks">
    <Container>
          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
          <WorkGridItem id="ofsos">
            <Heading fontFamily="inter" fontSize='8px' letterSpacing='2.6px'>
            JAVASCRIPT
            </Heading>
            <Heading fontFamily="inter" fontSize='25px' variant="section-title" ml='-25px' textShadow='none'>
              OFSOS
              </Heading>
              <Box ml="14px" fontFamily='inter' fontWeight='500' fontSize='12px' opacity='0.7'> 
          <Para>Advanced Inventory Management System for Seafood Retailers.</Para>
        </Box>
        </WorkGridItem>
          </Section>
          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
            <Heading fontFamily="inter" fontSize='8px' letterSpacing='2.6px'>
            JAVASCRIPT
            </Heading>
            <Heading fontFamily="inter" fontSize='25px' variant="section-title" ml='-25px' textShadow='none'>
              OFSOS
              </Heading>
              <Box ml="14px" fontFamily='inter' fontWeight='500' fontSize='12px' opacity='0.7'> 
          <Para>Advanced Inventory Management System for Seafood Retailers.</Para>
        </Box>
          </Section>
          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
            <Heading fontFamily="inter" fontSize='8px' letterSpacing='2.6px'>
            JAVASCRIPT
            </Heading>
            <Heading fontFamily="inter" fontSize='25px' variant="section-title" ml='-25px' textShadow='none'>
              OFSOS
              </Heading>
              <Box ml="14px" fontFamily='inter' fontWeight='500' fontSize='12px' opacity='0.7'> 
          <Para>Advanced Inventory Management System for Seafood Retailers.</Para>
        </Box>
          </Section>
    </Container>
    </Layout>
  );
};

export default Works;
