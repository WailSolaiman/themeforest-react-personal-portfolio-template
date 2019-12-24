import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import './gradient-elm.scss'

const HeroImageElm = ({ item = {} }) => {
    const { Title } = Typography
    const { header = '', subheader = '', btnText = '', btnLink = '' } = item
    return (
        <div className="hero-image-gradient">
            <div className="hero-image-gradient__background" />
            <div className="hero-image-gradient__content">
                <Title className="hero-image-gradient__subheader" level={3}>
                    {subheader}
                </Title>
                <Title className="hero-image-gradient__header">{header}</Title>
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
