import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import PageTitleLarge from '../_core/page-title/PageTitleLarge'
import { getOnePortfolio } from '../utils/_componentsData'
import './scss/portfolio-template.scss'

const PortfolioTemplate = () => {
    const { Title, Paragraph } = Typography
    const { id } = useParams()
    const portfolio = getOnePortfolio(id)

    return (
        <div className="portfolio-template">
            <Row>
                <Col xs={24}>
                    <PageTitleLarge
                        header={portfolio.header}
                        client={portfolio.client}
                    />
                </Col>
            </Row>
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24} md={8}>
                        <Title level={2}>Client</Title>
                    </Col>
                    <Col xs={24} md={16}>
                        <Paragraph>{portfolio.description}</Paragraph>
                    </Col>
                </Row>
                <Row className="row-with-margin-bottom">
                    <Col xs={24} md={8}>
                        <Title level={2}>Services</Title>
                    </Col>
                    <Col xs={24} md={16}>
                        <Row gutter={24}>
                            <Col xs={24} md={12}>
                                <Title level={4}>Online</Title>
                                <Paragraph>
                                    {portfolio.services.online}
                                </Paragraph>
                            </Col>
                            <Col xs={24} md={12}>
                                <Title level={4}>Offline</Title>
                                <Paragraph>
                                    {portfolio.services.offline}
                                </Paragraph>
                            </Col>
                            <Col xs={24} md={12}>
                                <Title level={4}>Others</Title>
                                <Paragraph>
                                    {portfolio.services.others}
                                </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="portfolio-template__images-container">
                <div className="portfolio-template__mobile_and_tablet">
                    <div className="portfolio-template__mobile">
                        <Paragraph className="portfolio-template__image-header portfolio-template__image-header--mobile">
                            Mobile
                        </Paragraph>
                        <img
                            className="portfolio-template__image"
                            src={portfolio.image.mobile}
                            alt={`${portfolio.client}-mobile-view`}
                        />
                    </div>
                    <div className="portfolio-template__tablet">
                        <Paragraph className="portfolio-template__image-header portfolio-template__image-header--tablet">
                            Tablet
                        </Paragraph>
                        <img
                            className="portfolio-template__image"
                            src={portfolio.image.tablet}
                            alt={`${portfolio.client}-tablet-view`}
                        />
                    </div>
                </div>
                <div className="portfolio-template__desktop">
                    <Paragraph className="portfolio-template__image-header portfolio-template__image-header--desktop">
                        Desktop
                    </Paragraph>
                    <img
                        className="portfolio-template__image"
                        src={portfolio.image.desktop}
                        alt={`${portfolio.client}-desktop-view`}
                    />
                </div>
            </div>
            <div className="container">
                <div className="portfolio-template__buttons-container">
                    <Link className="iltlc-btn btn-secondary" to="/">
                        Go Back
                    </Link>
                    <a
                        className="iltlc-btn btn-secondary"
                        href={portfolio.webpage}
                        target="_blank"
                        rel="noopener noreferrer">
                        To Webpage
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioTemplate
