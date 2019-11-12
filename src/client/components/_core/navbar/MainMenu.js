import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { UseWindowWidth } from './_navbarUtils'

const MainMenu = () => {
    const mode = UseWindowWidth() >= 576 ? 'horizontal' : 'inline'
    const { SubMenu } = Menu
    const MenuItemGroup = Menu.ItemGroup

    return (
        <Menu mode={mode}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu title={<span>Blogs</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="about">
                <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link to="/contact">Contact</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu
