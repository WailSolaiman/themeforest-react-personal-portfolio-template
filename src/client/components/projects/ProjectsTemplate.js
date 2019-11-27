import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import HeroImageElm from '../_core/heroimage/HeroImageElm'
import CarouselElm from '../_core/carousel/CarouselElm'
import {
    getHomeHeroImage,
    getCarouselImages,
    getOneProject,
} from '../utils/_componentsData'
import './scss/projects-template.scss'

const ProjectsTemplate = () => {
    const { Title, Paragraph, Text } = Typography
    const heroImage = getHomeHeroImage()
    const carousel = getCarouselImages()
    const { id } = useParams()
    const project = getOneProject(id)
    const {
        title,
        paragraph,
        secondParagraph,
        services,
        platforms,
        img,
        tech,
    } = project

    return (
        <div className="projects-template">
            <HeroImageElm item={heroImage} />
            <div className="container">
                <div className="projects-template__container">
                    <Row gutter={24}>
                        <Col xs={24} lg={10}>
                            <Title className="projects-template__header">
                                {title}
                            </Title>
                        </Col>
                        <Col xs={24} lg={14}>
                            <Text strong className="projects-template__text">
                                Project description
                            </Text>
                            <Paragraph className="projects-template__paragraph">
                                {paragraph}
                            </Paragraph>
                            <Text strong className="projects-template__text">
                                Services
                            </Text>
                            <Paragraph className="projects-template__paragraph">
                                {services}
                            </Paragraph>
                            <Text strong className="projects-template__text">
                                Platforms
                            </Text>
                            <Paragraph className="projects-template__paragraph">
                                {platforms}
                            </Paragraph>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="projects-template__container bg-color">
                <div className="container">
                    <Row gutter={24}>
                        <Col xs={24} lg={18}>
                            <img
                                className="projects-template__image"
                                src={img}
                                alt={title}
                            />
                        </Col>
                        <Col xs={24} lg={6}>
                            <Title
                                className="projects-template__header"
                                level={2}>
                                {tech}
                            </Title>
                            <Paragraph className="projects-template__paragraph">
                                {secondParagraph}
                            </Paragraph>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className="projects-template__container projects-template__container--last">
                    <Row gutter={24}>
                        <Col xs={24}>
                            <Title
                                className="projects-template__header projects-template__header--center"
                                level={2}>
                                More Images
                            </Title>
                            <CarouselElm items={carousel} />
                            <Link
                                className="iltlc-btn btn-secondary projects-template__btn"
                                to="/">
                                Go Back
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ProjectsTemplate
