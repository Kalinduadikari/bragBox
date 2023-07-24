import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from 'next/head'
import Navbar from '../n4vB4r'
import { Box, Container } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Footer from "../f00t3r";


const Model = dynamic(() => import("../ezy3d"), {
    ssr: false
});

const Main = ({ children, router }) => {
    const initialModelScale = 0.1 * 0.1; 
    const isPostsRoute = router.asPath === '/w9rks';


    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const updateContentHeight = () => {
            const contentElement = document.getElementById('main-content');
            if (contentElement) {
                setContentHeight(contentElement.offsetHeight);
            }
        };

        updateContentHeight();

        window.addEventListener("resize", updateContentHeight);
        return () => window.removeEventListener("resize", updateContentHeight);
    }, []);



    return(
        <Box as='main' pb={8} minHeight="100vh" display="flex" flexDirection="column">
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <title>Kalindu Adikari</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14} flexGrow={1}>

            {!isPostsRoute && (
                    <Box>
                        <Canvas style={{ width: '100%', height: '320px' }}>
                            <Suspense fallback={null}>
                                <Model initialScale={initialModelScale} /> 
                            </Suspense>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[0, 10, 0]} />
                            <directionalLight
                                color="white"
                                intensity={1}
                                position={[0, 0, 5]}
                            />
                            <OrbitControls />
                        </Canvas>
                    </Box>
                )}

                <Box id="main-content" minHeight={`calc(100% - ${contentHeight}px)`}>
                    {children}
                </Box>
            </Container>

            <Footer />
        </Box>

    )
}

export default Main