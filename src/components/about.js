import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Box,
    Link,
    IconButton,
    useDisclosure,
    HStack,
    Spacer,

  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['About', 'Projects', 'Articles'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
export default function About() {
      const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Box px={4} position={'relative'} top={[-6, -5, -20, -20]}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                  />
                  <HStack spacing={8} alignItems={'center'}>
                    <Box>
                      <Image
                      borderRadius='full'
                      boxSize='35px'
                      src='/favicon.png'
                      alt='JK'
                      />
                    </Box>
                    <HStack
                      as={'nav'}
                      spacing={4}
                      display={{ base: 'none', md: 'flex' }}>
                      {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                      ))}
                    </HStack>
                  </HStack>
                </Flex>

                {isOpen ? (
                  <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                      {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                      ))}
                    </Stack>
                  </Box>
                ) : null} 
            </Box>
            
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#3C6E71',
                  zIndex: -1,
                }}
                >
                Joe Kadi
              </Text>
              <br />{' '}
              <Text color={'#3C6E71'} as={'span'}>
                I build things with technology.
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                As a full-stack engineer and consultant, I take ideas from zero to one. Currently, I'm focused on digitally transforming organsations - of all sizes - over at <a href="https://www.infinityworks.com/">Infinity Works, part of Accenture</a>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#3C6E71'}
                color={'white'}
                _hover={{
                  bg: '#30595c',
                }}>
                Contact Me
              </Button>
              <Button rounded={'full'}>Learn more</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} bg='#3C6E71' align={'center'} justify={'center'}>
          <Image
            borderRadius='full'
            boxSize={[105, 180, 300, 420]}
            src='/bitmoji.png'
            alt='Joe Kadi'
            bg='#D9D9D9'
          />
        </Flex>
      </Stack>
    );
}