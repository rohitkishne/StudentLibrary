import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



export default function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
        // Save the auth-token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Logged in Successfully", "success")
        history.push("/");
    }
    else{
        props.showAlert("Invalid Details", "danger")
    }


    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2 className='my-3 text-center'>Login To Access Student Library</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                    <input type="email" className="form-control" style={{border: '2px solid black'}} id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" style={{border: '2px solid black'}} id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
