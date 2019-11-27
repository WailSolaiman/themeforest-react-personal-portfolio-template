import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import ProfileImage from '../../components/about-me/ProfileImage'
import PersonalData from '../../components/about-me/PersonalData'
import Experience from '../../components/about-me/Experience'
import Education from '../../components/about-me/Education'
import Skills from '../../components/about-me/Skills'
import {
    getContactHeroImage,
    getCarouselImages,
    getAboutMePageTitle,
    getExperiences,
    getprofileImage,
    getPersonalData,
    getEducations,
    getSkills,
} from '../../components/utils/_componentsData'

const AboutPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    const { Title } = Typography
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
                heroImage={getContactHeroImage()}
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
                        <Col xs={24}>
                            <Title level={2}>Personal Infos.</Title>
                        </Col>
                        <Col xs={24} md={9} lg={6} xl={5}>
                            <ProfileImage profileImage={getprofileImage()} />
                        </Col>
                        <Col xs={24} md={15} lg={18} xl={19}>
                            <PersonalData personalData={getPersonalData()} />
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 0, lg: 24 }}>
                        <Col xs={24} lg={12}>
                            <Experience experiences={getExperiences()} />
                        </Col>
                        <Col xs={24} lg={12}>
                            <Education educations={getEducations()} />
                        </Col>
                        <Col xs={24}>
                            <Skills skills={getSkills()} />
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
