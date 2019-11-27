import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import './scss/about-me.scss'

const AboutMe = ({ data = {} }) => {
    const { Title, Paragraph } = Typography
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
                <Col xs={24} sm={14} md={15} xl={17}>
                    <div className="about-me__content">
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
                <Col xs={24} sm={10} md={9} xl={7}>
                    <div className="about-me__img">
                        <img src={image} alt="intro-img" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe
