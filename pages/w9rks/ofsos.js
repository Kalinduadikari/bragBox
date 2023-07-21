import React from 'react';
import { Container, Link as ChakraUILink, List, ListItem, Box, Flex, Image, Heading } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import Para from '../../components/para';
import Layout from '../../components/layouts/SwishyPg';
import { Title, WorksProvider } from '../../components/work';

// Data for ofsos
const ofsosData = {
  title: 'ofsos',
  description: 'FISHINV is a powerful inventory management system that seamlessly integrates with the OFSOS project. Optimize your fish markets warehouse operations, control stock efficiently, and gain real-time analytics. Elevate your business with FISHINV today.',
  website: 'https://ofsosweb.live/',
  stack: 'MongoDB | Express | NodeJS | React - MERN',
  blogPostLink: 'https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820',
  images: [
    {
      src: '/images/firstOfsos.png',
      alt: 'Home Page'
    },
    {
      src: '/images/secOfsos.png',
      alt: 'Dashboard'
    }
  ],
};

const Ofsos = () => (
  <WorksProvider worksData={ofsosData}>
    <Layout title="ofsos">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
        <Container maxWidth="632px">
        <Box ml="18px">
        <Title />
        </Box>
          <Para style={{ textIndent: 0, maxWidth: '550px', marginLeft: '20px' }} textAlign="center">
            {ofsosData.description}
          </Para>
          <List ml={4} my={4}>
            <ListItem display="flex" alignItems="center">
              <Box mr={2} fontSize="xl"><FiArrowRightCircle color='#C04970'/></Box>
              <ChakraUILink href={ofsosData.website} isExternal color="#C04970">
                {ofsosData.website} <ExternalLinkIcon mx="2px" />
              </ChakraUILink>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Box mr={2} fontSize="xl"><FiArrowRightCircle color='#C04970'/></Box>
              <Box>{ofsosData.stack}</Box>
            </ListItem>
          </List>

          <Flex justify="center" alignItems="center" flexWrap="wrap">
            {ofsosData.images.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} mx={2} my={4}>
                <Image src={image.src} alt={image.alt} maxW="300px" rounded="lg" boxShadow="lg" />
              </motion.div>
            ))}
          </Flex>

          

        </Container>
      </motion.div>
    </Layout>
  </WorksProvider>
);

export default Ofsos;
