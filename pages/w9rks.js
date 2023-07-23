import { Box, Container,} from "@chakra-ui/react";
import Section from "../components/sect10n";
import { ContentTemp } from "../components/red1r3ct";
import Layout from "../components/layouts/sw1shyP9";

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
            <ContentTemp id="ofsos" lng="JAVASCRIPT" title="OFSOS" descr="Advanced Inventory Management System for Seafood Retailers">
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
