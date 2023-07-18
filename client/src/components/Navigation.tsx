import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (



    <nav>

      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>



    )
}

export default Navigation