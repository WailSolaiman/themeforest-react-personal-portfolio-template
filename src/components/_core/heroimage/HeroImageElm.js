import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import useWindowWidth from '../utils/_coreUtils'
import './heroImage-elm.scss'

const HeroImageElm = ({ item = {}, isFixed = 'initial' }) => {
    const { Title } = Typography
    const {
        header = '',
        subheader = '',
        btnText = '',
        btnLink = '',
        desktopImage,
        mobileImage,
    } = item
    const imageUrl = useWindowWidth() >= 768 ? desktopImage : mobileImage
    return (
        <div className="hero-image">
            <div
                className="hero-image__backgroundImage"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundAttachment: isFixed,
                }}
            />
            <div className="hero-image__overlay">
                <div className="hero-image__content">
                    <Title className="hero-image__subheader" level={3}>
                        {subheader}
                    </Title>
                    <Title className="hero-image__header">{header}</Title>
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
        </div>
    )
}

export default HeroImageElm
