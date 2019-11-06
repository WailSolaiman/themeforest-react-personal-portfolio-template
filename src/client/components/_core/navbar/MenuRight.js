import React from 'react'
import { Menu } from 'antd'
import useWindowWidth from './_navbarUtils'

const MenuRight = () => {
    const mode = useWindowWidth() >= 576 ? 'horizontal' : 'inline'
    return (
        <Menu mode={mode}>
            <Menu.Item key="mail">
                <a href="/signin">Signin</a>
            </Menu.Item>
            <Menu.Item key="app">
                <a href="/signup">Signup</a>
            </Menu.Item>
        </Menu>
    )
}

export default MenuRight
