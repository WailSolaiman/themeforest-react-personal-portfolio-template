import React from 'react'
import { Row, Col } from 'antd'
import './my-services.scss'

const MyServices = ({ services = [] }) => {
    return (
        <Row className="row-with-padding my-services">
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <h2>My Services</h2>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <Row gutter={16}>
                    {services &&
                        services.map(service => {
                            return (
                                <Col xs={24} md={12} lg={6} key={service.id}>
                                    <div className="my-services__content">
                                        <h5>{service.name}</h5>
                                        <img
                                            src={service.img}
                                            alt={service.name}
                                        />
                                        <p>{service.paragraph}</p>
                                    </div>
                                </Col>
                            )
                        })}
                </Row>
            </Col>
        </Row>
    )
}

export default MyServices
