import React from 'react'
import { Row, Col, Form } from 'antd'
import Header from '../../components/_core/header/Header'
import Contact from '../../components/contact/Contact'
import SocialProfile from '../../components/about-me/SocialProfile'
import PersonalDataList from '../../components/about-me/PersonalDataList'
import {
    getContactHeroImage,
    getCarouselImages,
} from '../../components/_componentsData'

const ContactPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const WrappedContact = Form.create()(Contact)
    return (
        <div className="contact-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <Row>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <WrappedContact />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 6, offset: 6 }}>
                    <PersonalDataList />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 6, offset: 0 }}>
                    <SocialProfile />
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage
