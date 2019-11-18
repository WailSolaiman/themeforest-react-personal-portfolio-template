import React from 'react'
import { Row, Col, Typography } from 'antd'
import './my-services.scss'

const MyServices = ({ title = '', services = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <Row gutter={24} className="my-services">
            <Title className="my-services__header" level={2}>
                {title}
            </Title>
            {services &&
                services.map(service => {
                    return (
                        <Col xs={24} lg={8} key={service.id}>
                            <div className="my-services__content">
                                <Title className="my-services__title" level={4}>
                                    {service.name}
                                </Title>
                                <img
                                    className="my-services__image"
                                    src={service.img}
                                    alt={service.name}
                                />
                                <Paragraph className="my-services__text">
                                    {service.paragraph}
                                </Paragraph>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default MyServices
