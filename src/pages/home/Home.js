import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import AboutUs from '../../components/about-us/AboutUs'
import Services from '../../components/my-services/Services'
import Projects from '../../components/projects/Projects'
import Quote from '../../components/quote/Quote'
import Testimonials from '../../components/testimonials/Testimonials'
import Parallax from '../../components/_core/parallax/Parallax'
import Portfolio from '../../components/portfolio/Portfolio'
import Clients from '../../components/clients/Clients'
import PreFooter from '../../components/_core/pre-footer/PreFooter'
import {
    getHomeHeroImage,
    getCarouselImages,
    getAboutUsData,
    getServices,
    getProjects,
    getQuote,
    getTestimonials,
    getParallax,
    getPortfolios,
    getPortfoliosText,
    getClients,
    getClientsHeader,
    getClientsDescription,
    getPreFooter,
} from '../../components/utils/_componentsData'

const Home = () => {
    const [renderPage, setPageRendering] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div className="home">
            <Header
                heroImage={getHomeHeroImage()}
                carousel={getCarouselImages()}
                selected="heroImage"
            />
            {renderPage ? (
                <>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <AboutUs data={getAboutUsData()} />
                            </Col>
                        </Row>
                    </div>
                    <Row className="row-with-margin-bottom bg-color">
                        <Col xs={24}>
                            <div className="container">
                                <Services
                                    title="Services"
                                    services={getServices()}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <Projects
                                    title="Projects"
                                    projects={getProjects()}
                                />
                            </Col>
                        </Row>
                    </div>
                    <Row className="row-no-margin bg-color-black">
                        <Col xs={24}>
                            <div className="container">
                                <Quote data={getQuote()} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-with-margin-bottom bg-color">
                        <Col xs={24}>
                            <div className="container">
                                <Testimonials
                                    title="Testimonials"
                                    testimonials={getTestimonials()}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <Parallax parallax={getParallax()} />
                            </Col>
                        </Row>
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <Portfolio
                                    title="Portfolio"
                                    text={getPortfoliosText()}
                                    portfolios={getPortfolios()}
                                />
                            </Col>
                        </Row>
                    </div>
                    <Row className="row-with-margin-bottom bg-color">
                        <Col xs={24}>
                            <div className="container">
                                <Clients
                                    clients={getClients()}
                                    header={getClientsHeader()}
                                    description={getClientsDescription()}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <PreFooter data={getPreFooter()} />
                            </Col>
                        </Row>
                    </div>
                </>
            ) : (
                <div className="loading-spinner">
                    <Spin />
                </div>
            )}
        </div>
    )
}

export default Home
