import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import axios from 'axios';


const Post = ({ match }) => {

	 let { slug } = match.params
	console.log(slug);
	// props.match.params.slug
    // const goodSlug = parseInt(slug);
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

	useEffect(() => {
			axios.get(`http://localhost:5000/post/${slug}`)
			  .then(function (response) {
			    console.log(response.data);
			    setPost(response.data);
				setLoading(false);

			  })
			  .catch(function (error) {
			    console.log(error);
			});
		}, []);

  return (
    <div>
    	{
    		post.hasOwnProperty("body")?(
    			<Container>
    				<h3>{post.title}</h3>
    				<img style={{maxWidth: '600px'}} src={post.img} className="rounded mx-auto d-block" alt="..."/>
    				<p>{post.body}</p>
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

export default Post;
