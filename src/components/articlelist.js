import React from 'react';
import {
  Box,
  useBreakpointValue,
  Heading,
  Spacer,
  Stack,
  Container,
  Button,
  IconButton,
  Show,
  Hide
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import ArticleCard from './articlecard';

// slider settings
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ArticleList() {
    const [slider, setSlider] = React.useState(null);

    //note to self only have base values of 50% and 10px here if i want arrows at side for all screen sizes
    //for arrows at bottom on mobile set to 90% and 30%
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const cards = [
      {'image':'/bias-variance.png', title:'Relationship Between Bias, Variance, Overfitting & Generalisation in ML ', description:'Walking through the tradeoff between bias and variance in machine learning models. Then how this relates to a model overfitting or underfitting a training set.', date:'31 May, 2021', length:'5'},
      {'image':'/uncertaintycover.png', title:'The Heisenberg Uncertainty Principle', description:'Understanding the ubiquitous nature of uncertainty through The Heisenberg Uncertainty Principle some extra words to test spacing out lah lah alh alh blah lvh  gfg erg erg erg  ', date:'05 Sep 2021', length:'5'},
      {'image':'/bowlingscorecardbig.png', title:'Solving The Bowling Game Kata In Vanilla Javascript', description:'Stepping through a Test Driven Development solution for The Bowling Game Kata which was created by Uncle Bob and is a popular exercise for a paired programming style interview. ', date:'5 Sep 2021', length:'5'},
    ];

    return (
      <>
      <Show above='lg'>
        <Box bg={'white'}>
          <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
            <Stack spacing={2} align={'center'}>
              <Heading>Some Writings</Heading>
              <Spacer/>
              <Button 
                rounded={'full'} 
                bg={'#3C6E71'} 
                color={'white'}
                _hover={{
                    bg: '#30595c',
                  }}>See All</Button>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              {cards.map((blog, index) => (
              <ArticleCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                length={blog.length}
              />
            ))}
            </Stack>
          </Container>
        </Box>
      </Show>

      <Show below='lg'>    
        <Box
        position={'relative'}
        //height={'655px'}
        width={'full'}
        overflow={'hidden'}
        bg={'white'}
        py={6}
        //height={'100%'}
        >

          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Stack spacing={2} align={'center'}>
            <Heading>Some Writings</Heading>
            <Spacer/>
            <Button 
              rounded={'full'} 
              bg={'#3C6E71'} 
              color={'white'}
              _hover={{
                  bg: '#30595c',
                }}>See All</Button>
          </Stack>
          {/* Left Icon */}
          <Hide below='sm'>
            <IconButton
              aria-label="left-arrow"
              //colorScheme="green"
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              zIndex={2}
              onClick={() => slider?.slickPrev()}>
              <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              zIndex={2}
              onClick={() => slider?.slickNext()}>
              <BiRightArrowAlt />
            </IconButton>
          </Hide>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((blog, index) => (
              <ArticleCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                length={blog.length}
              />
            ))}
          </Slider>
        </Box>
      </Show>
      </>
    );
  }
