import React from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo.svg'
import './Navbar.css'

const Navbar = ({ links }) => (
  <nav className="h-16 px-4 flex justify-between items-center">
    <img src={logo} alt="logo" className="h-12"/>

    {links && <ul className="list-reset flex">
      {links.map(link => (
        <li key={link.label}>
          <a href={link.href} target="_blank" className="px-4 text-xs flex items-center font-hairline no-underline uppercase text-grey-light hover:text-white">
            <i className={link.icon + ' text-base mr-2 text-shadow2'}/>
            {link.label}
          </a>
        </li>
      ))}
    </ul>}
  </nav>
)

Navbar.propTypes = {
  links: PropTypes.array
}

export default Navbar
