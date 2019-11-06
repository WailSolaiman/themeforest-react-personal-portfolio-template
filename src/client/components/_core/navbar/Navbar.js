import React, { useState } from 'react'
import { Row, Col, Drawer, Button } from 'antd'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import useWindowWidth from './_navbarUtils'
import './navbar.scss'

const Navbar = () => {
    const windowWidth = useWindowWidth() >= 576 ? 'none' : 'block'
    const [visible, setVisibility] = useState(false)
    return (
        <Row>
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <nav className="menu-bar">
                    <div className="logo">
                        <a href="/">ILTLC</a>
                    </div>
                    <div className="menu-content">
                        <div className="menu-content__left-menu">
                            <MenuLeft />
                        </div>
                        <div className="menu-content__right-menu">
                            <MenuRight />
                        </div>
                        <Button
                            className="bars-menu"
                            onClick={() => setVisibility(true)}
                            style={{ display: `${windowWidth}` }}
                        >
                            <span className="bars-btn" />
                        </Button>
                        <Drawer
                            className="menu-content__drawer"
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={() => setVisibility(false)}
                            visible={visible}
                        >
                            <MenuLeft />
                            <MenuRight />
                        </Drawer>
                    </div>
                </nav>
            </Col>
        </Row>
    )
}

export default Navbar
