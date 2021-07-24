import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';

import {Container, Col, Row} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data)=>{
		axios.post('http://localhost:5000/signup', {
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			password: data.password
		})
		.then(console.log('yeah'))
	}

  	return (
    <Container className=''>

    	<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<Label for="">First name</Label>
				<input {...register('firstname')} type="text" name="firstname" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Last name</Label>
				<input {...register('lastname')} type="lastname" name="lastname" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Email</Label>
				<input {...register('email')} type="email" name="email" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Password</Label>
				<input {...register('password')} type="password" name="password" id=""/>
			</FormGroup>
		       <input  id="submitButton" className="btn btn-primary" type="submit" />
	    </form>
    </Container>
  )
}

export default Signup;
