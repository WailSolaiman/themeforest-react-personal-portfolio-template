import React from 'react'
import { Row, Col, Typography } from 'antd'
import './clients.scss'

const Clients = ({ clients = [], header = '', description = '' }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="clients">
            <Row gutter={24}>
                <Col xs={24} lg={7}>
                    <Title className="clients__header" level={4}>
                        {header}
                    </Title>
                    <Paragraph className="clients__text">
                        {description}
                    </Paragraph>
                </Col>
                <Col xs={24} lg={17}>
                    <Row gutter={24}>
                        {clients &&
                            clients.map(client => {
                                return (
                                    <Col
                                        className="clients__col"
                                        xs={24}
                                        sm={12}
                                        lg={6}
                                        key={client.id}>
                                        <div className="clients__content">
                                            <img
                                                className="clients__image"
                                                src={client.logo}
                                                alt={client.name}
                                            />
                                        </div>
                                    </Col>
                                )
                            })}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Clients
