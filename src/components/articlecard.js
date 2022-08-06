import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Spacer,
  useColorModeValue,
  Image,
  HStack,
  Tag
} from '@chakra-ui/react';

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" bg={'#30595c'} color={'white'} key={tag} >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default function ArticleCard(props) {
  const {image, title, date, length, tags} = props;
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        height={'100%'}
        w={{ base: '82%', md: 'full' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        pt={6}
        pr={6}
        pl={6}
        pb={4}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              image
            }
            layout={'fill'}
            height={'100%'}
            
          />
        </Box>
        <Stack >
          <BlogTags tags={tags} />
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={'medium'}
            >
           {title}
          </Heading>
          <Text color={'gray.500'}>{date} · {length}min read</Text>
        </Stack> 
      </Box>
    </Center>
  );
}
