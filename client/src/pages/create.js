import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from "react-hook-form";


// import OurAlert from '../components/utilities/alert'


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
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		// write submit logic here:
		console.log(data);
		
		axios.post('http://localhost:5000/post', {
		    title: data.title,
		    body: data.body,
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
