import React from 'react';
import { BrowserRouter  as Router } from 'react-router-dom';
import List from './component/ViewAlbum/List';
import './App.css';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import AddAlbum from './component/addAlbum/AddAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <ChakraProvider>
      <Container maxW='container.xl' p={10}>
        <Flex h="100vh" py={0}>
        <AddAlbum />
      </Flex>
    </Container>
    </ChakraProvider >
      <List />
    </Router>
  );
}

export default App;
