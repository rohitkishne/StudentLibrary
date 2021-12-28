import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Signup(props) {

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
    let history = useHistory();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
      
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
              // Save the auth-token and redirect
              localStorage.setItem('token', json.authtoken);
              history.push("/")
              props.showAlert("Account Created Successfully", "success")
          }
          else{
              props.showAlert("Invalid Credentials", "danger")    
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Create an Account to Access Student Library</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                    <input type="name" className="form-control" style={{border: '2px solid black'}} id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                    <input type="email" className="form-control" style={{border: '2px solid black'}} id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" style={{border: '2px solid black'}} id="password" name='password' onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label"><strong>Confirm Password</strong></label>
                    <input type="password" className="form-control" style={{border: '2px solid black'}} id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
