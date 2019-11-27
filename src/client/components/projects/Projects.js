import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Typography } from 'antd'
import './scss/projects.scss'

const Projects = ({ title = '', projects = [] }) => {
    const { Meta } = Card
    const { Title } = Typography
    return (
        <Row gutter={24} className="projects">
            <Title className="projects__header" level={2}>
                {title}
            </Title>
            {projects &&
                projects.map(project => {
                    return (
                        <Col xs={24} md={12} lg={8} key={project.id}>
                            <div className="projects__content">
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
