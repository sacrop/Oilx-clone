import React, { useContext, useState } from 'react';
import Logo from '../../assets/images/olx-logo.png';
import './Signup.css';
import { useUserAuth } from '../context/UserAuthContext';
const Signup = () => {

    const [Username,setUsername]=useState("");
    const [Email,setEmail]=useState("");
    const {signUp}=useUserAuth();
    const [PhoneNumber,setPhoneNumber]=useState("");
    const [Password,setPassword]=useState("");
    const [error,setError]=useState("");
    const handleSubmit=async (e)=>{
      e.preventDefault();
      setError("")
      try {
       await signUp(Email,Password)
         
      } catch (error) {
        setError(error.message);
        console.log(error)
      }

    }
  return (
    <div>
      <h4 className='text-danger text-center my-3' >{error}</h4>
      <div className="signupParentDiv">
        <img width="300px" height="300px" src={Logo} alt='img'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={PhoneNumber}
            onChange={(e)=>{setPhoneNumber(e.target.value)}}
            id="lname"
            name="phone"
        
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            id="lname"
            name="password"
            
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  )
}

export default Signup