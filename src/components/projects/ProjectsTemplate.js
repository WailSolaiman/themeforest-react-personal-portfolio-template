import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import HeroImageElm from '../_core/heroimage/HeroImageElm'
import SwiperElm from '../_core/swiper/SwiperElm'
import { getOneProject } from '../utils/_componentsData'
import useWindowWidth from '../_core/utils/_coreUtils'
import './scss/projects-template.scss'

const ProjectsTemplate = () => {
    const { Title, Paragraph, Text } = Typography
    const { id } = useParams()
    const project = getOneProject(id)
    const windowWidth = useWindowWidth()
    const {
        header,
        subheader,
        paragraph,
        secondParagraph,
        thirdParagraph,
        services,
        platforms,
        desktopImage,
        mobileImage,
        gallery,
        tech,
    } = project
    const imageUrl = useWindowWidth() >= 768 ? desktopImage : mobileImage
    return (
        <div className="projects-template">
            <HeroImageElm
                item={{ header, subheader, desktopImage, mobileImage }}
                isFixed="fixed"
            />
            <div className="container">
                <div className="projects-template__container">
                    <Row gutter={24}>
                        <Col xs={24} lg={10}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }>
                                <Title className="projects-template__header">
                                    {subheader}
                                </Title>
                            </div>
                        </Col>
                        <Col xs={24} lg={14}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }>
                                <Text
                                    strong
                                    className="projects-template__text">
                                    Description
                                </Text>
                                <Paragraph className="projects-template__paragraph">
                                    {paragraph}
                                </Paragraph>
                                <Text
                                    strong
                                    className="projects-template__text">
                                    Services
                                </Text>
                                <Paragraph className="projects-template__paragraph">
                                    {services}
                                </Paragraph>
                                <Text
                                    strong
                                    className="projects-template__text">
                                    Platforms
                                </Text>
                                <Paragraph className="projects-template__paragraph">
                                    {platforms}
                                </Paragraph>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="projects-template__container bg-color">
                <div className="container">
                    <Row gutter={24}>
                        <Col xs={24} lg={14}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-right' : 'fade-up'
                                }
                                data-aos-delay="300"
                                data-aos-offset="300">
                                <img
                                    className="projects-template__image"
                                    src={imageUrl}
                                    alt={header}
                                />
                            </div>
                        </Col>
                        <Col xs={24} lg={10}>
                            <div
                                data-aos={
                                    windowWidth > 768 ? 'fade-left' : 'fade-up'
                                }
                                data-aos-delay="300"
                                data-aos-offset="300">
                                <Title
                                    className="projects-template__header"
                                    level={2}>
                                    {tech}
                                </Title>
                                <Paragraph className="projects-template__paragraph">
                                    {secondParagraph}
                                </Paragraph>
                                <Paragraph className="projects-template__paragraph">
                                    {thirdParagraph}
                                </Paragraph>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className="projects-template__container projects-template__container--last">
                    <Row gutter={24}>
                        <Col xs={24}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-offset="400">
                                <Title
                                    className="projects-template__header projects-template__header--center"
                                    level={2}>
                                    {tech} Screenshots
                                </Title>
                                <SwiperElm items={gallery} />
                                <Link
                                    className="iltlc-btn btn-secondary projects-template__btn"
                                    to="/">
                                    Go Back
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ProjectsTemplate
