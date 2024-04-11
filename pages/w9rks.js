import { Box, Container, Image, Flex, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/dynamicSectionLoader";
import { ContentTemp } from "../components/projectLink";
import Layout from "../components/layouts/ScrollFXLayout";


const Works = () => {
  const colorMode = useColorModeValue("light", "dark"); 

  const imageSrc = colorMode === "light" ? "/images/Nexs.png" : "/images/1657707878-nextjs_logo.png";
  const imageWidth = colorMode === "light" ? "50px" : "40px";
  const imageHeight = colorMode === "light" ? "50px" : "40px";
  const imageMargin = colorMode === "light" ? "-45px" : "-40px";

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
          mt={19.5}
        >
          <Box>
            <ContentTemp id="retailoptikit" lng="PYTHON" title="Retail OptiKit" descr="Apriori Algorithm for retailers to identify Best-Selling Product Combinations and ARIMA Model for Demand Forecasting for OFSOS!!">
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
          mt={19.5}
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
          mt={19.5}
        >
           <Box>
            <Flex align="center">
              <ContentTemp
                id=""
                lng="JAVASCRIPT"
                title="BragBox"
                descr="Insights about my portfolio website!! (the very site you are presently exploring)"
              />
              <Image marginLeft= {imageMargin} width={imageWidth} height={imageHeight} src={imageSrc} alt="Image" />
            </Flex>
          </Box>
          
        </Section>

        
      </Container>
    </Layout>
  );
};

export default Works;
