import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    getTeamMember,
} from '../../components/utils/_componentsData'
import useWindowWidth from '../../components/_core/utils/_coreUtils'

const AboutMePage = () => {
    const [renderPage, setPageRendering] = useState(false)
    const windowWidth = useWindowWidth()
    const { id } = useParams()
    const memberData = getTeamMember(id)
    const {
        name,
        position,
        image,
        personalData,
        experiences,
        educations,
        skills,
    } = memberData
    const aboutTeamMember = {
        title: name,
        subtitle: position,
    }
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
                <div className="container">
                    <Row className="row-with-margin-bottom">
                        <Col xs={24}>
                            <PageTitle data={aboutTeamMember} />
                        </Col>
                    </Row>
                    <Row
                        className="row-with-margin-bottom"
                        gutter={{ xs: 0, md: 24 }}>
                        <Col xs={24} md={8}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }>
                                <ProfileImage profileImage={image} />
                            </div>
                        </Col>
                        <Col xs={24} md={16}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }>
                                <PersonalData personalData={personalData} />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 0, lg: 24 }}>
                        <Col xs={24} lg={12}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }>
                                <Experience experiences={experiences} />
                            </div>
                        </Col>
                        <Col xs={24} lg={12}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }>
                                <Education educations={educations} />
                            </div>
                        </Col>
                        <Col xs={24}>
                            <div data-aos="fade-up" data-aos-offset="300">
                                <Skills skills={skills} />
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

export default AboutMePage
