import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/images/olx-logo.png'
import { useUserAuth } from '../context/UserAuthContext'
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState();
  const navigate=useNavigate();
  const {login}=useUserAuth();
  const [password,setPassword]=useState();
  const [error,setError]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
        setError("");
        await login(email,password)
        navigate("/")
    }
    catch(error){
      setError(error.message);
        console.log(error)
    }
  }
  return (
    <div>
      <h4 className='text-danger text-center my-3' >{error}</h4>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <Link to="/signup"><a>Signup</a></Link>
      </div>
    </div>
  )
}

export default Login;