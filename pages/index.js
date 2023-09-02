import { Box, Button, Container, Heading, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/sect10n";
import { motion, AnimatePresence } from "framer-motion"; 
import Para from "../components/p4ra";
import { ChevronRightIcon, } from "@chakra-ui/icons";
import NextLink from 'next/link';
import { BioSection, BioYear } from "../components/l1f3B1ts";
import Layout from "../components/layouts/sw1shyP9";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";


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
            <Para>I&apos;m Kalindu Adikari, a recent graduate with a passion for data science. Eager to embark on this exciting journey, I&apos;m here to leverage my skills and knowledge to unlock the potential hidden within data. Inspired by fields like neuroscience, psychology, and the wisdom of thinkers like Marcus Aurelius, I&apos;m ready to dive into the world of data and analytics. Let&apos;s explore the endless possibilities of data science together and make a meaningful impact.</Para>
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
        The book I&apos;m currently wrapped up in:
        
        </Heading>
        <Para text-align="left"></Para>
        <Image
          borderColor="transparent"
          borderWidth="2px"
          borderStyle="solid"
          borderRadius="full" 
          display="block" 
          mx="auto" 
          mt={4} 
          src="/images/book.jpg"
          alt="Book Image"
          loading="lazy"
          boxShadow="lg" 
          maxWidth="300px" 
        />
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