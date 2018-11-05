import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div style={{
        background: '#f7f7f7',
        margin: 0,
        width: '100%',
    }}>
    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
    }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
    </ul>
    </div>
  )
  
  export default Menu