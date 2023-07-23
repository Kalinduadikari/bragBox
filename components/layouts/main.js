import { Suspense } from "react";
import Head from 'next/head'
import Navbar from '../n4vB4r'
import { Box, Container } from '@chakra-ui/react'
import Model from "../ezy3d";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';




const Main = ({ children, router }) => {
    const initialModelScale = 0.1 * 0.1; 
    const isPostsRoute = router.asPath === '/w9rks';
    return(
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <title>Kalindu Adikari</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>

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

                {children}
            </Container>
        </Box>

    )
}

export default Main 