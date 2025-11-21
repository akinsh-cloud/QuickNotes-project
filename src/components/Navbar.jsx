import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/dashboard">Dashboard</Link>
      </nav>
    
    </div>
  )
}
