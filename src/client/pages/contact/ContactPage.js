import React from 'react'
import { Row, Col, Form } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Contact from '../../components/contact/Contact'
import SocialProfile from '../../components/about-me/SocialProfile'
import ContactData from '../../components/about-me/ContactData'
import GoogleMap from '../../components/_core/map/Map'
import {
    getContactHeroImage,
    getCarouselImages,
    getContactData,
} from '../../components/_componentsData'

const ContactPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const contactData = getContactData()
    const WrappedContact = Form.create()(Contact)
    return (
        <div className="contact-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <div className="container">
                <Row className="row-with-margin-bottom">
                    <Col xs={24}>
                        <PageTitle
                            title="Contact"
                            subtitle="I’m always open to discussing product design work or partnerships."
                        />
                    </Col>
                </Row>
                <Row className="row-with-margin-bottom">
                    <Col xs={24} xl={8}>
                        <ContactData contactData={contactData} />
                        <SocialProfile />
                    </Col>
                    <Col xs={24} xl={16}>
                        <GoogleMap
                            containerElement={
                                <div style={{ height: `400px` }} />
                            }
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <WrappedContact />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ContactPage
