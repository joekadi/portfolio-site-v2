import Navbar from './components/navbar/navbar';
import './App.css';
import {
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <>
    <Navbar/>
    <Box p={4}>Main Content Here</Box>
    </>
  );
}

export default App;
