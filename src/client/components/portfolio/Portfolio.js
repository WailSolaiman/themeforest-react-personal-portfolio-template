import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import SocialMedia from '../_core/social-media/SocialMedia'
import './scss/portfolio.scss'

const Portfolio = ({ title = 'Portfolio', text = '', portfolios = [] }) => {
    const { Title, Paragraph } = Typography
    const [limit, setLimit] = useState(4)
    const onLoadMore = () => setLimit(limit + 4)
    const renderPortfolios = () => {
        return portfolios.slice(0, limit).map(portfolio => {
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
        })
    }
    return (
        <div className="portfolio">
            <Title level={2}>{title}</Title>
            <Paragraph className="portfolio__text">{text}</Paragraph>
            <SocialMedia />
            <Row>{renderPortfolios()}</Row>
            <Row>
                <Col xs={24}>
                    <button
                        className="iltlc-btn btn-secondary portfolio__btn"
                        style={
                            limit >= portfolios.length
                                ? { display: 'none' }
                                : { display: 'block' }
                        }
                        type="button"
                        href="#"
                        onClick={() => onLoadMore()}>
                        Load More
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default Portfolio
