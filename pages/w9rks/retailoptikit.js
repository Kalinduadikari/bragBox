import React from 'react';
import { Container, List, ListItem, Flex, Image, Heading, Link, Box, Text, OrderedList, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Layout from '../../components/layouts/ScrollFXLayout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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



  const listItemStyle = {
    marginBottom: '16px',  
  };






const Retailoptikit = () => {

  const colorMode = useColorModeValue("light", "dark"); 
  const fColor = colorMode === "light" ? "black" : "grey";
  const fOpacity = colorMode === "light" ? "0.5" : "0.7";
  const sOpacity = colorMode === "light" ? "0.8" : "0.8";
  const imageSrc = colorMode === "light" ? "/images/flogo.svg.png" : "/images/flogodark.svg.png";



  const FeatureItem = ({ text }) => (
    <ListItem color={fColor} fontFamily="Inter" opacity={fOpacity} fontSize="lg" mb="2">
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
    

  // Data for ofsos
const retailoptikitData = {
    title: 'Box-fit PRO',
    description: 'Retail Opti Kit is an integrated machine learning platform developed to revolutionize seafood retail operations. This cutting-edge solution offers a suite of powerful features, including sales forecasting, best-selling product identification, and association rule mining.',
    features: [
      {
        id: 1,
        content: (
          <div key={1}>
            <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Sales Forecasting:</Heading>
            <br />
            <Text opacity={sOpacity}>The model offers accurate sales forecasts for a specific product based on historical data. This feature helps businesses anticipate demand and plan inventory accordingly.</Text>
            <br />
            <br />
          </div>
        ),
      },
      {
        id: 2,
        content: (
          <div key={2}>
            <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Historical Data Integration:</Heading>
            <br />
            <Text opacity={sOpacity}>The model seamlessly integrates with a MongoDB database, allowing the retrieval and utilization of historical sales data for analysis and forecasting.</Text>
            <br />
            <br />
          </div>
        ),
      },
      {
        id: 3,
        content: (
          <div key={3}>
           <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Data Preprocessing:</Heading>
            <br />
            <Text opacity={sOpacity}>It performs comprehensive data preprocessing tasks, including data normalization, type conversion, and date handling, to prepare the data for analysis and modeling.</Text>
            <br />
          </div>
        ),
      },
      {
          id: 4,
          content: (
            <div key={2}>
              <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">ARIMA Modeling:</Heading>
              <br />
              <Text opacity={sOpacity}> The model employs the ARIMA (AutoRegressive Integrated Moving Average) time series forecasting algorithm, a powerful technique for capturing temporal patterns and making predictions.</Text>
              <br />
              <br />
            </div>
          ),
        },
        {
          id: 5,
          content: (
            <div key={2}>
              <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Customizable Forecast Horizon:</Heading>
              <br />
              <Text opacity={sOpacity}>Users can specify the forecast horizon, making it flexible for short-term or long-term sales predictions.</Text>
              <br />
              <br />
            </div>
          ),
        },
        {
          id: 6,
          content: (
            <div key={2}>
              <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Best-Selling Product Identification:</Heading>
              <br />
              <Text opacity={sOpacity}>The server provides an endpoint to identify the best-selling products, aiding in inventory management and marketing strategies.</Text>
              <br />
              <br />
            </div>
          ),
        },
        {
          id: 7,
          content: (
            <div key={2}>
              <Heading mb="-15px" mt="10px" fontFamily="inter" fontSize="22px">Association Rule Mining:</Heading>
              <br />
              <Text opacity={sOpacity}>Another endpoint utilizes the Apriori algorithm to perform association rule mining, helping businesses discover relationships and patterns in sales data.</Text>
              <br />
              <br />
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
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Data-Driven Decision Making:</Heading> <Text opacity={sOpacity}> The model empowers businesses with data-driven insights, enabling informed decision-making regarding inventory, product promotion, and marketing campaigns.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Improved Inventory Management:</Heading> <Text opacity={sOpacity}> Accurate sales forecasting ensures optimal inventory levels, reducing the risk of overstocking or understocking products.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Enhanced Customer Experience:</Heading> <Text opacity={sOpacity}>By identifying best-selling products, businesses can offer customers what they want, leading to higher customer satisfaction and loyalty.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Marketing Efficiency:</Heading>  <Text opacity={sOpacity}>Association rule mining helps in creating targeted marketing strategies by identifying which products are often purchased together, leading to more effective cross-selling and upselling.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Competitive Advantage:</Heading>  <Text opacity={sOpacity}>Businesses using this model gain a competitive edge by staying ahead of market trends and consumer preferences through precise sales predictions.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Resource Optimization:</Heading>  <Text opacity={sOpacity}>By focusing resources on the most profitable and popular products, businesses can optimize their marketing and operational efforts.</Text></ListItem>
              <ListItem pb="20px" style={listItemStyle}><Heading pb="10px"  mt="10px" fontFamily="inter" fontSize="22px">Scalability:</Heading><Text opacity={sOpacity}>The model's modular design allows for scalability and adaptability to evolving business needs and changing datasets.</Text></ListItem>
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
        src: '/images/favicon_white.ico',
        alt: 'Inkdrop'
      },
      {
        src: imageSrc,
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



return(
  <WorksProvider worksData={retailoptikitData}>
    <Layout title="Box">
      <Container>
      <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        {changeFirstWordColor(retailoptikitData.description, 'Retail Opti Kit', '#007BFF')}
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
            <FeatureList features={retailoptikitData.features} />
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
            <FeatureList features={retailoptikitData.features2} />
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
            {retailoptikitData.technologies.map((image, index) => (
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
                  maxW={index === 2 ? "197px" : "77.1px"}
                  rounded="lg" 
                  boxShadow="lg" />
              </motion.div>
            ))}
          </Flex>

          </Box>
        </Flex>

       
         

          <List ml={4} my={4}>
          <ListItem>
            View source: <Link href={retailoptikitData.firstGitHubLink} isExternal mx={2} color='#C04970'>
                  <FontAwesomeIcon style={{paddingRight:'1em'}} icon={faGithub} size="lg" />Github<ExternalLinkIcon mx="7px" mt="-4px"/>
                </Link>
            
            </ListItem>
            </List>
            
      </Container>
    </Layout>

  </WorksProvider>
)
};

export default Retailoptikit;