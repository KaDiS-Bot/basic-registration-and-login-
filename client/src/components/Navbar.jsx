import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link><br />
      <Link to="/login">Login</Link><br />
      <Link to="/register">Register</Link>
      
      </nav> 
    </div>
  )
}

export default Navbar