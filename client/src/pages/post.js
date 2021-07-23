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

  // 	useEffect(() => {
		// const getData = async () => {
		// // setPost(await GetTeacherModule(parseInt(id)));
		// // console.log(module);
		// setLoading(false);
		// };
		// getData();
  //  	}, []);

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
    <div className=''>
    	{
    		post.hasOwnProperty("body")?(
    			<p>{post.body}</p>
    		): (
    			<p>niks</p>
    		)
    	}
    </div>
  )
}

export default Post;
