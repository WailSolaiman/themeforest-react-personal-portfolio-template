import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import PageTitleLarge from '../_core/page-title/PageTitleLarge'
import SwiperElm from '../_core/swiper/SwiperElm'
import { getOnePortfolio } from '../utils/_componentsData'
import useWindowWidth from '../_core/utils/_coreUtils'
import './scss/portfolio-template.scss'

const PortfolioTemplate = () => {
    const { Title, Paragraph } = Typography
    const { id } = useParams()
    const windowWidth = useWindowWidth()
    const portfolio = getOnePortfolio(id)
    const { header, client, logo, description, webpage, gallery } = portfolio
    const { online, offline, others } = portfolio.services
    const { desktop, tablet, mobile } = portfolio.image
    return (
        <div className="portfolio-template">
            <Row>
                <Col xs={24}>
                    <div data-aos="fade" data-aos-delay="100">
                        <PageTitleLarge header={header} client={client} />
                    </div>
                </Col>
            </Row>
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24} md={8}>
                        <div data-aos="fade" data-aos-delay="150">
                            <Title level={2}>Client</Title>
                        </div>
                    </Col>
                    <Col xs={24} md={16}>
                        <div data-aos="fade" data-aos-delay="200">
                            <Paragraph>{description}</Paragraph>
                        </div>
                    </Col>
                </Row>
                <Row className="row-with-margin-bottom">
                    <Col xs={24} md={8}>
                        <div data-aos="fade" data-aos-delay="250">
                            <Title level={2}>Logo</Title>
                        </div>
                    </Col>
                    <Col xs={24} md={16}>
                        <div data-aos="fade" data-aos-delay="300">
                            <img src={logo} alt={client} />
                        </div>
                    </Col>
                </Row>
                <Row className="row-with-margin-bottom">
                    <Col xs={24} md={8}>
                        <div data-aos="fade" data-aos-delay="350">
                            <Title level={2}>Services</Title>
                        </div>
                    </Col>
                    <Col xs={24} md={16}>
                        <Row gutter={24}>
                            <Col xs={24} md={12}>
                                <div data-aos="fade" data-aos-delay="400">
                                    <Title level={4}>Online</Title>
                                    <Paragraph>{online}</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                <div data-aos="fade" data-aos-delay="450">
                                    <Title level={4}>Offline</Title>
                                    <Paragraph>{offline}</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                <div data-aos="fade" data-aos-delay="500">
                                    <Title level={4}>Others</Title>
                                    <Paragraph>{others}</Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="portfolio-template__images-container bg-color">
                <div
                    className="portfolio-template__mobile_and_tablet"
                    data-aos={windowWidth > 768 ? 'fade-right' : 'fade-up'}
                    data-aos-delay="300"
                    data-aos-offset="500">
                    <div className="portfolio-template__mobile">
                        <Paragraph className="portfolio-template__image-header portfolio-template__image-header--mobile">
                            Mobile
                        </Paragraph>
                        <img
                            className="portfolio-template__image"
                            src={mobile}
                            alt={`${portfolio.client}-mobile-view`}
                        />
                    </div>
                    <div className="portfolio-template__tablet">
                        <Paragraph className="portfolio-template__image-header portfolio-template__image-header--tablet">
                            Tablet
                        </Paragraph>
                        <img
                            className="portfolio-template__image"
                            src={tablet}
                            alt={`${portfolio.client}-tablet-view`}
                        />
                    </div>
                </div>
                <div
                    className="portfolio-template__desktop"
                    data-aos={windowWidth > 768 ? 'fade-left' : 'fade-up'}
                    data-aos-delay="300"
                    data-aos-offset="500">
                    <Paragraph className="portfolio-template__image-header portfolio-template__image-header--desktop">
                        Desktop
                    </Paragraph>
                    <img
                        className="portfolio-template__image"
                        src={desktop}
                        alt={`${portfolio.client}-desktop-view`}
                    />
                </div>
            </div>
            <div className="container">
                <Row gutter={24}>
                    <Col xs={24}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-offset="400">
                            <Title
                                level={2}
                                className="portfolio-template__header">
                                Project Images
                            </Title>
                            <SwiperElm items={gallery} />
                            <div className="portfolio-template__buttons-container">
                                <Link
                                    className="iltlc-btn btn-secondary"
                                    to="/">
                                    Go Back
                                </Link>
                                <a
                                    className="iltlc-btn btn-secondary"
                                    href={webpage}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    To Webpage
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PortfolioTemplate
