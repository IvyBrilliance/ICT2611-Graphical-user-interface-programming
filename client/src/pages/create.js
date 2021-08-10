import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect,useHistory} from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import { app } from "../base";
import axios from 'axios'
import { useForm } from "react-hook-form";
import {getSession, deleteSession} from '../session.js'
import {isAuthenticated} from '../authentication';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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
	const [isAuthorized, setIsAuthorized] = React.useState(false);
	const [ckeditor, setCkeditor] = useState('');

	React.useEffect( () => {
		if(isAuthenticated() === true){
			setIsAuthorized(true)
		}else{
			console.log('no, not authenticated');
		}

	}, []);

	// useEffect(() => {
	//   register('body')
	// })


	// submit function:
	const onSubmit = async (data) => {
		const file = data.image[0];
	    const storageRef = app.storage().ref();
	    const fileRef = storageRef.child(file.name);
	    await fileRef.put(file);
	    console.log("Uploaded the file: "+ file);
			
		const fileUrl = await fileRef.getDownloadURL();
		setImageUrl(fileUrl);
		
		let writer = await getSession()._id;
		console.log('is'+ writer);
		axios.post(`${process.env.REACT_APP_SERVER}/post`, {
		    title: data.title,
		    body: ckeditor,
		    img: fileUrl,
		    writer: writer
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		});
  	
	}

	const handleLogout = ()=>{
		deleteSession();
		history.push('/login');
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
			        <CKEditor
	                    editor={ ClassicEditor }
	                    data="<p>Hello from CKEditor 5!</p>"
	                    onReady={ editor => {
	                        // You can store the "editor" and use when it is needed.
	                        console.log( 'Editor is ready to use!', editor );
	                    } }
	                       onChange={ ( event, editor ) => {
		                        const data = editor.getData();
		                        console.log( { event, editor, data } );
		                        setCkeditor(data);
		                    } }
	                    onBlur={ ( event, editor ) => {
	                        console.log( 'Blur.', editor );
	                    } }
	                    onFocus={ ( event, editor ) => {
	                        console.log( 'Focus.', editor );
	                    } }
	                />
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

			<Row>
			<Button onClick={handleLogout}>logout</Button>	
			</Row>

		</Container>
	  )
}

export default Create;
