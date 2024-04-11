import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Section from "../components/dynamicSectionLoader";
import { ContentTemp } from "../components/postLink";
import Layout from "../components/layouts/ScrollFXLayout";
import { motion } from 'framer-motion';

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0

  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined' && containerRef.current) {
      setPageWidth(containerRef.current.offsetWidth);
    }
  }, [windowWidth]); // Update page width when window width changes

  const handleScroll = () => {
    // Check if containerRef is available
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const newCurrentPage = Math.round(scrollLeft / pageWidth);
      if (currentPage !== newCurrentPage) {
        setCurrentPage(newCurrentPage);
      }
    }
  };

  const scrollToPage = (pageIndex) => {
    // Check if containerRef is available
    if (containerRef.current) {
      const newScrollLeft = pageIndex * pageWidth;
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  const renderPaginationDots = () => {
    const numPages = 4; // Assuming you have 3 sections
    const dots = [];
    for (let i = 0; i < numPages; i++) {
      dots.push(
        <Box
          key={i}
          w="10px"
          h="4px"
          bg={currentPage === i ? "red.500" : "gray.300"}
          borderRadius="full"
          ml={i === 0 ? 0 : 2}
          cursor="pointer"
          onClick={() => scrollToPage(i)}
        />
      );
    }
    return dots;
  };


  return (
    <Layout title="works">
      <Container>
        <Flex
          className="page-container"
          ref={containerRef}
          onScroll={handleScroll}
          css={{
            position: "relative",
            overflowX: "auto", // Change to auto for dynamic scrolling
            scrollBehavior: "smooth", // Add smooth scroll behavior
            "& > div": {
              flexShrink: 0,
              width: "100%",
              minWidth: "100%",
            },
          }}
        >
          <div className="page">
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
                <motion.div
                  style={{
                    width: `${windowWidth * 0.2}px`,
                    maxWidth: '100%',
                    background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                    borderRadius: "10px",
                    paddingRight: "60%",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <ContentTemp
                    id="ofsos"
                    date="APR 10 2024"
                    lng=""
                    title="As technology evolves, humans themselves devolve."
                    descr=""
                  />
                </motion.div>
              </Box>
            </Section>
          </div>


          <div className="page1">
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
              <motion.div
              style={{
                    width: `${windowWidth * 0.2}px`, // Set width as 20% of window width
                    maxWidth: '100%', // Ensure it doesn't overflow parent container
                    background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                    borderRadius: "10px",
                    paddingRight: "60%", // Adjust as needed
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                <ContentTemp
                  id="ofsos"
                  date="APR 10 2024"
                  lng=""
                  title="How Quadruple Entry Bookkeeping Might Just Transform Business for the Better. "
                  descr=""
                ></ContentTemp>
                </motion.div>
              </Box>
            </Section>
          </div>

          <div className="page2">
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
              <motion.div
              style={{
                    width: `${windowWidth * 0.2}px`, // Set width as 20% of window width
                    maxWidth: '100%', // Ensure it doesn't overflow parent container
                    background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                    borderRadius: "10px",
                    paddingRight: "60%", // Adjust as needed
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                <ContentTemp
                  id="ofsos"
                  date="APR 10 2024"
                  lng=""
                  title="As technology evolves, humans themselves devolve."
                  descr=""
                ></ContentTemp>
                </motion.div>
              </Box>
            </Section>
          </div>


          <div className="page3">
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
              <motion.div
              style={{
                    width: `${windowWidth * 0.2}px`, // Set width as 20% of window width
                    maxWidth: '100%', // Ensure it doesn't overflow parent container
                    background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                    borderRadius: "10px",
                    paddingRight: "60%", // Adjust as needed
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                >
                <ContentTemp
                  id="ofsos"
                  date="APR 10 2024"
                  lng=""
                  title="As technology evolves, humans themselves devolve."
                  descr=""
                ></ContentTemp>
                </motion.div>
              </Box>
            </Section>
          </div>

        </Flex>
        <Flex justify="center" mt={4}>
          {renderPaginationDots()}
        </Flex>
        
      </Container>
    </Layout>
  );
};

export default Posts;
