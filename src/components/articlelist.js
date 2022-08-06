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
  Hide,
  chakra
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
      {'image':'/bias-variance.png', title:'Bias, Variance, Overfitting & Generalisation in Machine Learning', date:'31 May, 2021', length:'5', tags:['Engineering', 'Machine Learning']},
      {'image':'/uncertaintycover.png', title:"The Ubiquitous Nature Of Uncertainty Through Heisenberg's Principle", date:'08 Jun 2021', length:'7', tags:['Science', 'Uncertainty']},
      {'image':'/bowlingscorecardbig.png', title:"Walking Through Uncle Bob's Bowling Game Kata In Vanilla Javascript", date:'30 Jun 2021', length:'5', tags:['Engineering', 'Web Dev'] },
    ];

    return (
      <>
      <Show above='lg'>
        <Box bg={'white'}>
          <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
            <Stack spacing={2} align={'center'}>
              <Heading fontSize={'4xl'}>Some Writings</Heading>
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
                date={blog.date}
                length={blog.length}
                tags={blog.tags}
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
            <Heading fontSize={'4xl'}>Some Writings</Heading>
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
                date={blog.date}
                length={blog.length}
                tags={blog.tags}
              />
            ))}
          </Slider>
        </Box>
      </Show>
      </>
    );
  }
