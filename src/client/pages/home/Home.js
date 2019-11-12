import React from 'react'
import { Form, Row, Col } from 'antd'
import Header from '../../components/_core/header/Header'
import AboutMe from '../../components/about-me/AboutMe'
import MyServices from '../../components/my-services/MyServices'
import Projects from '../../components/projects/Projects'
import Testimonials from '../../components/testimonials/Testimonials'
import Parallax from '../../components/_core/parallax/Parallax'
import Contact from '../../components/contact/Contact'
import {
    getHomeHeroImage,
    getCarouselImages,
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
} from '../../components/_componentsData'

const Home = () => {
    const heroImage = getHomeHeroImage()
    const carousel = getCarouselImages()
    const aboutMeData = getAboutMeData()
    const myServicesData = getMyServicesData()
    const projectsData = getProjects()
    const testimonials = getTestimonials()
    const parallax = getParallax()
    const WrappedContact = Form.create()(Contact)
    return (
        <div className="home">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <Row>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <AboutMe
                        subtitle={aboutMeData.subtitle}
                        title={aboutMeData.title}
                        firstParagraph={aboutMeData.firstParagraph}
                        secondParagraph={aboutMeData.secondParagraph}
                        btnText={aboutMeData.btnText}
                        image={aboutMeData.image}
                    />
                </Col>
            </Row>
            <Row className="row-with-padding bg-color">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <MyServices services={myServicesData} />
                </Col>
            </Row>
            <Row className="row-with-padding">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <Projects projects={projectsData} />
                </Col>
            </Row>
            <Row className="row-with-padding">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <Testimonials testimonials={testimonials} />
                </Col>
            </Row>
            <Row className="row-with-padding">
                <Col xs={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 6 }}>
                    <Parallax parallax={parallax} />
                </Col>
            </Row>
            <Row className="row-with-padding">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <WrappedContact />
                </Col>
            </Row>
        </div>
    )
}

export default Home
