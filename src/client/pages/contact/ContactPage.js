import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Contact from '../../components/contact/Contact'
import GoogleMap from '../../components/_core/map/Map'
import {
    getContactHeroImage,
    getCarouselImages,
} from '../../components/utils/_componentsData'

const ContactPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const WrappedContact = Form.create()(Contact)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div className="contact-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            {renderPage ? (
                <div className="container">
                    <Row>
                        <Col xs={24}>
                            <PageTitle
                                title="Contact"
                                subtitle="I’m always open to discussing product design work or partnerships."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <GoogleMap />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <WrappedContact />
                        </Col>
                    </Row>
                </div>
            ) : (
                <div className="loading-spinner">
                    <Spin />
                </div>
            )}
        </div>
    )
}

export default ContactPage
