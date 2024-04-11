import NextLink from 'next/link';
import { Text, LinkBox, LinkOverlay, Heading, Box, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ContentTemp = ({ children, id, title, lng, date }) => {
  const dateFontSize = useBreakpointValue({ base: '10px', md: '8px', lg: '11px' });
  return (
    <LinkBox>
      <NextLink href={`/w9rks/${id}`} scroll={false}>
        <LinkOverlay>
          <Box position="relative">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                borderRadius: "10px",
                padding: "20px", // Default padding
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                 
                 
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {date &&
                    date.split("").map((item, index) => {
                        if (item === " ") {
                        return <span key={index}>&nbsp;</span>; // Preserve existing spaces
                        } else {
                        return (
                            <div
                            key={index}
                            style={{
                                fontSize: dateFontSize,
                                fontWeight: "normal",
                                textTransform: "uppercase",
                                lineHeight: "12px",
                                
                                
                                
                            }}
                            >
                            {item}
                            </div>
                        );
                        }
                    })}

              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Heading fontFamily="inter" fontSize='8px' letterSpacing='2.6px'>
                {lng}
              </Heading>
              <Heading paddingLeft="20" fontFamily="inter" fontSize={['42px','7.9vw','6.5vw', '6.1vw', '5.2vw',]} variant="section-title" ml='-25px' textShadow='none'>
                {title}
              </Heading>
               
            </motion.div>
          </Box>
        </LinkOverlay>
      </NextLink>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  );
};

export default ContentTemp;
