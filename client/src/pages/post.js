import React,{useState,useEffect,UnsafeComponent} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import axios from 'axios';

import createDOMPurify from 'dompurify'
//import { JSDOM } from 'jsdom'
//const { window } = new JSDOM();
//const DOMPurify = createDOMPurify(window)


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
        	loading?(
        			<Container style={{'paddingTop': '50px'}}>
	        		<div  class="card" aria-hidden="true">
					  <img src="..." class="card-img-top" alt=""/>
					  <div class="card-body">
					    <h5 class="card-title placeholder-glow">
					      <span class="placeholder col-6"></span>
					    </h5>
					    <br/>
					    <p class="card-text placeholder-glow">
					      <span class="placeholder col-7"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-6"></span>
					      <span class="placeholder col-8"></span>
					      <span class="placeholder col-7"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-6"></span>
					      <span class="placeholder col-8"></span>
					      <span class="placeholder col-7"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-6"></span>
					      <span class="placeholder col-8"></span>
					      <span class="placeholder col-7"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-4"></span>
					      <span class="placeholder col-6"></span>
					      <span class="placeholder col-8"></span>
					    </p>
					    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-2"></a>
					  </div>
					</div>
					</Container>
        	):
        	(<div></div>)
        }

    	{
    		post.hasOwnProperty("body")?(
    			<Container>
    				<h3>{post.title}</h3>
    				<img style={{maxWidth: '600px'}} src={post.img} className="rounded mx-auto d-block" alt="..."/>
                    <small>writer: {post.writer_details}</small>
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
