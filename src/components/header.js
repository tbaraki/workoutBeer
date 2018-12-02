import React from 'react'
import { Link } from 'gatsby'
import Menu from '../components/Menu.js'
import '../components/header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-container">
      <div className="header-title">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <p>Earn your beer.</p>
      </div>
      <div className="header-menu">
        <Menu />
      </div>
    </div>
  </div>
)

export default Header
