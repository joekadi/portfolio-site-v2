import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  

  function StatsCard(props) {
    const { title, stat, helpText } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1.2px solid'}
        borderColor={'#30595c'}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
        <StatHelpText fontWeight={'medium'}>
           {helpText}
        </StatHelpText>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="8xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
          color={'#30595c'}>
          Where I've Worked
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Application Development Specialist'} stat={'Accenture'} helpText={'2021 - Present'} />
          <StatsCard title={'Full Stack Engineer'} stat={'NHS Digital'} helpText={'2021 - Present'} />
          <StatsCard title={'Computing Science Tutor'} stat={'University of Glasgow'} helpText={'2020 - 2021'}/>
          <StatsCard title={'Full Stack Engineer'} stat={'Traceall Global'} helpText={'2020'}/>
        </SimpleGrid>
      </Box>
    );
  }