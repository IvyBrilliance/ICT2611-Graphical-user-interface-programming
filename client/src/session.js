const createSession = (data)=>{
	let info = JSON.stringify(data)
	sessionStorage.setItem('theeconomist', info);
}

const deleteSession = ()=>{
	sessionStorage.removeItem('theeconomist');
}

const getSession = ()=>{
	return JSON.parse(sessionStorage.getItem('theeconomist'));
}

export {createSession, deleteSession, getSession}