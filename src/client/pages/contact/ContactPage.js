import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Contact from '../../components/contact/Contact'
import GoogleMap from '../../components/_core/map/Map'
import {
    getContactHeroImage,
    getCarouselImages,
    getContactPageTitle,
} from '../../components/utils/_componentsData'

const ContactPage = () => {
    const [renderPage, setPageRendering] = useState(false)
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
                heroImage={getContactHeroImage()}
                carousel={getCarouselImages()}
                selected="heroImage"
            />
            {renderPage ? (
                <div className="container">
                    <Row>
                        <Col xs={24}>
                            <PageTitle data={getContactPageTitle()} />
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
