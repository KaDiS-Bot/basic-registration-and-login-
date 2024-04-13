import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios';
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:'',
    password:'',
  })

  const loginUser=async (e)=>{
    e.preventDefault();
    const {email,password}=data;
    try {
      const{data}=await axios.post('/login',{
        email,password
      },{withCredentials: true, credentials: 'include'});
      if (data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate("/dashboard")
      }

    } catch (error) {
      
    }
  }
  return (<>
    <Navbar />
    <div>
      <form action="" onSubmit={loginUser}>
        <label >Email</label>
        <input type="email "  placeholder='Enter Email' value={data.email} onChange={(e)=> setData({...data , email:e.target.value})}/>
        <label htmlFor="">Password</label>
        <input type="password"  placeholder='Enter Password' value={data.password} onChange={(e)=> setData({...data , password:e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>)
}

export default Login