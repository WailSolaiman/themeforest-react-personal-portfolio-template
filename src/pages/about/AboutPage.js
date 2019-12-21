import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import ProfileImage from '../../components/about-me/ProfileImage'
import PersonalData from '../../components/about-me/PersonalData'
import Experience from '../../components/about-me/Experience'
import Education from '../../components/about-me/Education'
import Skills from '../../components/about-me/Skills'
import {
    getAboutHeroImage,
    getCarouselImages,
    getAboutMePageTitle,
    getExperiences,
    getprofileImage,
    getPersonalData,
    getEducations,
    getSkills,
} from '../../components/utils/_componentsData'
import useWindowWidth from '../../components/_core/utils/_coreUtils'

const AboutPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    const windowWidth = useWindowWidth()
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div className="about-page">
            <Header
                heroImage={getAboutHeroImage()}
                carousel={getCarouselImages()}
                selected="heroImage"
            />
            {renderPage ? (
                <div className="container">
                    <Row className="row-with-margin-bottom">
                        <Col xs={24}>
                            <PageTitle data={getAboutMePageTitle()} />
                        </Col>
                    </Row>
                    <Row
                        className="row-with-margin-bottom"
                        gutter={{ xs: 0, md: 24 }}>
                        <Col xs={24} md={9} lg={6} xl={6}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }>
                                <ProfileImage
                                    profileImage={getprofileImage()}
                                />
                            </div>
                        </Col>
                        <Col xs={24} md={15} lg={18} xl={18}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }>
                                <PersonalData
                                    personalData={getPersonalData()}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 0, lg: 24 }}>
                        <Col xs={24} lg={12}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }>
                                <Experience experiences={getExperiences()} />
                            </div>
                        </Col>
                        <Col xs={24} lg={12}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }>
                                <Education educations={getEducations()} />
                            </div>
                        </Col>
                        <Col xs={24}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-offset="300">
                                <Skills skills={getSkills()} />
                            </div>
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

export default AboutPage
