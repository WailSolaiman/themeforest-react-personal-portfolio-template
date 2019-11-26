import React from 'react'
import { Row, Col, Typography } from 'antd'
import { getPortfolios } from '../utils/_componentsData'
import './clients.scss'

const Clients = () => {
    const { Title, Paragraph } = Typography
    const portfolios = getPortfolios()
    return (
        <div className="clients">
            <Row gutter={24}>
                <Col xs={24} lg={7}>
                    <Title className="clients__header" level={4}>
                        Customers for whom we are lucky enough to work
                    </Title>
                    <Paragraph className="clients__text">
                        There is no standard solution for everything and
                        everyone. Finding the right approach when working with
                        the customer is our concern. With more than 13 years of
                        business experience, we are ready to face the challenges
                        ahead and expect the things to come.
                    </Paragraph>
                </Col>
                <Col xs={24} lg={17}>
                    <Row gutter={24}>
                        {portfolios &&
                            portfolios.map(clientData => {
                                return (
                                    <Col
                                        className="clients__col"
                                        xs={24}
                                        sm={12}
                                        lg={6}
                                        key={clientData.id}>
                                        <div className="clients__content">
                                            <img
                                                className="clients__image"
                                                src={clientData.logo}
                                                alt={clientData.client}
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
