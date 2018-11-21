import React from 'react'
import { Link } from 'gatsby'

const linkStyles = {
  textDecoration: 'none',
  fontSize: '3rem',
  color: '#333',
  paddingLeft: '2rem'
}

const Header = ({ siteTitle }) => (
  <div  style={{ textAlign: 'right', paddingTop: '18px', position: 'fixed', right: '50px'}}>
      <Link to="/" style={linkStyles}>
        Home
      </Link>
      <Link to="/about" style={linkStyles}>
        About
      </Link>
      <Link to="/portfolio" style={linkStyles}>
        Portfolio
      </Link> 
  </div>
)

export default Header
