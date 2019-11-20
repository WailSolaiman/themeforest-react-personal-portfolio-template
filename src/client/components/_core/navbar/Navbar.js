import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Drawer, Button } from 'antd'
import MainMenu from './MainMenu'
import SecondaryMenu from './SecondaryMenu'
import { UseWindowWidth, GetNavbarStyle } from './_navbarUtils'
import './scss/navbar.scss'

const Navbar = ({ navbarStyle = [], selected }) => {
    const windowWidth = UseWindowWidth() >= 767 ? 'none' : 'block'
    const [visible, setVisibility] = useState(false)
    const navStyle = GetNavbarStyle(navbarStyle, selected)
    const clickedLink = () => setVisibility(false)

    return (
        <div className="container">
            <Row>
                <Col xs={24}>
                    <nav className="menu-bar">
                        <div className="logo">
                            <NavLink
                                className="logo__iltlc"
                                to="/"
                                activeClassName="active"
                                exact>
                                ILTLC
                            </NavLink>
                        </div>
                        <div className="menu-content">
                            <div
                                className="menu-content__main-menu"
                                style={{
                                    display: `${navStyle.mainMenu}`,
                                    float: `${navStyle.mainMenuFloat}`,
                                }}>
                                <MainMenu />
                            </div>
                            <div
                                className="menu-content__secondary-menu"
                                style={{
                                    display: `${navStyle.secondaryMenu}`,
                                    float: `${navStyle.secondaryMenuFloat}`,
                                }}>
                                <SecondaryMenu />
                            </div>
                            <Button
                                className="bars-menu"
                                onClick={() => setVisibility(true)}
                                style={{ display: `${windowWidth}` }}>
                                <span className="bars-btn" />
                            </Button>
                            <Drawer
                                className="menu-content__drawer"
                                title="I.L.T.L.C."
                                placement="right"
                                closable
                                onClose={() => setVisibility(false)}
                                visible={visible}>
                                <div
                                    style={{
                                        display: `${navStyle.mainMenu}`,
                                    }}>
                                    <MainMenu clickedLink={clickedLink} />
                                </div>
                                <div
                                    style={{
                                        display: `${navStyle.secondaryMenu}`,
                                    }}>
                                    <SecondaryMenu clickedLink={clickedLink} />
                                </div>
                            </Drawer>
                        </div>
                    </nav>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar
