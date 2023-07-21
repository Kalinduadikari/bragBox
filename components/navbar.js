import Logo from "./logo";
import NextLink from 'next/link';
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import  { HamburgerIcon } from '@chakra-ui/icons'
import ThemeFlipper from "./themeFlipper";


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
        style={{backdropFilter: 'blur(10px'}}
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
                <Box flex={1} align='right'>
                <ThemeFlipper />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' arial-label='Options'/>
                            <MenuList>
                                <Link as={NextLink} href="/" passHref>
                                    <MenuItem>About</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/w9rks" passHref>
                                    <MenuItem>Works</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/posts" passHref>
                                    <MenuItem>Posts</MenuItem>
                                </Link>
                                </MenuList>
                        
                        </Menu>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}


export default Navbar