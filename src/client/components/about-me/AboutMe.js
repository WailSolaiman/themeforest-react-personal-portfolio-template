import React from 'react'
import { Row, Col, Button } from 'antd'
import './about-me.scss'

const AboutMe = ({
    subtitle = '',
    title = '',
    firstParagraph = '',
    secondParagraph = '',
    btnText = '',
    image = '',
}) => {
    return (
        <Row className="row-with-padding about-me">
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <div className="about-me__text">
                            <h6>{subtitle}</h6>
                            <h2>{title}</h2>
                            <p>{firstParagraph}</p>
                            <p>{secondParagraph}</p>
                            <Button className="btn-secondary">{btnText}</Button>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div className="about-me__img">
                            <img src={image} alt="intro-img" />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutMe
