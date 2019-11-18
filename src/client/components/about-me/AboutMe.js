import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import './about-me.scss'

const AboutMe = ({
    subtitle = '',
    title = '',
    firstParagraph = '',
    secondParagraph = '',
    thirdParagraph = '',
    btnText = '',
    image = '',
}) => {
    const { Title, Paragraph } = Typography
    return (
        <Row gutter={{ xs: 0, xl: 24 }} className="row-with-padding about-me">
            <Col xs={24} xl={14}>
                <div className="about-me__content">
                    <Title className="about-me__header" level={4}>
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
                    <Button className="about-me__button btn-secondary">
                        {btnText}
                    </Button>
                </div>
            </Col>
            <Col xs={24} xl={10}>
                <div className="about-me__img">
                    <img src={image} alt="intro-img" />
                </div>
            </Col>
        </Row>
    )
}

export default AboutMe
