import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import useWindowWidth from '../utils/_coreUtils'
import './heroImageElm.scss'

const HeroImageElm = ({ item = {} }) => {
    const { Title } = Typography
    const imageUrl =
        useWindowWidth() >= 576 ? item.desktopImage : item.mobileImage
    return (
        <div className="hero-content">
            <div
                className="hero-content__backgroundImage"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="hero-content-absolute">
                <Title className="hero-content-absolute__subheader" level={3}>
                    {item.subheader}
                </Title>
                <Title className="hero-content-absolute__header">
                    {item.header}
                </Title>
                <Link
                    className="iltlc-btn"
                    to={item.btnLink}
                    style={{ margin: '0 auto' }}>
                    {item.btnText}
                </Link>
            </div>
        </div>
    )
}

export default HeroImageElm
