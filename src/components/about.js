import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Center,

  } from '@chakra-ui/react';

export default function About() {

    return (
      <Stack minH={'60vh'} direction={{ base: 'column', lg: 'row' }}>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 0,
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
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.l500'}>
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
        <Flex flex={1} align={'center'} justify={'center'}>
          <Center bg='#3C6E71' width={'100%'} height={'100%'}>
            <Image
              borderRadius='full'
              boxSize={[100, 180, 240, 300, 420]}
              src='/bitmoji.png'
              alt='Joe Kadi'
              bg='#D9D9D9'
              zIndex={1}
              margin={5}
            />
          </Center>
        </Flex>
      </Stack>
    );
}