import Navbar from './components/navbar/navbar';
import About from './components/about';

import './App.css';
import {
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Box p={4}>Main Content Here</Box>
    </>
  );
}

export default App;
