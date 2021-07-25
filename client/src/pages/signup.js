import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import {Container, Col, Row} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {createSession} from '../session.js'

const Signup = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data)=>{
		axios.post('http://localhost:5000/signup', {
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			password: data.password
		})
		.then((res)=>{
			console.log(res.data);

			// set session with the data:
			createSession(res.data);

		})
	}

  	return (
    <Container className=''>

    	<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<Label for="">First name</Label>
				<Input {...register('firstname')} type="text" name="firstname" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Last name</Label>
				<Input {...register('lastname')} type="lastname" name="lastname" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Email</Label>
				<Input {...register('email')} type="email" name="email" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Password</Label>
				<Input {...register('password')} type="password" name="password" id=""/>
			</FormGroup>
		       <Button  id="submitButton" className="btn btn-primary" type="submit">Signup</Button>
	    </form>
    </Container>
  )
}

export default Signup;
