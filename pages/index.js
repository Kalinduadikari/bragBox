import { Box, Button, Container, Heading, Image, Link, Text, useColorModeValue, Flex, } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion"; 
import { ChevronRightIcon, } from "@chakra-ui/icons";
import NextLink from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BioSection, BioYear } from "../components/styledBioSection";
import Layout from "../components/layouts/ScrollFXLayout";
import Section from "../components/dynamicSectionLoader";
import Para from "../components/paragraph";


const Page = () => {
  return (
    <>
    
    
     <Layout>
    <Container>
        
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} textAlign="center" mb={6}>
      Hello, I&apos;m a fresh graduate software engineer!!
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
                </Link>
                <Link href="https://www.instagram.com/k4lee.adi/" isExternal mx={2}>
                  <FontAwesomeIcon color="#C04970" icon={faInstagram} size="lg" />
                </Link></p>   
          
                
                
              
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/avi.jpg" alt="Profile Image" loading="lazy" />
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
            <Para>Kalindu Adikari, a recent graduate propelled by a fervent passion for AI and Data Science, is excited to embark on this journey. The Telos is to apply skills to address challenges through AI applications and extract valuable insights from data.</Para>
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
            Successfully completed a Bachelors (Hons) in Computer Science (Software Engineering) from Plymouth University, UK 🇬🇧.
        </BioSection>
        </Section>


{/* This is a Section component with various props 
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
        <Para text-align="left">#🎙️Tunin&apos; in to podcasts &nbsp; #groovin to the beats&nbsp;  #flippin pages&nbsp;  #spillin_my_mind_on_twitter&nbsp; #🏋️Sweatin it out</Para>
        </Section>
*/}

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
        The books I&apos;m currently wrapped up in:
        
        </Heading>
        <Para text-align="left"></Para>
        <Flex justifyContent="center">
        <Image
          borderColor="transparent"
          borderWidth="2px"
          borderStyle="solid"
          borderRadius="20px" 
          display="block" 
          mx="auto" 
          mt={4} 
          src="/images/boook.jpg"
          alt="Book Image"
          loading="lazy"
          boxShadow="lg" 
          maxWidth="150px" 
         
        />
       
        </Flex>
        </Section>



        {/* Quotes Section */}
        <Section
                id="quotes"
                hoverVariants={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                p={8}
                boxShadow="none"
                borderRadius="md"
                parallaxSensitivity={0.15}
                mt={0.5}
              >
                <Heading variant="section-title" ml="-49px">
                  Top Quips
                </Heading>

                
                <Box
                  mt={8}
                  bg={useColorModeValue("gray.100", "gray.800")}
                  borderRadius="md"
                  p={4}
                  ml={[-2, -4, -8]} 
                  width={["auto", "auto", "570px"]} 
                  boxShadow="lg"
                >
                  <Text textAlign="left" fontStyle="italic" fontSize="xl">
                    &quot;Pain is inevitable, suffering is optional.&quot; - Haruki Murakami
                  </Text>
                </Box>

                
                <Box
                  mt={8}
                  bg={useColorModeValue("gray.100", "gray.800")}
                  borderRadius="md"
                  p={4}
                  ml={[-2, -4, -8]} 
                  width={["auto", "auto", "570px"]} 
                  boxShadow="lg"
                >
                  <Text textAlign="left" fontStyle="italic" fontSize="xl">
                    &quot;Every man has two lives, and the second starts when he realizes he has just one&quot;―
                    Confucius
                  </Text>
                </Box>
              </Section>
        </motion.div>
      </AnimatePresence>
    </Container>
    </Layout>
    </>
  );
};

export default Page;