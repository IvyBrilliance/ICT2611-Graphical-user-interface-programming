import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Container, ButtonCard,Card, Button, Row, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import axios from 'axios';

const Home = () =>{
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/posts')
		  .then(function (response) {
		    console.log(response.data);
		    setPosts(response.data);
		    // setPosts([{ id: 0, content: "foo" }, { id: 1, content: "bar" }]);
		  })
		  .catch(function (error) {
		    console.log(error);
		});
	}, []);

	

  return (
    <Container className="">
        <Button color="danger">Danger!</Button>

            
        <Row>
        {
        	posts.map(post => 
        		(<Card key={post._id}>
		        	<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
			        <CardBody>
			          <CardTitle tag="h5">{post.title}</CardTitle>
			          <CardSubtitle tag="h6" className="mb-2 text-muted">date</CardSubtitle>
			          <CardText>{post.body}</CardText>
			          <Button>read more</Button>
			        </CardBody>
			    </Card>)
		    )
        }
        </Row>
    </Container>
  );
}

export default Home;
