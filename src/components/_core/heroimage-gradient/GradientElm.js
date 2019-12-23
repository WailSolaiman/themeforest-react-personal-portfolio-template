import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import './gradient-elm.scss'

const HeroImageElm = ({ item = {} }) => {
    const { Title } = Typography
    const { header = '', subheader = '', btnText = '', btnLink = '' } = item
    return (
        <div className="hero-content">
            <div className="hero-content__backgroundImage" />
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
