import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect,useHistory} from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import { app } from "../base";
import axios from 'axios'
import { useForm } from "react-hook-form";
import {getSession} from '../session.js'

/*
This is an importnant page and it is here that i need to make sure that 
the user is logged in before i allow him this page access*/

const OurAlert = (props) => {
	const [visible, setVisible] = useState(true);
	const onDismiss = () => setVisible(false);
	return (
		<Alert color={props.type} isOpen={visible} toggle={onDismiss}>
		  {props.message}
		</Alert>
	);
}

export const OurAlertSimple = (props) => {	
	const styles = {
		"borderRadius": "0px"
	}
	return (
		<Alert style={styles} color={props.type} >
		  {props.message}
		</Alert>
	);
}

const Create = () => {
	let history = useHistory();

	const [imageUrl, setImageUrl] = useState('');
	const {register, handleSubmit } = useForm();
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [token, setToken] = useState('');

	// useEffect:
	useEffect(async()=>{
	
		let myToken = await getSession();
		if(myToken === null){
			 history.push("/login");
		}else{
			myToken= myToken.token;
		}
		

		axios.get('http://localhost:5000/isUserAuthenticated' , {
		    headers: {
		        'token': myToken,
		        'Accept' : 'application/json',
		        'Content-Type': 'application/json'
		    }
		})
		.then(async(res) => {
			console.log(res);
			if(res.data.auth){
				// then the user is successfully authenticatd:
				//setInfo();
				setFirstname(await getSession().firstname);
				setLastname(await getSession().lastname);
				// setToken(myToken);
			}else{

				return <Redirect to='/login'  />
				console.log(res.data.message)

			}
		})
		.catch((err) => {
		    //return  error;
		    console.log(err)
		});
	}, [])


	// submit function:
	const onSubmit = async (data) => {
		const file = data.image[0];
	    const storageRef = app.storage().ref();
	    const fileRef = storageRef.child(file.name);
	    await fileRef.put(file);
	    console.log("Uploaded the file: "+ file);
			
		const fileUrl = await fileRef.getDownloadURL();
		setImageUrl(fileUrl);
		
		axios.post('http://localhost:5000/post', {
		    title: data.title,
		    body: data.body,
		    img: fileUrl,
		    writer: 'daniel'
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		});
  	
	}


	return (
	    <Container className=''>
	    {(firstname)?(
	    	<Row>
	    		<h3>Your name is : {firstname}</h3>
	    		<h3>Your lastname is :{lastname}</h3>
	    		<h3>Your token is :{token}</h3>
	    	</Row>
	    	): (<div></div>)
	    }
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<Label for="">Title</Label>
					<input
						type="text"
						className="form-control"
						name="title"
						{...register('title')}
					/>
				</FormGroup>

				<FormGroup>
			        <Label for="">Body</Label>
			        <textarea
						type="textarea"
						className="form-control"
						name="body"
						{...register('body')}
					></textarea>
		      </FormGroup>

		      	<FormGroup>
		      	<Label for="">Thumbnail</Label>
					<input {...register('image')} type="file" name="image" />
				</FormGroup>

		       <input  id="submitButton" className="btn btn-primary" type="submit" />
			</form>

			{/*<Row md="6" id="ErrorColoumn">
				<div>{errors.firstname && (
					<OurAlertSimple
						type="danger"
						message={errors.firstname.message}
					></OurAlertSimple>
				)}
				</div>
				<div>{errors.username && (
					<OurAlertSimple
						type="danger"
						message={errors.username.message}
					></OurAlertSimple>
				)}
				</div>
			</Row>*/}

		</Container>
	  )
}

export default Create;
