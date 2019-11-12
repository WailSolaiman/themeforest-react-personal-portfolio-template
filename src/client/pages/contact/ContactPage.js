import React from 'react'
import { Row, Col, Form } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Contact from '../../components/contact/Contact'
import SocialProfile from '../../components/about-me/SocialProfile'
import ContactData from '../../components/about-me/ContactData'
import Parallax from '../../components/_core/parallax/Parallax'
import {
    getContactHeroImage,
    getCarouselImages,
    getParallax,
    getContactData,
} from '../../components/_componentsData'

const ContactPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const WrappedContact = Form.create()(Contact)
    const parallax = getParallax()
    const contactData = getContactData()
    return (
        <div className="contact-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <PageTitle
                title="Contact"
                subtitle="I’m always open to discussing product design work or partnerships."
            />
            <Row gutter={24} className="row-with-padding">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 4, offset: 6 }}>
                    <ContactData contactData={contactData} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 0 }}>
                    <SocialProfile />
                </Col>
            </Row>
            <Row>
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

export default ContactPage
