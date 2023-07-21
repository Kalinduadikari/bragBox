import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { motion, AnimatePresence } from "framer-motion"; 
import Para from "../components/para";
import { ChevronRightIcon, } from "@chakra-ui/icons";
import NextLink from 'next/link';
import { BioSection, BioYear } from "../components/LifeBits";
import Layout from '../components/layouts/SwishyPg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Page = () => {
  const initialModelScale = 0.1 * 0.1; 
  return (
    <>
    
    
     <Layout>
    <Container>
        
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} textAlign="center" mb={6}>
        Hello, I'm a fresh graduate software engineer!!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kalindu Adikari
          </Heading>
          <p>a fact-fiend |<Link href="https://twitter.com/k4lee_adi" isExternal mx={2}>
                  <FontAwesomeIcon color="#C04970" icon={faTwitter} size="lg" />
                </Link>
                <Link href="https://www.linkedin.com/in/kalinduadikari/" isExternal mx={2}>
                  <FontAwesomeIcon color="#C04970" icon={faLinkedin} size="lg" />
                </Link>
                <Link href="https://github.com/Kalinduadikari" isExternal mx={2}>
                  <FontAwesomeIcon color="#C04970" icon={faGithub} size="lg" />
                </Link></p>   
          
                
                
              
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/org.jpeg" alt="Profile Image" />
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            boxShadow = "none"
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
            <Heading as="h3" variant="section-title" ml='-49px'>
              Work
            </Heading>
            <Para>Kalindu Adikari, a dynamic full-stack developer fresh out of university. Beyond code, he explores the mysteries of the human mind, drawing inspiration from neuroscience, psychology, and the wisdom of thinkers like Marcus Aurelius. Together, let's craft transformative digital experiences that captivate hearts and minds. </Para>
            <Box align='center' my={4}>
            <Link as={NextLink} href="/w9rks" passHref>
                     <Button rightIcon={<ChevronRightIcon/>} colorScheme="gray">
                        My Portfolio
                     </Button>              
            </Link>
            </Box>
          </Section>

          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            boxShadow = "none"
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
        <Heading as="h3" variant="section-title" ml='-49px' letterSpacing={-1.3}>
            Life-bits
        </Heading>
        <BioSection>
            <BioYear>2000</BioYear>
            Born in North Western Province, Sri Lanka.
        </BioSection>
        <BioSection>
            <BioYear>2019</BioYear>
            Worked at Hatton National Bank PLC 🏦.
        </BioSection>
        <BioSection>
            <BioYear>2022</BioYear>
            Achieved the CIM (UK)🇬🇧 Professional Qualification in Marketing at Cambridge College.
        </BioSection>
        <BioSection>
            <BioYear>2023</BioYear>
            Successfully completed a Bachelor's (Hons) in Computer Science (Software Engineering) from Plymouth University, UK 🇬🇧.
        </BioSection>
        </Section>

          <Section
            hoverVariants={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            p={8}
            boxShadow = "none"
            borderRadius="md"
            parallaxSensitivity={0.15}
            mt={0.5}
          >
        <Heading variant="section-title" ml='-49px'>
        </Heading>
        <Para text-align="left">#🎙️Tunin' in to podcasts &nbsp; #groovin' to the beats&nbsp;  #flippin' pages&nbsp;  #spillin'_my_mind_on_twitter&nbsp; #🏋️Sweatin' it out</Para>
        </Section>
        </motion.div>
      </AnimatePresence>
    </Container>
    </Layout>
    </>
  );
};

export default Page;