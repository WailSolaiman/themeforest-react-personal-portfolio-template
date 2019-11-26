import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import SocialMedia from '../_core/social-media/SocialMedia'
import './scss/portfolio.scss'

const Portfolio = ({ title = 'Portfolio', text = '', portfolios = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="portfolio">
            <Title level={2}>{title}</Title>
            <Paragraph className="portfolio__text">{text}</Paragraph>
            <SocialMedia />
            <Row gutter={24}>
                {portfolios &&
                    portfolios.map(portfolio => {
                        return (
                            <Col xs={24} md={12} lg={6} key={portfolio.id}>
                                <Link to={`/portfolio/${portfolio.id}`}>
                                    <div className="portfolio__content">
                                        <img
                                            className="portfolio__image"
                                            src={portfolio.src}
                                            alt={portfolio.header}
                                        />
                                        <div className="portfolio__header-container">
                                            <Paragraph className="portfolio__header">
                                                <span>{portfolio.header}</span>
                                                <span>{portfolio.client}</span>
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Portfolio
