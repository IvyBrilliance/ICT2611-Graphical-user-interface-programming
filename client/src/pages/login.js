import React from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import {Container, Col, Row} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {createSession} from '../session.js'
import {isAuthenticated} from '../authentication';

const Login = () => {
	let history = useHistory();
	const { register, handleSubmit } = useForm();
	const [isAuthorized, setIsAuthorized] = React.useState(false);

	React.useEffect( () => {
		
		if(isAuthenticated() === true){
			setIsAuthorized(true)
			history.push('/create')
		}else{
			console.log('no')
		}
		

	}, []);

	const onSubmit = (data)=>{
		axios.post(`${process.env.REACT_APP_SERVER}/login`, {
			email: data.email,
			password: data.password
		})
		.then((res)=>{
			console.log(res.data);
			createSession(res.data);
			history.push("/create");
		}).catch((err)=>{
			console.log(err)
		})
	}

  	return (
    <Container className=''>
    {
    	(isAuthorized=== true)?(history.push("/create")): null
    }
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
