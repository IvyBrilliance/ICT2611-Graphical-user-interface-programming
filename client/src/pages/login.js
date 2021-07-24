import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import {Container, Col, Row} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data)=>{
		axios.post('http://localhost:5000/login', {
			email: data.email,
			password: data.password
		})
		.then(console.log('submitted'))
	}

  	return (
    <Container className=''>

    	<form onSubmit={handleSubmit(onSubmit)}>
			
			<FormGroup>
				<Label for="">Email</Label>
				<Input {...register('email')} type="email" name="email" id="" />
			</FormGroup>
			<FormGroup>
				<Label for="">Password</Label>
				<Input {...register('password')} type="password" name="password" id=""/>
			</FormGroup>
		       <Button  id="submitButton" className="btn btn-primary" type="submit">Login</Button>
	    </form>
    </Container>
  )
}

export default Login;
