import React from 'react';
import { Container, List, ListItem, Flex, Image, Heading, Link, Box, Text, OrderedList, UnorderedList } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Layout from '../../components/layouts/sw1shyP9';
import { WorksProvider } from '../../components/w9rkStruct';
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

const FeatureItem = ({ text }) => (
  <ListItem color="grey" fontFamily="Inter" opacity="0.6" fontSize="lg" mb="2">
    <Flex align="center">
      {text}
    </Flex>
  </ListItem>
);

const FeatureList = ({ features }) => (
  <UnorderedList ml="4" mt="4" styleType="none">
    {features.map((feature, index) => (
      <FeatureItem key={index} text={feature.content} />
    ))}
  </UnorderedList>
);

  const listItemStyle = {
    marginBottom: '16px',  
  };

// Data for ofsos
const boxfitproData = {
  title: 'Box-fit PRO',
  description: 'Box-fit PRO This project presents an advanced 3D Box Packing Algorithm, designed to assist companies in optimizing their container packing processes. The system takes container dimensions and a list of box sizes as inputs, and then efficiently calculates how many boxes can be placed inside the container while providing a visual representation of the arrangement!',
  features: [
    {
      id: 1,
      content: (
        <div key={1}>
          <strong style={{ color: 'White' }}>Efficient Box Packing:</strong>
          <br />
          The algorithm sorts the boxes by volume, placing larger boxes first for better packing efficiency.
          <br />
          <br />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div key={2}>
          <strong style={{ color: 'White' }}>Visual Representation:</strong>
          <br />
          The system generates a 3D visualization of the packed container, helping you visualize how the boxes are arranged inside.
          <br />
          <br />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div key={3}>
          <strong style={{ color: 'White' }}>Percentage Filled:</strong>
          <br />
          It calculates the percentage of the container filled, giving you insights into space utilization.
          <br />
        </div>
      ),
    },
  ],
  
  features1: [
    {
      id: 1,
      content: (
        <div key={1}>
          <OrderedList>
            <ListItem style={listItemStyle}>Enter the container dimensions (width, height, and depth) in centimeters.</ListItem>
            <ListItem style={listItemStyle}>Specify the number of different box sizes you have.</ListItem>
            <ListItem style={listItemStyle}>Enter the dimensions (width, height, and depth) for each box.</ListItem>
            <ListItem style={listItemStyle}>
              The algorithm will calculate and display the following:
              <UnorderedList style={{ paddingLeft: '40px', listStyleType: 'disc' }}>
                <ListItem>Total number of boxes that fit in the container.</ListItem>
                <ListItem>The percentage of the container filled.</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem style={listItemStyle}>A 3D visualization will also be generated, showing how the boxes are packed inside the container.</ListItem>
          </OrderedList>
        </div>
      ),
    },
  ],
  
  features2: [
    {
      id: 1,
      content: (
        <div key={1}>
          <OrderedList>
            <ListItem style={listItemStyle}><strong style={{ color: 'White' }}>Space Maximization:</strong> Optimize container use to reduce shipping costs and minimize wasted space.</ListItem>
            <ListItem style={listItemStyle}><strong style={{ color: 'White' }}>Cost Efficiency:</strong> Lower operational expenses by requiring fewer containers, leading to substantial savings in shipping and storage costs.</ListItem>
            <ListItem style={listItemStyle}><strong style={{ color: 'White' }}>Time Savings:</strong> Eliminate the need for time-consuming manual calculations, enabling faster decision-making and streamlined logistics.</ListItem>
            <ListItem style={listItemStyle}><strong style={{ color: 'White' }}>Clear Visual Insights:</strong> Gain a visual representation of container packing, facilitating better logistics planning and helping you identify potential inefficiencies.</ListItem>
          </OrderedList>
        </div>
      ),
    },
  ],
  
  stack: 'MongoDB | Express | NodeJS | React - MERN',
  firstGitHubLink: 'https://github.com/Kalinduadikari/boxFitPro',
  images: [
    {
      src: '/images/Calculation.png',
      alt: 'Inkdrop'
    },
    {
      src: '/images/Visual.png',
      alt: 'Inkdrop'
    }
  ],
};

const Boxfitpro = () => (
  <WorksProvider worksData={boxfitproData}>
    <Layout title="Box">
      <Container>
      <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        {changeFirstWordColor(boxfitproData.description, 'Box-fit PRO', '#007BFF')}
      </Heading>
    </motion.div>
        
    <Flex justify="center" mt={12} pb={12} pt={4}>
          <Box>
          <Text
          css={{
            background: 'linear-gradient(to right, #C04970, white, white)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textIndent: '10px',
            fontFamily: 'Inter',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
              Key Features
            </Text>
            <FeatureList features={boxfitproData.features} />
          </Box>
        </Flex>



        <Flex justify="center" mt={-10} pb={12} pt={4}>
          <Box>
            <Text
              css={{
                background: 'linear-gradient(to right, #C04970, white, white)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textIndent: '10px',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Benefits
            </Text>
            <FeatureList features={boxfitproData.features2} />
          </Box>
        </Flex>




        <Flex justify="center" mt={-25} pb={12} pt={4}>
          <Box>
            <Text
              css={{
                background: 'linear-gradient(to right, #C04970, white, white)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textIndent: '10px',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              How to use
            </Text>
            <FeatureList features={boxfitproData.features1} />
          </Box>
        </Flex>

       
          <Flex justify="center" alignItems="center" flexWrap="wrap">
            {boxfitproData.images.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }} 
                whileHover={{ scale: 3.55 }} 
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
            View source: <Link href={boxfitproData.firstGitHubLink} isExternal mx={2} color='#C04970'>
                  <FontAwesomeIcon style={{paddingRight:'1em'}} icon={faGithub} size="lg" />Github<ExternalLinkIcon mx="7px" mt="-4px"/>
                </Link>
            
            </ListItem>
            </List>
      </Container>
    </Layout>
  </WorksProvider>
);

export default Boxfitpro;