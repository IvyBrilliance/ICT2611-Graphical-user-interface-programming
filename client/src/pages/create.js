import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';

import { useHistory } from 'react-router-dom'
import axios from 'axios'
// import OurAlert from '../components/utilities/alert'

import { useForm } from "react-hook-form";

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
	const { makepost, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	
	const history = useHistory();
	const [loading, setLoading] = useState(false);


	// const handleSubmit = ()=>{

	// 	setLoading(true)
	//     console.log('state username is : ' + username + ' pass is ' + password)
	//     const url = 'https://serve.macbase.co.za/adminlogin'

	//     axios.post(url, {
	//         username: username,
	//         password: password,
	//       })
	//       .then(function (response) {
	//         setLoginError(true)
	//         setLoading(false)
	//         info = response.data
	//         // setAdminsData(info);
	//         if (info.success == 'true') {
	//           setLoginError(false)
	//           // do something
	//           setAdminsData(info.result)
	//           setLocalStorage(username,password);
	//         } else {
	//           setLoginError(true)
	//         }

	//         console.log(info)
	//       })
	//       .catch(function (error) {
	//         setLoading(false)
	//         console.log(error)
	//       })
 //  	}

	return (
	    <Container className=''>
			<form>
				<FormGroup>
					<Label for="">Title</Label>
					<input
						type="text"
						className="form-control"
						name="lastname"
						ref={makepost({
							required: "Lastname is required.",
							minLength: {
								value: 8,
								message:
									"Lastname cannot be shorter than 2 charectors",
							},
							maxLength:{
								value: 40,
								message: "Lastname cannot be longer than 40 charectors"
							}
						})}
					/>
				</FormGroup>

				<FormGroup>
			        <Label for="">Text Area</Label>
			        <input
						type="textarea"
						className="form-control"
						name="lastname"
						ref={makepost({
							required: "body is required.",
							minLength: {
								value: 8,
								message:
									"body cannot be shorter than 2 charectors",
							}
						})}
					/>
		      </FormGroup>

		       <input id="submitButton" className="btn" type="submit" />
			</form>

			<Row md="6" id="ErrorColoumn">
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
			</Row>

		</Container>
	  )
}

export default Create;
