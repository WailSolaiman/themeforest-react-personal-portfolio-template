import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import useWindowWidth from '../_core/utils/_coreUtils'
import './scss/about-us.scss'

const AboutUs = ({ data = {} }) => {
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
        <div className="about-us">
            <Row gutter={{ xs: 0, sm: 24 }}>
                <Col xs={24} md={14} xl={17}>
                    <div
                        className="about-us__content"
                        data-aos={windowWidth > 768 ? 'fade-right' : 'fade-up'}>
                        <Title className="about-us__header" level={3}>
                            {subtitle}
                        </Title>
                        <Title className="about-us__subheader" level={2}>
                            {title}
                        </Title>
                        <Paragraph className="about-us__first-text">
                            {firstParagraph}
                        </Paragraph>
                        <Paragraph className="about-us__second-text">
                            {secondParagraph}
                        </Paragraph>
                        <Paragraph className="about-us__third-text">
                            {thirdParagraph}
                        </Paragraph>
                        <Link
                            className="about-us__button iltlc-btn btn-secondary"
                            to="/about">
                            {btnText}
                        </Link>
                    </div>
                </Col>
                <Col xs={24} md={10} xl={7}>
                    <div
                        className="about-us__img"
                        data-aos={windowWidth > 768 ? 'fade-left' : 'fade-up'}>
                        <img src={image} alt="intro-img" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutUs
