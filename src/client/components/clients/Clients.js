import React from 'react'
import { Row, Col, Typography } from 'antd'
import './clients.scss'

const Clients = ({ title = '', clients = [] }) => {
    const { Title } = Typography
    return (
        <div className="clients">
            <Title level={2}>{title}</Title>
            <Row gutter={24}>
                {clients &&
                    clients.map(client => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={4} key={client.id}>
                                <div className="clients__content">
                                    <img
                                        className="clients__image"
                                        src={client.src}
                                        alt={client.name}
                                    />
                                </div>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Clients
