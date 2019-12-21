import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import useWindowWidth from '../_core/utils/_coreUtils'
import './scss/about-me.scss'

const AboutMe = ({ data = {} }) => {
    const { Title, Paragraph } = Typography
    const windowWidth = useWindowWidth()
    const {
        title,
        subtitle,
        firstParagraph,
        secondParagraph,
        thirdParagraph,
        btnText,
        image,
    } = data
    return (
        <div className="about-me">
            <Row gutter={{ xs: 0, sm: 24 }}>
                <Col xs={24} md={14} xl={17}>
                    <div
                        className="about-me__content"
                        data-aos={windowWidth > 768 ? 'fade-right' : 'fade-up'}>
                        <Title className="about-me__header" level={3}>
                            {subtitle}
                        </Title>
                        <Title className="about-me__subheader" level={2}>
                            {title}
                        </Title>
                        <Paragraph className="about-me__first-text">
                            {firstParagraph}
                        </Paragraph>
                        <Paragraph className="about-me__second-text">
                            {secondParagraph}
                        </Paragraph>
                        <Paragraph className="about-me__third-text">
                            {thirdParagraph}
                        </Paragraph>
                        <Link
                            className="about-me__button iltlc-btn btn-secondary"
                            to="/about">
                            {btnText}
                        </Link>
                    </div>
                </Col>
                <Col xs={24} md={10} xl={7}>
                    <div
                        className="about-me__img"
                        data-aos={windowWidth > 768 ? 'fade-left' : 'fade-up'}>
                        <img src={image} alt="intro-img" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe
