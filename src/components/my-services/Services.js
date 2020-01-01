import React from 'react'
import { Row, Col, Typography } from 'antd'
import useWindowWidth from '../_core/utils/_coreUtils'
import './services.scss'

const Services = ({ title = '', services = [] }) => {
    const { Title, Paragraph } = Typography
    const windowWidth = useWindowWidth()
    let aosDelayCounter = 0
    return (
        <Row gutter={24} className="services">
            <Title className="services__header" level={2}>
                {title}
            </Title>
            {services &&
                services.map((service, index) => {
                    const counter = index > 0 ? (aosDelayCounter += 100) : 0
                    return (
                        <Col xs={24} md={12} xl={8} key={service.id}>
                            <div
                                className="services__content"
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }
                                data-aos-delay={counter}>
                                <Title className="my-services__title" level={4}>
                                    {service.name}
                                </Title>
                                <img
                                    className="services__image"
                                    src={service.img}
                                    alt={service.name}
                                />
                                <Paragraph className="services__text">
                                    {service.paragraph}
                                </Paragraph>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default Services
