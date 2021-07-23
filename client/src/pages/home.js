import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Container, Col, ButtonCard,Card, Button, Row, CardImg, CardText, CardBody,
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

	const CardStyle = {

	}

	const CardImagestyles = {
		// maxWidth: '100px',
	}
	

  return (
    <Container className="">
        <Button color="danger">Danger!</Button>

         <Row>   
        {
        	posts.map(post => 

        		(
        		<Col md='4'>
        			<Card style={CardStyle} key={post._id}>
		        	<CardImg top width='100%'  style={CardImagestyles} src={post.img} alt="Card image cap" />
			        <CardBody>
			          <CardTitle tag="h5">{post.title}</CardTitle>
			          <CardSubtitle tag="h6" className="mb-2 text-muted">date</CardSubtitle>
			          <CardText>{post.body}</CardText>
			          <Button>read more</Button>
			        </CardBody>
			    </Card>
			    </Col>
			    )
		    )
        }
        </Row>
    </Container>
  );
}

export default Home;
