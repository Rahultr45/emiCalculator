import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/aboutUs"></Link>
      <Link to="/blog"></Link>
      <Link to="/features"></Link>
    </nav>
  )
}

export default Navbar;