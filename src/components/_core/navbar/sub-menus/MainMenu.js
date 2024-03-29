import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from '../utils/_navbarUtils'

const MainMenu = ({ clickedLink = () => {} }) => {
    const mode = UseWindowWidth() >= 992 ? 'horizontal' : 'inline'
    return (
        <Menu mode={mode}>
            <Menu.Item key="home">
                <NavLink
                    to="/"
                    activeClassName="active"
                    exact
                    onClick={() => clickedLink()}>
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item key="blog">
                <NavLink
                    to="/blog"
                    activeClassName="active"
                    onClick={() => clickedLink()}>
                    Blog
                </NavLink>
            </Menu.Item>
            <Menu.Item key="about-us">
                <NavLink
                    to="/about-us"
                    activeClassName="active"
                    onClick={() => clickedLink()}>
                    About Us
                </NavLink>
            </Menu.Item>
            <Menu.Item key="contact">
                <NavLink
                    to="/contact"
                    activeClassName="active"
                    onClick={() => clickedLink()}>
                    Contact
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu
