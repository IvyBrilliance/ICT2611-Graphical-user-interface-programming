import React,{useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Container, Button} from 'reactstrap';


const Home = () =>{
	
  return (
    <Container className="">
        <Button color="danger">Danger!</Button>
    </Container>
  );
}

export default Home;
