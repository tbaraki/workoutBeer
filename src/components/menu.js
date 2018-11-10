import React from 'react'
import { Link } from 'gatsby'
import '../components/menu.css'

const Menu = () => (
    <div style={{
        margin: 0,
        width: '100%',
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'right',
            padding: '10px',
        }}>
            <li className="menu-btn"><Link to="/">Home</Link></li>
            <li className="menu-btn"><Link to="/about/">About</Link></li>
        </ul>
    </div>
)

export default Menu