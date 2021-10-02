import React from 'react';
import { BrowserRouter  as Router,Switch,Route } from 'react-router-dom';
import List from './component/ViewAlbum/List';
import './App.css';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import AddAlbum from './component/addAlbum/AddAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationTabs from './component/navigation/Navi';

function App() {
  return (
    <>
    <Router>
      <NavigationTabs/>

     <ChakraProvider>
       <Switch>
      
      <Container maxW='container.xl' p={10}>
        <Flex h="100vh" py={0}>
       <Route path="/addalbums" component={AddAlbum} />
      <Route path="/viewalbums" component={List} />
      </Flex>
    </Container>
    </Switch>
    </ChakraProvider > 
    </Router>
    </>
  );
}

export default App;
