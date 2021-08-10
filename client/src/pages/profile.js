import React,{useState,useEffect,UnsafeComponent} from 'react'
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import NavbarMain from '../components/navbar'
import axios from 'axios';

// social media icons imports:
import {FaTwitter} from 'react-icons/fa';
import {CgFacebook} from 'react-icons/cg';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFirefoxBrowser} from 'react-icons/fa';

const Profile = ({ match }) => {
	let { slug } = match.params
	console.log(slug);
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([])
    const [loading, setLoading] = useState(true);


	useEffect(async() => {
			await axios.get(`${process.env.REACT_APP_SERVER}/profile/${slug}`)
			  .then(function (response) {
			    console.log(response.data);
			    setUser(response.data);
				// setLoading(false);

				axios.get(`${process.env.REACT_APP_SERVER}/posts/${response.data._id}`)
					.then(function (response) {
						console.log(response.data);
						setUserPosts(response.data);
					})
					.catch(function (error) {
					console.log(error);
				});

			  })
			  .catch(function (error) {
			    console.log(error);
			});

			
		}, []);

  return (
    <div>
    <NavbarMain></NavbarMain>
    	{
    		user.hasOwnProperty("_id")?(

    			<Container>
    				
    				<img style={{maxWidth: '400px'}} src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="rounded mx-auto d-block" alt="..."/>
    				
    				<Row>
	    				<Col className='text-center'>
	    					<h3>{user.firstname} {user.lastname}</h3>
	    				</Col>
    				</Row>
    				{/*<Button className="btn btn-primary" value="">change profile pic</Button>*/}

    				<Row>
	    				<Col className='text-center'>
	    				{
	    					user.hasOwnProperty("facebook")?(<CgFacebook size='40'></CgFacebook>): (<div></div>)
	    				}
	    				
	    				{
	    					user.hasOwnProperty("twitter")?(<FaTwitter size='40'></FaTwitter>): (<div></div>)
	    				}
	    				</Col>
    				</Row>
    				<hr/>
    				<Row>
    				<p>Read my latest blog posts here:</p>
    					<Col md='4'>
    				{
    					userPosts.length > 0 ?(
    						
    						userPosts.map(post =>
    							<Card md='4'>
							        <CardImg top width="100%" src={post.img} alt="Card image cap" />
							        <CardBody>
							          <CardTitle tag="h5">{post.title}</CardTitle>
							          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
							          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
										<Link to={`/post/${post.slug}`}>
											<Button>Read more</Button>
										</Link>
							        </CardBody>
						      </Card>
    						)
    					
    					):(<div>user has no posts yet</div>)

    				}
    					</Col>
    				</Row>
    			</Container>
    		): (
    			<Container>
    				niks
    			</Container>
    		)
    	}
    </div>
  )
}

export default Profile;
