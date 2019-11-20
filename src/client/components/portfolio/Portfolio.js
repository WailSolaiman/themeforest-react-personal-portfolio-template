import React from 'react'
import { Row, Col, Typography } from 'antd'
import SocialMedia from '../_core/social-media/SocialMedia'
import './portfolio.scss'

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
                                <div className="portfolio__content">
                                    <img
                                        className="portfolio__image"
                                        src={portfolio.src}
                                        alt={portfolio.header}
                                    />
                                    <div className="portfolio__header-container">
                                        <Title
                                            className="portfolio__header"
                                            level={4}>
                                            {portfolio.header}
                                        </Title>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Portfolio
