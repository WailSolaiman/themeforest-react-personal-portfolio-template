import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const SecondaryMenu = () => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'
    return (
        <Menu mode={mode}>
            <Menu.Item key="mail">
                <NavLink to="/signin" activeClassName="active">
                    Signin
                </NavLink>
            </Menu.Item>
            <Menu.Item key="app">
                <NavLink to="/signup" activeClassName="active">
                    Signup
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default SecondaryMenu
