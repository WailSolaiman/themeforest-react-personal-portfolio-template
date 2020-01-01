import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import SwiperElm from '../../components/_core/swiper/SwiperElm'
import Team from '../../components/about-us/Team'
import Gallery from '../../components/_core/gallery/Gallery'
import {
    getAboutHeroImage,
    getCarouselImages,
    getAboutUsPageTitle,
    getTeamImages,
    getTeamMembers,
    getEvents,
} from '../../components/utils/_componentsData'

const AboutUsPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div>
            <Header
                heroImage={getAboutHeroImage()}
                carousel={getCarouselImages()}
                selected="gradient"
            />
            {renderPage ? (
                <div>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <PageTitle data={getAboutUsPageTitle()} />
                            </Col>
                        </Row>
                    </div>
                    <div className="container">
                        <SwiperElm items={getTeamImages()} />
                    </div>
                    <Row className="row-with-margin-bottom bg-color">
                        <Col xs={24}>
                            <div className="container">
                                <Team title="Team" members={getTeamMembers()} />
                            </div>
                        </Col>
                    </Row>
                    <div className="container">
                        <Row className="row-with-margin-bottom">
                            <Col xs={24}>
                                <Gallery title="Events" images={getEvents()} />
                            </Col>
                        </Row>
                    </div>
                </div>
            ) : (
                <div className="loading-spinner">
                    <Spin />
                </div>
            )}
        </div>
    )
}

export default AboutUsPage
