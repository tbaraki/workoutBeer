import React from 'react'
import { Link } from 'gatsby'
import '../components/menu.css'

const Menu = () => (
  <div>
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </div>
)

export default Menu
