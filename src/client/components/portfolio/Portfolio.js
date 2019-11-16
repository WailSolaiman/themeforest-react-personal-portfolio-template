import React from 'react'
import { Row, Col, Icon, Typography } from 'antd'
import './portfolio.scss'

const Portfolio = ({ title = 'Portfolio', text = '', portfolios = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="portfolio">
            <Title level={2}>{title}</Title>
            <Paragraph className="portfolio__text">{text}</Paragraph>
            <div className="portfolio__socials">
                <Icon className="portfolio__icon" type="facebook" />
                <Icon className="portfolio__icon" type="twitter" />
                <Icon className="portfolio__icon" type="youtube" />
                <Icon className="portfolio__icon" type="instagram" />
            </div>
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
                                        <Paragraph className="portfolio__header">
                                            {portfolio.header}
                                        </Paragraph>
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
