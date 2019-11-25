import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import { getPortfolios } from '../utils/_componentsData'
import './clients.scss'

const Clients = ({ title = '', clients = [] }) => {
    const { Title } = Typography
    const { id } = useParams()
    const portfolios = getPortfolios()
    return (
        <div className="clients">
            <Title level={2}>{title}</Title>
            <Row>
                {portfolios &&
                    portfolios.map(clientData => {
                        return (
                            <Col xs={12} md={4} lg={4} key={clientData.id}>
                                <Link to={`/portfolio/${clientData.id}`}>
                                    <div className="clients__content">
                                        <img
                                            className="clients__image"
                                            src={clientData.logo}
                                            alt={clientData.client}
                                        />
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Clients
