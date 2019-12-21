import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import useWindowWidth from '../utils/_coreUtils'
import './heroImage-elm.scss'

const HeroImageElm = ({ item = {} }) => {
    const { Title } = Typography
    const {
        header = '',
        subheader = '',
        btnText = '',
        btnLink = '',
        desktopImage,
        mobileImage,
    } = item
    const imageUrl = useWindowWidth() >= 576 ? desktopImage : mobileImage
    return (
        <div className="hero-content">
            <div
                className="hero-content__backgroundImage"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="hero-content-absolute">
                <Title className="hero-content-absolute__subheader" level={3}>
                    {subheader}
                </Title>
                <Title className="hero-content-absolute__header">
                    {header}
                </Title>
                {btnText !== '' ? (
                    <Link
                        className="iltlc-btn"
                        to={btnLink}
                        style={{ margin: '0 auto' }}>
                        {btnText}
                    </Link>
                ) : (
                    <span />
                )}
            </div>
        </div>
    )
}

export default HeroImageElm
