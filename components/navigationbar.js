import NextLink from 'next/link';
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import  { HamburgerIcon } from '@chakra-ui/icons'
import ThemeFlipper from "./themeFlipper";
import Logo from './logo';


const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  
    return (
      <Link
        as={NextLink}
        href={href}
        p={2}
        bg={active ? '#C04970' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    );
  };
  

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position='fixed'
        as="nav"
        w='100%'
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blur(10px)',  WebkitBackdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
        >

            <Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' justify='space-between'>

            <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    >
                    <LinkItem href="/w9rks" path={path}>
                        w9rks
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        p05tz
                    </LinkItem>
                    </Stack>
            <Box ml="auto" display="flex" alignItems="center">
                <ThemeFlipper />
                
                    
                         <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                                <Menu>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                    arial-label='Options'
                                    transition="all 0.2s"
                                />
                                <MenuList
                                    transformOrigin="top right"
                                    mt={2}
                                    minWidth="200px"
                                    boxShadow={useColorModeValue('lg', 'dark-lg')}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    rounded="md"
                                    zIndex={2}
                                >
                                    <LinkItem href="/" path={path}>
                                    About
                                    </LinkItem>
                                    <LinkItem href="/w9rks" path={path}>
                                    Works
                                    </LinkItem>
                                    <LinkItem href="/posts" path={path}>
                                    Posts
                                    </LinkItem>
                                </MenuList>
                                </Menu>
                            
                            </Box>


                    </Box>
                 
            </Container>

        </Box>
    )
}


export default Navbar