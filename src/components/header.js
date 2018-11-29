import React from 'react'
import { Link } from 'gatsby'
import Menu from '../components/Menu.js'
import '../components/header.css'

const Header = ({ siteTitle }) => (
  <div className="header-container"
    style={{
      background: '#272727',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        margin: 0,
      }}>
        <Link
          to="/"
          style={{
            color: '#ddbe40',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>Earn your beer.</p>
    </div>
  </div>
)

export default Header
