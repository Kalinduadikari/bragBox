import React from 'react';
import { Container, Link as ChakraUILink, List, ListItem, Flex, Image, Heading, Link, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import Layout from '../../components/layouts/ScrollFXLayout';
import { WorksProvider } from '../../components/worksDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function changeFirstWordColor(sentence, word) {
  const index = sentence.indexOf(word);
  if (index === -1) return sentence;
  return (
    <>
      {sentence.substring(0, index)}
      <span style={{ 
                     background: "linear-gradient(to right, #00BFFF, #bdc2c4)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent", 
                     }}>{word}</span>
      {sentence.substring(index + word.length)}
    </>
  );
}

// Data for ofsos
const ofsosData = {
  title: 'ofsos',
  description: 'FISHINV This is an advanced inventory management system catered to seafood retailers. Seamlessly integrated with the innovative OFSOS project, it optimizes stock control and provides real-time analytics for enhanced efficiency!',
  website: 'https://ofsosweb.live/',
  stack: 'MongoDB | Express | NodeJS | React - MERN',
  firstGitHubLink: 'https://github.com/Kalinduadikari/webTheOFSOS',
  secGitHubLink: 'https://github.com/Kalinduadikari/backendOFSOS',
  images: [
    {
      src: '/images/firstOfsos.png',
      alt: 'Inkdrop'
    },
    {
      src: '/images/secOfsos.png',
      alt: 'Inkdrop'
    }
  ],
};

const Ofsos = () => (
  <WorksProvider worksData={ofsosData}>
    <Layout title="ofsos">
      <Container>
      <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        {changeFirstWordColor(ofsosData.description, 'FISHINV', '#007BFF')}
      </Heading>
    </motion.div>
        
      <Flex justify="center" mt={6} paddingBottom={12} pt={4}>
            <ChakraUILink href={ofsosData.website} isExternal>
              <motion.button 
                whileHover={{ scale: 1.25 }} 
                whileTap={{ scale: 0.95 }} 
                px={8} py={4} 
                fontSize="lg" 
                style={{ fontWeight: "400", color: "#C04970" }}  
                rounded="lg">
                Website <FiArrowRightCircle style={{ marginLeft: '21.5px'}} />
              </motion.button>
            </ChakraUILink>
          </Flex>

          <Flex justify="center" alignItems="center" flexWrap="wrap">
            {ofsosData.images.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                mx={2} 
                my={4}
                >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  maxW="280px" 
                  rounded="lg" 
                  boxShadow="lg" />
              </motion.div>
            ))}
          </Flex>

          <List ml={4} my={4}>
          <ListItem>
            View source Front-End: <Link href={ofsosData.firstGitHubLink} isExternal mx={2} color='#C04970'>
                  <FontAwesomeIcon style={{paddingRight:'1em'}} icon={faGithub} size="lg" />Github<ExternalLinkIcon mx="7px" mt="-4px"/>
                </Link>
            Back-End: <Link href={ofsosData.secGitHubLink} isExternal mx={2} color='#C04970'>
                  <FontAwesomeIcon style={{paddingRight:'1em'}} icon={faGithub} size="lg" />Github<ExternalLinkIcon mx="7px" mt="-4px"/>
                </Link><br/>
            
            </ListItem>
            </List>
      </Container>
    </Layout>
  </WorksProvider>
);

export default Ofsos;