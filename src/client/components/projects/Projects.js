import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Typography } from 'antd'
import './scss/projects.scss'

const Projects = ({ title = '', projects = [] }) => {
    const { Meta } = Card
    const { Title } = Typography
    let aosDelayCounter = 0
    return (
        <Row gutter={24} className="projects">
            <Title className="projects__header" level={2}>
                {title}
            </Title>
            {projects &&
                projects.map((project, index) => {
                    const counter = index > 0 ? (aosDelayCounter += 50) : 0
                    return (
                        <Col xs={24} md={12} lg={8} key={project.id}>
                            <div
                                className="projects__content"
                                data-aos="fade"
                                data-aos-offset="150"
                                data-aos-delay={counter}>
                                <Card
                                    className="card"
                                    title={project.tech}
                                    extra={
                                        <Link to={`/projects/${project.id}`}>
                                            More
                                        </Link>
                                    }
                                    cover={
                                        <img
                                            alt={project.title}
                                            src={project.img}
                                        />
                                    }>
                                    <Meta
                                        title={project.title}
                                        description={project.excerpt}
                                    />
                                </Card>
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default Projects
