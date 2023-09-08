import React, { useState } from 'react';
import { Container, List, ListItem, Flex, Image, Heading, Link, Box, Text, OrderedList, UnorderedList } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Layout from '../../components/layouts/ScrollFXLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageModal from '../../components/ImageModal';
import { WorksProvider } from '../../components/worksDetails';

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
  <ListItem color="#555" fontFamily="Inter" opacity="0.7" fontSize="lg" mb="2">
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
          <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Efficient Box Packing:</Heading>
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
          <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Visual Representation:</Heading>
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
         <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Percentage Filled:</Heading>
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
            <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Space Maximization:</Heading> Optimize container use to reduce shipping costs and minimize wasted space.</ListItem>
            <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Cost Efficiency:</Heading> Lower operational expenses by requiring fewer containers, leading to substantial savings in shipping and storage costs.</ListItem>
            <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Time Savings:</Heading> Eliminate the need for time-consuming manual calculations, enabling faster decision-making and streamlined logistics.</ListItem>
            <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Clear Visual Insights:</Heading> Gain a visual representation of container packing, facilitating better logistics planning and helping you identify potential inefficiencies.</ListItem>
          </OrderedList>
        </div>
      ),
    },
  ],
  technologies: [
    {
      src: '/images/Python.png',
      alt: 'Inkdrop'
    },
    {
      src: '/images/Numpy.png',
      alt: 'Inkdrop'
    },
    {
      src: '/images/Matplotlib.png',
      alt: 'Inkdrop',
    }
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




const Boxfitpro = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

return(
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



        <Flex justify="center" mt={-10} pb={12} pt={4}>
          <Box>
            <Text
              css={{
                background: 'linear-gradient(to right, #C04970, #C04970, white)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Technologies Used:
            </Text>
            <Flex marginTop="30px" justify="center" alignItems="center" flexWrap="wrap">
            {boxfitproData.technologies.map((image, index) => (
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
                  maxW={index === 2 ? "200px" : "80px"}
                  rounded="lg" 
                  boxShadow="lg" />
              </motion.div>
            ))}
          </Flex>

          </Box>
        </Flex>

       
          <Flex marginTop="20px" justify="center" alignItems="center" flexWrap="wrap">
            {boxfitproData.images.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }} 
                
                mx={2} 
                my={4}
                onClick={() => handleImageClick(index)}
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
    <ImageModal
              isOpen={selectedImageIndex !== null}
              onClose={handleCloseModal}
              imageData={boxfitproData.images[selectedImageIndex]}
            />

  </WorksProvider>
)
};

export default Boxfitpro;