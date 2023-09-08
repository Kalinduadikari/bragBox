import { Box, Container,} from "@chakra-ui/react";
import Section from "../components/dynamicSectionLoader";
import { ContentTemp } from "../components/projectLink";
import Layout from "../components/layouts/ScrollFXLayout";


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
          <Box>
            <ContentTemp id="boxfitpro" lng="PYTHON" title="Box-Fit PRO" descr="Determines the number of boxes that fit inside a container with a visual layout for companies!">
            </ContentTemp>
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
          <Box>
            <ContentTemp id="ofsos" lng="JAVASCRIPT" title="OFSOS" descr="Advanced Inventory Management System for Seafood Retailers">
            </ContentTemp>
          </Box>
          
        </Section>

        
      </Container>
    </Layout>
  );
};

export default Works;
