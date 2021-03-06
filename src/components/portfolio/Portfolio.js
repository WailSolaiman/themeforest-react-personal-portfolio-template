import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import './scss/portfolio.scss'

const Portfolio = ({ title = 'Portfolio', text = '', portfolios = [] }) => {
    const { Title, Paragraph } = Typography
    const [limit, setLimit] = useState(4)
    const onLoadMore = () => setLimit(limit + 4)
    const renderPortfolios = () => {
        return portfolios.slice(0, limit).map(portfolio => {
            const { id, header, src, client } = portfolio
            return (
                <Col xs={24} md={12} lg={6} key={id}>
                    <Link to={`/portfolio/${id}`}>
                        <div className="portfolio__content">
                            <img
                                className="portfolio__image"
                                src={src}
                                alt={header}
                            />
                            <div className="portfolio__header-container">
                                <Paragraph className="portfolio__header">
                                    <span>{header}</span>
                                    <span>{client}</span>
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
            <div className="portfolio__container">
                <Row>{renderPortfolios()}</Row>
            </div>
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
