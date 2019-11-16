import React from 'react'
import { Form, Row, Col } from 'antd'
import Header from '../../components/_core/header/Header'
import AboutMe from '../../components/about-me/AboutMe'
import MyServices from '../../components/my-services/MyServices'
import Projects from '../../components/projects/Projects'
import Quote from '../../components/quote/Quote'
import Testimonials from '../../components/testimonials/Testimonials'
import Parallax from '../../components/_core/parallax/Parallax'
import Portfolio from '../../components/portfolio/Portfolio'
// import Contact from '../../components/contact/Contact'
import {
    getHomeHeroImage,
    getCarouselImages,
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
    getPortfolios,
    getPortfoliosText,
} from '../../components/_componentsData'

const Home = () => {
    const heroImage = getHomeHeroImage()
    const carousel = getCarouselImages()
    const aboutMeData = getAboutMeData()
    const myServicesData = getMyServicesData()
    const projectsData = getProjects()
    const testimonials = getTestimonials()
    const parallax = getParallax()
    const portfolios = getPortfolios()
    const portfoliosText = getPortfoliosText()
    // const WrappedContact = Form.create()(Contact)
    return (
        <div className="home">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <AboutMe
                            subtitle={aboutMeData.subtitle}
                            title={aboutMeData.title}
                            firstParagraph={aboutMeData.firstParagraph}
                            secondParagraph={aboutMeData.secondParagraph}
                            thirdParagraph={aboutMeData.thirdParagraph}
                            btnText={aboutMeData.btnText}
                            image={aboutMeData.image}
                        />
                    </Col>
                </Row>
            </div>

            <Row className="row-with-margin-bottom bg-color">
                <Col xs={24}>
                    <div className="container">
                        <MyServices
                            title="Services"
                            services={myServicesData}
                        />
                    </div>
                </Col>
            </Row>

            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <Projects title="Projects" projects={projectsData} />
                    </Col>
                </Row>
            </div>

            <Row className="row-no-margin bg-color-black">
                <Col xs={24}>
                    <div className="container">
                        <Quote
                            subtitle="i. l. t. l. c"
                            title="i love templates, layouts and components"
                        />
                    </div>
                </Col>
            </Row>

            <Row className="row-with-margin-bottom bg-color">
                <Col xs={24}>
                    <div className="container">
                        <Testimonials
                            title="Testimonials"
                            testimonials={testimonials}
                        />
                    </div>
                </Col>
            </Row>

            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <Parallax parallax={parallax} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <Portfolio
                            title="Portfolio"
                            text={portfoliosText}
                            portfolios={portfolios}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home
