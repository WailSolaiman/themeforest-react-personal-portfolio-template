import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const MainMenu = ({ clickedLink = () => {} }) => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'

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
            <Menu.Item key="about">
                <NavLink
                    to="/about"
                    activeClassName="active"
                    onClick={() => clickedLink()}>
                    About
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
