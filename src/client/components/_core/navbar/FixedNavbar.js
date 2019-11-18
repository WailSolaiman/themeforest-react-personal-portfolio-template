import React from 'react'
import Navbar from './Navbar'
import './scss/fixed-navbar.scss'

const FixedNavbar = ({ navbarStyle, selected }) => {
    return (
        <div className="fixed-navbar">
            <Navbar navbarStyle={navbarStyle} selected={selected} />
        </div>
    )
}

export default FixedNavbar
