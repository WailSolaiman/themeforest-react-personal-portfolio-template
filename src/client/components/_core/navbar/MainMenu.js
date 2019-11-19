import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const MainMenu = () => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'

    return (
        <Menu mode={mode}>
            <Menu.Item key="home">
                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item key="blog">
                <NavLink to="/blog" activeClassName="active">
                    Blog
                </NavLink>
            </Menu.Item>
            <Menu.Item key="about">
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </Menu.Item>
            <Menu.Item key="contact">
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu
