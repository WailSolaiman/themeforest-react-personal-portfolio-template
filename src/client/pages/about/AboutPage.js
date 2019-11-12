import React from 'react'
import { Row, Col } from 'antd'
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
    getExperiences,
    getprofileImage,
    getPersonalData,
    getEducations,
    getSkills,
} from '../../components/_componentsData'

const AboutPage = () => {
    const heroImage = getContactHeroImage()
    const carousel = getCarouselImages()
    const experiences = getExperiences()
    const profileImage = getprofileImage()
    const personalData = getPersonalData()
    const educations = getEducations()
    const skills = getSkills()
    return (
        <div className="about-page">
            <Header
                heroImage={heroImage}
                carousel={carousel}
                selected="heroImage"
            />
            <PageTitle
                title="About Me"
                subtitle="I design and code beautiful things, and I love what I do."
            />
            <Row gutter={24}>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 4, offset: 6 }}>
                    <ProfileImage profileImage={profileImage} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 8, offset: 0 }}>
                    <PersonalData personalData={personalData} />
                </Col>
            </Row>
            <Row gutter={24} className="row-with-padding">
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 6, offset: 6 }}>
                    <Experience experiences={experiences} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 6, offset: 0 }}>
                    <Education educations={educations} />
                </Col>
                <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                    <Skills skills={skills} />
                </Col>
            </Row>
        </div>
    )
}

export default AboutPage
