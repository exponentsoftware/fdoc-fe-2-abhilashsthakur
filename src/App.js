import React from 'react'
import './App.css';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import AddAlbum from './component/addAlbum/AddAlbum';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.xl' bg='red.200' p={10}>
        <Flex h="100vh" py={0}>
        <AddAlbum />
      </Flex>
    </Container>
    </ChakraProvider >
  );
}

export default App;
