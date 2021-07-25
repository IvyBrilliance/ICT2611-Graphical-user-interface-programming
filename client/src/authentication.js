import React,{useEffect} from 'react'
import {getSession} from './session.js';
import axios from 'axios';


const isAuthenticated =async() =>{
	if(!getSession()){
		return false;
	}else{
		let myToken = await getSession().token;
		
		axios.get('http://localhost:5000/isUserAuthenticated' , {
		    headers: {
		        'token': myToken,
		        'Accept' : 'application/json',
		        'Content-Type': 'application/json'
		    }
		})
		.then( res => {
			
			console.log(res.data)
			if(res.data.auth === true){
				console.log('yes , user is authenticated');
				return true;
			}else{
				return false;
			}
		})
		.catch(err => {
		    console.log(err)
		    return false;
		});
	}
	
}

export {isAuthenticated}