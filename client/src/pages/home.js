import React,{useState, useEffect} from 'react';
import {Container, Col, ButtonCard,Card, Button, Row, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import axios from 'axios';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useRouteMatch,
} from "react-router-dom";

const Home = () =>{
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [stuff, setStuff] = useState([1,2,3]);
	useEffect(() => {
		axios.get('http://localhost:5000/posts')
		  .then(function (response) {
		    console.log(response.data); 
		    setLoading(false);
		    setPosts(response.data); })
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
        	loading?(stuff.map(s => (
        		<Col md='4'>
	        		<div  class="card" aria-hidden="true">
					  <img src="..." class="card-img-top" alt=""/>
					  <div class="card-body">
					    <h5 class="card-title placeholder-glow">
					      <span class="placeholder col-6"></span>
					    </h5>
					    <p class="card-text placeholder-glow">
					      <span class="placeholder col-7"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-6"></span>
					      <span class="placeholder col-8"></span>
					    </p>
					    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
					  </div>
					</div>
				</Col>
        		))
        		
        	):
        	(<div></div>)
        }
        
        </Row>

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
			          

			          <Link to={`/post/${post.slug}`}>
                               <Button>
                                  Read more
                               </Button>
                            </Link>
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
