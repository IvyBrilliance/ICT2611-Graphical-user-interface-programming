import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container, Col, Row} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { useHistory } from 'react-router-dom'
import axios from 'axios'
import OurAlert from '../components/utilities/alert'

import { useForm } from "react-hook-form";

const Create = () => {
	const { makepost, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	/**/
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	
	let info = {}

	const handleusername = async (e) => {
		setUsername(e.target.value);
	}
	const handlepassword = async (e) => {
		setPassword(e.target.value);
	}


	const handleSubmit = ()=>{



		setLoading(true)
	    console.log('state username is : ' + username + ' pass is ' + password)
	    const url = 'https://serve.macbase.co.za/adminlogin'

	    axios.post(url, {
	        username: username,
	        password: password,
	      })
	      .then(function (response) {
	        setLoginError(true)
	        setLoading(false)
	        info = response.data
	        // setAdminsData(info);
	        if (info.success == 'true') {
	          setLoginError(false)
	          // do something
	          setAdminsData(info.result)
	          setLocalStorage(username,password);
	        } else {
	          setLoginError(true)
	        }

	        console.log(info)
	      })
	      .catch(function (error) {
	        setLoading(false)
	        console.log(error)
	      })
  	}

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
		</Container>
	  )
}

export default Create;
